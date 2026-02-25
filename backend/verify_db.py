import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from api.models import Project
with open('verify_result.txt', 'w') as f:
    for p in Project.objects.all():
        f.write(f"Title: {p.title}\n")
        f.write(f"Hook: {p.problem_hook}\n")
        f.write("-" * 20 + "\n")
