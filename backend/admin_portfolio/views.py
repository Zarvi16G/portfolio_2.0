from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from .models import Project, Skill, Experience, Education, ContactMessage, Profile, SocialMedia, Attribution
from .serializers import ProjectSerializer, SkillSerializer, ExperienceSerializer, EducationSerializer, ContactSerializer, ProfileSerializer, SocialMediaSerializer, AttributionSerializer
from django.core.mail import send_mail
from django.conf import settings

@permission_classes([AllowAny])
class PortfolioView(APIView):
    def get(self, request):
        return Response({"message": "Portfolio API is working"})

@permission_classes([AllowAny])
class ProfileView(APIView):
    def get(self, request):
        profile = Profile.objects.all()
        serializer = ProfileSerializer(profile, many=True)
        return Response(serializer.data)

@permission_classes([AllowAny])
class SocialMediaView(APIView):
    def get(self, request):
        social_media = SocialMedia.objects.all()
        serializer = SocialMediaSerializer(social_media, many=True)
        return Response(serializer.data)

@permission_classes([AllowAny])
class AttributionView(APIView):
    def get(self, request):
        attribution = Attribution.objects.all()
        serializer = AttributionSerializer(attribution, many=True)
        return Response(serializer.data)

@permission_classes([AllowAny])
class ProjectView(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

@permission_classes([AllowAny])
class SkillView(APIView):
    def get(self, request):
        skills = Skill.objects.all()
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data)

@permission_classes([AllowAny])
class ExperienceView(APIView):
    def get(self, request):
        experiences = Experience.objects.all()
        serializer = ExperienceSerializer(experiences, many=True)
        return Response(serializer.data)

@permission_classes([AllowAny])
class EducationView(APIView):
    def get(self, request):
        educations = Education.objects.all()
        serializer = EducationSerializer(educations, many=True)
        return Response(serializer.data)

@permission_classes([AllowAny])
class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            message = serializer.validated_data['message']
            
            # Send email
            send_mail(
                subject='New Portfolio Message',
                message=f"From: {name}\nEmail: {email}\nMessage:\n\n{message}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL]
            )
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
