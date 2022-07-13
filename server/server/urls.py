from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/v1/accounts/", include("accounts.urls", namespace="accounts")),
    path("api/v1/", include("core.urls", namespace="core")),
]
