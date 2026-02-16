from rest_framework import serializers
from .models import Project, Technology, Skill, Experience, Education, ContactMessage, Profile, SocialMedia, Attribution

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name', 'icon'] 

class ProjectSerializer(serializers.ModelSerializer):       
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'url', 'image', 'technologies']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name', 'icon']

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'title', 'company', 'description', 'start_date', 'end_date']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'degree', 'institution', 'description', 'start_date', 'end_date', 'is_current']

class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    message = serializers.CharField()

class SocialMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMedia
        fields = ['id', 'name', 'url', 'icon']

class ProfileSerializer(serializers.ModelSerializer):
    social_media = SocialMediaSerializer(many=True, read_only=True)
    class Meta:
        model = Profile
        fields = ['id', 'name', 'email', 'description', 'image', 'social_media']

class AttributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribution
        fields = ['id', 'name', 'title', 'url']
