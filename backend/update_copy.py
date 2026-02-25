import os
import sys
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from api.models import Project

# Update Walletrix
try:
    p1 = Project.objects.get(title__icontains="Walletrix")
    p1.problem_statement = "Current finance apps track past spending but fail to guide users on how to survive financially in real time, leading to budgeting anxiety and poor financial decisions."
    
    p1.solution_overview = """Walletrix is designed as a real-time financial decision-making system, not just a tracker.

Instead of showing what already happened, it continuously answers:
👉 “What should I do with my remaining money?”

By combining adaptive budgeting, AI-driven insights, and structured savings, Walletrix transforms financial management into a proactive, intelligent, and guided experience.

**⚙️ Core Features & System Design**

**🔹 1. Dynamic Survival Budgeting Engine (Core Innovation)**
At the heart of Walletrix lies a real-time budgeting system that ensures financial survival until the next income cycle.
*Key Capabilities:*
- Recalculates safe daily spending limit after every transaction
- Adjusts dynamically based on:
  - Remaining balance
  - Number of days left until payday
- Handles unexpected expenses without breaking the system
*Impact:* Eliminates guesswork in daily spending. Prevents users from running out of money prematurely.
👉 *Users always know: “Can I afford this right now?”*

**🤖 2. AI-Powered Financial Coach**
Walletrix integrates an intelligent assistant powered by Groq LLaMA-3, acting as a real-time financial advisor.
*Key Capabilities:*
- Analyzes user spending behavior and patterns
- Generates:
  - Personalized financial insights
  - Context-aware suggestions
  - “What-if” scenario simulations
- Provides non-judgmental, empathetic guidance
*Impact:* Helps users make better financial decisions. Replaces confusion with clarity and direction.
👉 *Feels like a calm, intelligent financial mentor*

**🏦 3. Smart Savings Jars & Goal Tracking**
Walletrix separates money into purpose-driven allocations instead of treating it as a single pool.
*Key Capabilities:*
- Create multiple Savings Jars for different goals
- Allocate funds without affecting survival budget
- Visual goal tracking and progress monitoring
*Impact:* Encourages disciplined saving. Balances short-term survival with long-term growth.
👉 *Users don’t sacrifice the future to survive the present*

**📊 4. Multi-Tiered Financial Analytics**
Instead of overwhelming users with raw data, Walletrix focuses on meaningful insights.
*Key Capabilities:*
- Standard analytics: Spending patterns, Financial flow tracking
- Advanced analytics (Premium): Category-based forecasting, Predictive financial trends, Future balance projections
*Impact:* Converts financial data into actionable understanding. Helps users identify what is working and what is not.
👉 *Clarity over complexity*

**📅 5. Calendar-Based Transaction System**
Walletrix ensures transparency through a structured and intuitive tracking system.
*Key Capabilities:*
- Day-by-day expense visualization
- Easy auditing of past transactions
- Organized historical financial view
*Impact:* Improves awareness of spending habits. Makes financial tracking simple and intuitive.
👉 *Users can quickly understand their financial behavior*"""

    p1.tech_stack = "Flutter, Django, PostgreSQL, REST APIs, LLM"
    p1.save()
    print("Updated Walletrix successfully.")
except Project.DoesNotExist:
    print("Could not find Walletrix")

# Update JobBot
try:
    p2 = Project.objects.filter(title__icontains="JobBot").first()
    if p2:
        p2.problem_statement = "The job search process is fragmented and inefficient, requiring candidates to manually manage applications, optimize resumes for ATS, and prepare for interviews without proper guidance, leading to stress, poor outcomes, and prolonged unemployment."
        
        p2.solution_overview = """JobBot is an agentic AI system designed to automate job hunting with the speed of a bot and the precision of a human. Instead of mass auto-applying or acting like a passive tracker, JobBot behaves like a controlled job-application factory where every action is intelligent, verified, and ethically safe.

**🔍 1. Smart Job Discovery Engine**
Fetches relevant job listings based on user-defined roles, location, and filters. Eliminates manual browsing across multiple platforms.
*How it works:*
- React-based search interface captures user inputs
- Django backend integrates with external APIs (JSearch via RapidAPI)
- Parses and returns structured job data (role, company, apply link)
- Users can directly push jobs into their tracking pipeline

**📄 2. AI Resume & Cover Letter Optimization (ATS Engine)**
Dynamically tailors resumes to match job descriptions. Increases ATS compatibility and keyword alignment.
*How it works:*
- Parses uploaded resumes (PDF/DOCX) using Python libraries
- Combines resume content with job description
- Sends structured prompt to LLM (Groq LLaMA-3 / GPT)
- Generates optimized resume + personalized cover letter

**📋 3. Interactive Application Tracker (Kanban System)**
Visual pipeline: Wishlist → Applied → Interview → Offer → Rejected. Enables structured tracking of job applications.
*How it works:*
- React + Framer Motion for drag-and-drop UI
- State updates synced with Django REST API
- PostgreSQL stores application states persistently

**🎙️ 4. Real-Time AI Interview Coach**
Simulates live interviews with instant feedback. Helps users improve communication and confidence.
*How it works:*
- Captures audio via Web Audio API
- Converts speech to text (Whisper / STT)
- LLM evaluates responses (STAR method, clarity, filler words)
- Generates feedback and next questions
- Optional TTS converts responses back to voice

**📧 5. Automated Outreach & Follow-Up System**
Tracks recruiter communication and automates follow-ups. Reduces missed opportunities due to lack of response.
*How it works:*
- Email monitoring via IMAP/Gmail API
- Detects response signals (Interview / Rejection / Offer)
- Triggers follow-up generation using LLM
- Sends or queues emails via SMTP / email APIs

**📊 6. Analytics & Performance Dashboard**
Converts job search into measurable insights.
*Metrics include:* Application Success Rate, Response / Ghosting Rate, Time-to-Interview / Offer
*How it works:*
- Backend aggregates data using SQL queries
- React visualizes metrics using chart libraries"""

        p2.tech_stack = "React, Python (Django, DRF), PostgreSQL, REST APIs, LLM Integration (Groq LLaMA-3), Whisper (STT), Email APIs"
        p2.save()
        print("Updated JobBot successfully.")
except Exception as e:
    print(f"Error updating JobBot: {e}")
