from rest_framework_simplejwt.views import TokenObtainPairView
from django.conf import settings
from rest_framework.response import Response
from rest_framework import status

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        
        if response.status_code == status.HTTP_200_OK:
            # Extraemos los tokens del JSON que generó SimpleJWT
            access_token = response.data.get('access')
            refresh_token = response.data.get('refresh')

            # Guardamos el Access Token en una cookie HttpOnly
            response.set_cookie(
                key=settings.SIMPLE_JWT['AUTH_COOKIE'],
                value=access_token,
                expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                secure=settings.SIMPLE_JWT.get('AUTH_COOKIE_SECURE', False),
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE'],
            )
            
            # (Opcional) Borramos el token del JSON para que no sea visible en JS
            # del response.data['access']
            # del response.data['refresh']

        return response