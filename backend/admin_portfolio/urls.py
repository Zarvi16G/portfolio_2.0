from django.urls import path
from .views import PortfolioView, ProjectView, SkillView, ExperienceView, EducationView, ContactMessageView, ProfileView, SocialMediaView, AttributionView
from api.views import CustomTokenObtainPairView

urlpatterns = [
    path('portfolio/', PortfolioView.as_view()),
    path('projects/', ProjectView.as_view()),
    path('skills/', SkillView.as_view()),
    path('experiences/', ExperienceView.as_view()),
    path('educations/', EducationView.as_view()),
    path('contact/', ContactMessageView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('social-media/', SocialMediaView.as_view()),
    path('attribution/', AttributionView.as_view()),

    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]