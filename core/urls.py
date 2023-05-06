from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('auth/', views.authe, name='auth'),
    path('product/<int:pk>', views.product, name='product'),
    path('bankform/', views.bankform, name='bankform'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('addproduct/', views.addproduct, name='addproduct'),
    path('logout/', views.logout, name='logout'),
    path('categories/', views.categories, name='categories'),
]
