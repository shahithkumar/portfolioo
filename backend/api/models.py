from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(help_text="Short summary for the card")
    problem_statement = models.TextField(blank=True)
    solution_overview = models.TextField(blank=True)
    features = models.TextField(blank=True, help_text="List features (e.g. using bullets or one per line)")
    architecture_description = models.TextField(blank=True)
    technical_breakdown = models.TextField(blank=True)
    role = models.CharField(max_length=100, default="Developer")
    timeline = models.CharField(max_length=100, default="Ongoing")
    status = models.CharField(max_length=100, default="In Progress")
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    problem_hook = models.TextField(blank=True, help_text="Attention-grabbing problem statement (e.g. 'Ever wasted hours scrolling for jobs?')")
    video = models.FileField(upload_to='videos/', blank=True, null=True)
    tech_stack = models.CharField(max_length=200, help_text="Comma-separated technologies")
    github_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('LG', 'Languages'),
        ('FW', 'Frameworks / Libraries'),
        ('AI', 'AI / ML'),
        ('DA', 'Data & Analytics'),
        ('DB', 'Databases'),
    ]
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=2, choices=CATEGORY_CHOICES)
    icon = models.CharField(max_length=50, blank=True, help_text="FontAwesome or equivalent class name")

    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"
