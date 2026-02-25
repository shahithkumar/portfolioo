import os
import django
from django.core.management import call_command
import sys

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

try:
    print("Starting migrations...")
    call_command('migrate', 'api')
    print("Migrations completed successfully.")
except Exception as e:
    print(f"Migration error: {e}")
    # If it fails because column exists, we might need to fake it.
    if "already exists" in str(e).lower():
        print("Column already exists, attempting to fake...")
        # Since 0003 and 0004 are the ones we care about
        # we might need to be careful.
