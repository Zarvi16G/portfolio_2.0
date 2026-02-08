from django.urls import path
from .views import PortfolioView, ProjectView, SkillView, ExperienceView, EducationView, ContactMessageView

urlpatterns = [
    path('portfolio/', PortfolioView.as_view()),
    path('projects/', ProjectView.as_view()),
    path('skills/', SkillView.as_view()),
    path('experiences/', ExperienceView.as_view()),
    path('educations/', EducationView.as_view()),
    path('contact/', ContactMessageView.as_view()),
]