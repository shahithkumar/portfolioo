import os
import dj_database_url
from django.conf import settings
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import Project

try:
    print("Checking connection...")
    p = Project.objects.first()
    print("Success")
except Exception as e:
    print(f"Error: {e}")
