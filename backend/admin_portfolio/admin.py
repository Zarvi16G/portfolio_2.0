from django.contrib import admin
from .models import Project, Technology, Skill, Experience, Education, ContactMessage

# Register your models here.
admin.site.register(Project)
admin.site.register(Technology)
admin.site.register(Skill)
admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(ContactMessage)
