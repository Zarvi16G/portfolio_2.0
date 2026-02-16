from django.urls import path, include
from two_factor.urls import urlpatterns as tf_urls
# from admin_portfolio.admin import two_factor_site
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', include(tf_urls)),
    path('backdoor_zarvi16g_root/', admin.site.urls),
    path('api/', include('admin_portfolio.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
