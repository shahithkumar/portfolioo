from django.urls import path
from .views import ProjectListAPIView, ProjectDetailAPIView, SkillListAPIView, ContactCreateAPIView

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetailAPIView.as_view(), name='project-detail'),
    path('skills/', SkillListAPIView.as_view(), name='skill-list'),
    path('contact/', ContactCreateAPIView.as_view(), name='contact-create'),
]
