import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from api.models import Project
projects = Project.objects.all()
if not projects.exists():
    print("No projects found!")
for p in projects:
    print(f"Title: {p.title}")
    print(f"Hook: {p.problem_hook}")
    print("-" * 20)
