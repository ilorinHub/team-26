from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'letters', LetterViewSet)
router.register(r'memos', MemoViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'schools', SchoolViewSet)
router.register(r'teachers', TeacherViewSet)
router.register(r'buses', BusViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'trainings', TrainingViewSet)
router.register(r'users', UserViewSet)
router.register(r'organisation', OrganizationViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('ocr-text/', ocr_text, name='ocr_text'),
    path('signup/', UserSignup.as_view()),
]
