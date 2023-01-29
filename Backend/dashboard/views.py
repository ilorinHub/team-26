from rest_framework import viewsets,permissions,generics
from .models import Letter
from .serializers import *
from rest_framework.pagination import LimitOffsetPagination
from django_filters import rest_framework as filters
from rest_framework.response import Response
from django.core.exceptions import PermissionDenied
import pytesseract
from PIL import Image


class LetterViewSet(viewsets.ModelViewSet):
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer
    pagination_class = LimitOffsetPagination
    filter_backends = (filters.DjangoFilterBackend,)
    search_fields = ('title', 'content')
    ordering_fields = ('created_at')


class MemoViewSet(viewsets.ModelViewSet):
    queryset = Memo.objects.all()
    serializer_class = MemoSerializer
    pagination_class = LimitOffsetPagination
    filter_backends = (filters.DjangoFilterBackend,)
    search_fields = ('title', 'content')
    ordering_fields = ('created_at')


class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    pagination_class = LimitOffsetPagination
    filter_backends = (filters.DjangoFilterBackend,)
    search_fields = ('name', 'address','city', 'state', 'country', 'School_ID')
    ordering_fields = ('state', 'city', 'created_at')

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class LeaveRequestViewSet(viewsets.ModelViewSet):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer
    format = '%Y-%m-%'


class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class TrainingViewSet(viewsets.ModelViewSet):
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def get_queryset(self):
        queryset = User.objects.all()
        if not self.request.user.is_superuser:
            # Check if the user has a specific permission
            if not self.request.user.has_perm('auth.view_user'):
                raise PermissionDenied
        return queryset


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

def ocr_text(request):
    image = Image.open("./correspondence_files/memo.jpg")
    text = pytesseract.image_to_string(image)
    return Response ({'text': text})
    
class UserSignup(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [permissions.AllowAny]
    
