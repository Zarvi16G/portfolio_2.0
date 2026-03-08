from django.db import models
# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    description = models.TextField()
    image = models.ImageField(upload_to='profile_images/')
    social_media = models.ManyToManyField('SocialMedia', related_name='profiles')

    def __str__(self):
        return self.name

class SocialMedia(models.Model):
    name = models.CharField(max_length=200)
    url = models.URLField()
    icon = models.ImageField(upload_to='social_media_images/', blank=True, null=True)
    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')
    url = models.URLField() 
    technologies = models.ManyToManyField('Technology', related_name='projects')

    def __str__(self):
        return self.name

class Technology(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='technology_images/', blank=True, null=True)
    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='skill_images/', blank=True, null=True)
    def __str__(self):
        return self.name

class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    is_current = models.BooleanField(default=False)
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title

class Education(models.Model):
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    is_current = models.BooleanField(default=False)
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.degree
    
class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name

class Attribution(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    url = models.URLField(default="https://www.flaticon.es/iconos-gratis/", blank=True, null=True)

    def __str__(self):
        return self.name