from django.db.models.signals import post_save, post_delete, pre_save
from django.contrib.auth.signals import user_logged_in, user_logged_out
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile, Correspondence, Version


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(pre_save, sender=Correspondence)
def increment_version(sender, instance, **kwargs):
    try:
        current_correspondence = Correspondence.objects.get(pk=instance.pk)
    except Correspondence.DoesNotExist:
        current_correspondence = None
    if current_correspondence:
        if current_correspondence.content != instance.content or current_correspondence.comments != instance.comments:
            version = Version.objects.create(version= instance.version.version + 0.1)
            instance.version = version


