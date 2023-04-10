from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('auth/', views.authe, name='authe'),
    path('product/', views.product, name='product'),
]
