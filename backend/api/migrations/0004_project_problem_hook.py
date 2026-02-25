from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_project_storytelling_fields'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='problem_hook',
            field=models.TextField(blank=True, help_text="Attention-grabbing problem statement (e.g. 'Ever wasted hours scrolling for jobs?')"),
        ),
    ]
