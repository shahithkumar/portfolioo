import os
import django
from django.db import connection

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

with connection.cursor() as cursor:
    cursor.execute("SELECT column_name FROM information_schema.columns WHERE table_name = 'api_project';")
    columns = [row[0] for row in cursor.fetchall()]
    print(f"Columns in api_project: {columns}")
    if 'problem_hook' in columns:
        print("SUCCESS: problem_hook exists!")
    else:
        print("FAILURE: problem_hook still missing.")
