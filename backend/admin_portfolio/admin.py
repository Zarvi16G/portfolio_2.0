from django.contrib import admin
from django.contrib.auth.models import User
from .models import Project, Technology, Skill, Experience, Education, ContactMessage, Attribution, Profile, SocialMedia
from two_factor.admin import AdminSiteOTPRequired
from two_factor.admin import AdminSite
from django_otp.plugins.otp_totp.models import TOTPDevice
from django_otp.plugins.otp_static.models import StaticDevice

two_factor_site = AdminSite()
admin.site.__class__ = AdminSiteOTPRequired
admin.site.register(Project)
admin.site.register(Technology)
admin.site.register(Skill)
admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(ContactMessage)
admin.site.register(Attribution)
admin.site.register(Profile)
admin.site.register(SocialMedia)

two_factor_site.register(User)
two_factor_site.register(TOTPDevice)
two_factor_site.register(StaticDevice)