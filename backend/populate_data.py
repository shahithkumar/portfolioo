import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api.models import Project, Skill

def populate():
    print("Clearing existing data...")
    Project.objects.all().delete()
    Skill.objects.all().delete()

    print("Creating Projects...")
    
    # JobBot
    jobbot_description = """
JobBot is an agentic AI system designed to automate job hunting with the speed of a bot and the precision of a human. Instead of mass auto-applying or acting like a passive tracker, JobBot behaves like a controlled job-application factory where every action is intelligent, verified, and ethically safe.

It solves a core problem: job hunting needs both scale and personalization. Humans can personalize but not scale. Bots can scale but lack quality. JobBot merges both.

🧠 **Core Idea**
"Automate execution, not responsibility."
The AI assists, but the human always stays in control.

🛡️ **Feature 1: Safe Resume Tailoring Engine (Anti-Hallucination AI)**
*Problem:* Normal AI tools often invent experience (e.g., "You have 5 years of React experience" ❌).
*Solution:* JobBot treats the resume as a read-only truth database.
*How it works:*
1. Resume is stored as structured JSON (skills, projects, experience).
2. This JSON becomes the only source of truth.
3. AI outputs pure LaTeX code, not Word.
4. Backend compiles LaTeX → PDF using a local engine.
*Result:* ATS-friendly, pixel-perfect formatting, 100% factual, generated in under 2 seconds.

✉️ **Feature 2: Human-in-the-Loop Recruiter Outreach**
*Problem:* Letting bots directly email HR damages reputation.
*Solution:* Asynchronous approval workflow.
*How it works:*
1. Cron runs daily at 4 PM.
2. Filter: verification_status = "verified".
3. LLM drafts 5 personalized emails.
4. User receives ONE digest email with drafts.
5. User actions: APPROVE ALL, EDIT, or REJECT.
6. Approved drafts enter a queue with random delays (10-45 mins) to be spam-filter safe.

🎤 **Feature 3: AI Mock Interview Coach**
This is not a chatbot. It is a role-play interview engine.
*How it works:*
- Injects Resume, Job Description, Company Name, Role Type.
- LLM becomes "Google Engineering Manager" to conduct technical and behavioral rounds.
- After interview, AI evaluates answers using STAR structure, clarity, confidence, and technical accuracy.
*Output:* A performance report, not just chat logs.

📊 **Feature 4: Analytics Dashboard + Kanban**
Job hunting becomes measurable.
- **Pipeline:** Applied → Interview → Offer
- **Drag & Drop:** Updates DB state instantly.
- **Metrics:** Applications per day, Interview conversion rate, Funnel performance.

🔥 **JobBot is:** An AI-powered job-hunting factory with quality control.
"""
    Project.objects.create(
        title="JobBot – AI-Powered Job Search Automation Platform",
        role="Full Stack Developer & AI Engineer",
        timeline="4 Weeks",
        status="Production Ready",
        video="videos/JobBot.mp4",
        tech_stack="Django, Python, React, PostgreSQL, TailwindCSS, LaTeX, Groq LLMs, OCR, Celery/Cron, REST APIs",
        description=jobbot_description
    )

    # Walletrix
    walletrix_description = """
Walletrix is not a tracker. It is a real-time financial discipline engine.
Most apps show what you spent. Walletrix changes how you behave.

⚙️ **Feature 1: Survival Budget Engine**
Instead of monthly static limits, Walletrix recalculates your daily limit after every transaction.
*Formula:* `daily_limit = (total_budget - total_spent) / days_left`
*Meaning:* Overspend today → tomorrow becomes stricter. Underspend today → tomorrow becomes easier.

🏦 **Feature 2: Smart Jar (Auto Savings)**
Unused money is captured automatically.
If Allowed = ₹1000 and Spent = ₹700, then ₹300 → Auto Save Fund.
*Frontend:* 🎉 Confetti animation. Psychological effect: Saving = Reward.

🧠 **Feature 3: Iron Will Algorithm**
Tracks discipline over 7 days.
- 0 Overbudget days: Perfect Control (Green)
- 1-2 Overbudget days: Mostly Good (Yellow)
- 3+ Overbudget days: Chaos Detected (Red)

📈 **Feature 4: Financial Health Score (0–100)**
Single number showing your money stability.
*Formula:* `Actual Spending / Ideal Pace`
*Meaning:* <0.9 = Safe, 1.2 = Emergency.

🔍 **Feature 5: Behavioral Pattern Detection**
Detects money leaks (e.g., "Weekend Spend > 1.5 × Weekday Spend").
*Output:* "Your Saturdays are killing your budget."

🤖 **Feature 6: AI Financial Coach**
When user asks "Can I buy a phone?", Backend sends financial context/stats. AI replies: Numeric. Logical. Realistic.
"""
    Project.objects.create(
        title="Walletrix – AI-Based Survival Budgeting App",
        role="Full Stack & AI Engineer",
        timeline="Ongoing",
        status="Production Ready",
        video="videos/Walletrix.mp4",
        tech_stack="Flutter, Dart, Django, PostgreSQL, Groq LLM, fl_chart, Glassmorphism UI, REST APIs",
        description=walletrix_description
    )

    print("Creating Skills...")
    skills = [
        # Languages
        ('Python', 'LG', 'fab fa-python'),
        ('SQL', 'LG', 'fas fa-database'),
        ('Dart', 'LG', 'fas fa-code'),
        ('JavaScript', 'LG', 'fab fa-js'),
        ('HTML', 'LG', 'fab fa-html5'),
        ('CSS', 'LG', 'fab fa-css3-alt'),
        # Frameworks
        ('Django', 'FW', 'fas fa-layer-group'),
        ('Django REST Framework (DRF)', 'FW', 'fas fa-server'),
        ('Flask', 'FW', 'fas fa-flask'),
        ('React', 'FW', 'fab fa-react'),
        ('Tailwind CSS', 'FW', 'fas fa-wind'),
        ('Flutter', 'FW', 'fas fa-mobile-alt'),
        # AI / ML
        ('Machine Learning', 'AI', 'fas fa-brain'),
        ('Deep Learning', 'AI', 'fas fa-network-wired'),
        ('TensorFlow', 'AI', 'fas fa-microchip'),
        ('LLM APIs', 'AI', 'fas fa-robot'),
        # Data & Analytics
        ('Power BI', 'DA', 'fas fa-chart-bar'),
        ('Tableau', 'DA', 'fas fa-chart-line'),
        ('Microsoft Excel', 'DA', 'fas fa-file-excel'),
        ('Pandas', 'DA', 'fas fa-table'),
        ('NumPy', 'DA', 'fas fa-calculator'),
        # Databases
        ('PostgreSQL', 'DB', 'fas fa-database'),
        ('MySQL', 'DB', 'fas fa-database'),
        ('SQLite', 'DB', 'fas fa-database'),
    ]

    for name, cat, icon in skills:
        Skill.objects.create(name=name, category=cat, icon=icon)

    print("Done!")

if __name__ == '__main__':
    populate()
