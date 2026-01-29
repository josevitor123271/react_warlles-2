from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/signup/', views.SignupView.as_view(), name='signup'),
    path('api/auth/login/', views.LoginView.as_view(), name='login'),
    path('api/auth/logout/', views.LogoutView.as_view(), name='logout'),
    path('api/auth/profile/', views.ProfileView.as_view(), name='profile'),
    path('api/auth/delete-account/', views.DeleteAccountView.as_view(), name='delete_account'),
    path('api/auth/change-password/', views.ChangePasswordView.as_view(), name='change_password'),
    path('api/auth/users/', views.UserListView.as_view(), name='user-list'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
