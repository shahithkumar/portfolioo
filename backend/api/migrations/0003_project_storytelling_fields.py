from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_project_role_project_status_project_timeline_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='problem_statement',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='project',
            name='solution_overview',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='project',
            name='features',
            field=models.TextField(blank=True, help_text='List features (e.g. using bullets or one per line)'),
        ),
        migrations.AddField(
            model_name='project',
            name='architecture_description',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='project',
            name='technical_breakdown',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(help_text='Short summary for the card'),
        ),
    ]
