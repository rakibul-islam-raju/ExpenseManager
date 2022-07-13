from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView,
)

from accounts.views import MyTokenObtainPairView, UserCreateView

app_name = "accounts"

urlpatterns = [
    path("login", MyTokenObtainPairView.as_view(), name="login"),
    path("register", UserCreateView.as_view(), name="register"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"),
]
