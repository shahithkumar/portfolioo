import os
import django
from django.core.management import call_command

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

try:
    print("Generating migrations...")
    call_command('makemigrations', 'api')
    print("Applying migrations...")
    call_command('migrate', 'api')
    print("Done!")
except Exception as e:
    print(f"Error: {e}")
