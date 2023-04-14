from django.contrib import admin
from .models import Seller, Cart, Product

# Register your models here.
admin.site.register(Seller)

admin.site.register(Cart)

admin.site.register(Product)