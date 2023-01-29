from datetime import datetime, timezone
from django.db import models
from django.contrib.auth.models import User
from django.db import models
from django.core.exceptions import ValidationError
from datetime import date
from PIL import Image
import pytesseract
from django.db.models.signals import post_save
from django.dispatch import receiver
from shortuuid.django_fields import ShortUUIDField

import json
from shortuuid.django_fields import ShortUUIDField



def validate_date_not_in_past(value):
    if value < date.today():
        raise ValidationError('Date cannot be in the past')


class Organization(models.Model):

    name = models.CharField(max_length=255)
    type_of_organization = models.CharField(max_length=15, default='office',choices=(('school', 'school'), ('ministry', 'ministry'), ('office', 'office')))
    address = models.CharField(max_length=255)
    department = models.CharField(max_length=15,choices=(('finance', 'finance'), ('works', 'works'), ('housing', 'housing'), ('planning', 'planning'), ('other', 'other')))
    created_at = models.DateTimeField(auto_now_add=True)

    
    def __str__(self):
        return self.name

class Version(models.Model):
    #version is a float field that auto increments by 0.1
    version = models.FloatField(default=1.0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-version']
    
    def __str__(self):
        return f'{self.version}'
    

    




class Correspondence(models.Model):
    id = ShortUUIDField(length=28, max_length=40,prefix="KWS_CRD_",alphabet="abcdefg1234", primary_key=True)
    date = models.DateField(validators=[validate_date_not_in_past])
    subject = models.CharField(max_length=255)
    content = models.TextField()
    file_attachments = models.FileField(upload_to='correspondence_files/', blank=True)
    from_person = models.ForeignKey(User, on_delete=models.CASCADE, related_name= 'from_person')
    from_organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name= 'from_organization', related_query_name='from_address')
    to_person = models.ForeignKey(User, on_delete=models.CASCADE, related_name= 'to_person')
    to_organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name= 'to_organization',related_query_name='to_address')
    #location should be the last used to_address
    current_location = models.CharField(max_length=255)
    read_only = models.BooleanField(default=False)
    #priority is a choices field with the following options: High, Medium, Low
    priority = models.CharField(max_length=1, choices=[("H", "High"), ("M", "Medium"), ("L", "Low")],default="M")
    #version is a foreign key to the Version model that increases by 0.1 each time the correspondence is edited
    version = models.ForeignKey(Version, on_delete=models.CASCADE, related_name='correspondence')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['version'], name='unique_version')
        ]
    
    @property
    def is_read_only(self):
        now = datetime.datetime.now()
        time_diff = now - self.created_at
        if time_diff.total_seconds() > 1800: # 30 minutes
            return True
        return False

    def run_ocr_process(self):
        if self.file_attachments and not self.run_ocr:
            try:
                img = Image.open(self.file_attachments)
                text = pytesseract.image_to_string(img)
                self.ocr_text = text
                self.run_ocr = True
                self.save()
            except Exception as e:
                print(e)

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.created_at = timezone.utc
        super().save(*args, **kwargs)
        #version = Version.objects.create(correspondence=self, version=f'{timezone.utc} - {self.subject}')
        #self.versions.add(version)
        #self.save()
        #return correspondence id
        return self.id
        

class Memo(Correspondence):
    type = models.CharField(max_length=1, choices=[("M", "Memo")])

class Letter(Correspondence):
    type = models.CharField(max_length=1, choices=[("L", "Letter")])

class comment(models.Model):
    """minutes on a letter or memo, we need to know what was said,on what letter, by whom, and when"""
    type = models.CharField(max_length=1, choices=[("C", "Comment")])
    #on what letter or memo was the comment made
    correspondence = models.ForeignKey(Correspondence, on_delete=models.CASCADE, related_name='comments')
    #who made the comment
    comment_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Action(models.Model):
    """actions that need to be taken on a letter or memo, we need to know what was said,on what letter, by whom, and when"""
    type = models.CharField(max_length=1, choices=[("A", "Action")])
    #on what letter or memo was the action made
    correspondence = models.ForeignKey(Correspondence, on_delete=models.CASCADE, related_name='actions')
    #who made the action
    action_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='actions')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)


class School(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    School_ID = models.CharField(max_length=50,default='0')
    approve_tenancy = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Profile(models.Model):
    ROLES = (
        ('admin', 'Admin'),
        ('teacher', 'Teacher'),
        ('parent', 'Parent'),
        ('student', 'Student'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLES)
    organization = models.ForeignKey(Organization, on_delete=models.SET_NULL, null=True) 

    def __str__(self):
        return self.user.username

class Teacher(models.Model):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    qualifications = models.CharField(max_length=255)
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name='teachers')
    staff_id = models.CharField(max_length=50,default='0')
    attendance = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            profile, created = Profile.objects.get_or_create(user=self.user, defaults={'role': 'teacher'}, tenant=tenant)
            self.profile = profile
        super().save(*args, **kwargs)

    def __str__(self):
        return self.user.username


class LeaveRequest(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='leave_requests')
    leave_request_start = models.DateField(blank=True, null=True,validators=[validate_date_not_in_past])
    leave_request_end = models.DateField(blank=True, null=True,validators=[validate_date_not_in_past])
    created_at = models.DateTimeField(auto_now_add=True)

class Bus(models.Model):
    location = models.CharField(max_length=255)
    bus_number = models.CharField(max_length=255,default='0')
    plate_number = models.CharField(max_length=255,default='0')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Buses"

class Review(models.Model):
    review = models.CharField(max_length=255)
    school_or_teacher = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

class Training(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

