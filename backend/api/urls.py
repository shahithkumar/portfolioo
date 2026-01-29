from django.urls import path
from .views import ProjectListAPIView, SkillListAPIView, ContactCreateAPIView

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view(), name='project-list'),
    path('skills/', SkillListAPIView.as_view(), name='skill-list'),
    path('contact/', ContactCreateAPIView.as_view(), name='contact-create'),
]
