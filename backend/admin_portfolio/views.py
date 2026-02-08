from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Project, Skill, Experience, Education, ContactMessage
from .serializers import ProjectSerializer, SkillSerializer, ExperienceSerializer, EducationSerializer, ContactMessageSerializer

class PortfolioView(APIView):
    def get(self, request):
        return Response({"message": "Portfolio API is working"})

class ProjectView(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

class SkillView(APIView):
    def get(self, request):
        skills = Skill.objects.all()
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data)

class ExperienceView(APIView):
    def get(self, request):
        experiences = Experience.objects.all()
        serializer = ExperienceSerializer(experiences, many=True)
        return Response(serializer.data)

class EducationView(APIView):
    def get(self, request):
        educations = Education.objects.all()
        serializer = EducationSerializer(educations, many=True)
        return Response(serializer.data)

class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
