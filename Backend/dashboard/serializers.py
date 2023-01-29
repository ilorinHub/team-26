from rest_framework import serializers
from django.contrib.auth.models import Group
from .models import *
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')

class LetterSerializer(serializers.ModelSerializer):
    organization = serializers.SerializerMethodField()
    class Meta:
        model = Letter
        fields = '__all__'
        read_only_fields = ('created_at','id',)

    def create(self, validated_data):
        #groups_data = validated_data.pop('groups')
        newsletter = Letter.objects.create(**validated_data)
        #for group_data in groups_data:
        #    group, created = Group.objects.get_or_create(**group_data)
        #    newsletter.groups.add(group)
        return newsletter

    def update(self, instance, validated_data):
        groups_data = validated_data.pop('groups')
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()

        instance.groups.clear()
        for group_data in groups_data:
            group, created = Group.objects.get_or_create(**group_data)
            instance.groups.add(group)
        return instance

class MemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Memo
        fields = '__all__'
        read_only_fields = ('created_at','id')
    

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ('id', 'name', 'address', 'School_ID', 'approve_tenancy')

class LeaveRequestSerializer(serializers.Serializer):
    leave_request_start = serializers.DateField(input_formats=['%Y-%m-%d'])
    leave_request_end = serializers.DateField(input_formats=['%Y-%m-%d'])

    def create(self, validated_data): 
        leave_request_ = validated_data.get('leave_request')

class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teacher
        fields = ('id', 'profile', 'qualifications', 'school', 'staff_id', 'attendance', 'created_at')

    def create(self, validated_data):
        profile = Profile.objects.create(user=validated_data['user'], role='teacher')
        teacher = Teacher.objects.create(profile=profile, **validated_data)
        return teacher

        

class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = ('id', 'location', 'bus_number', 'plate_number')
    
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'review', 'school_or_teacher')

    
    
class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = ('id', 'title', 'description')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name','username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
        
        
class ProfileSerializer(serializers.ModelSerializer):
    organization = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = ('user', 'role','organization')

    def get_organization(self, obj):
        return obj.organization.name if obj.organization else None

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = "__all__"
        

class SignupSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user