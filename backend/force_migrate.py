import os
import django
from django.core.management import call_command

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

try:
    print("Starting migration...")
    call_command('migrate', 'api')
    print("Migration finished successfully.")
except Exception as e:
    print(f"Migration failed: {e}")
