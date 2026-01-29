from rest_framework import generics
from .models import Project, Skill, Contact
from .serializers import ProjectSerializer, SkillSerializer, ContactSerializer

class ProjectListAPIView(generics.ListAPIView):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class SkillListAPIView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ContactCreateAPIView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
