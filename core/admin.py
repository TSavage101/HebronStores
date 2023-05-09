from django.contrib import admin
from .models import Seller, Cart, Product, Review, CartItem

# Register your models here.
admin.site.register(Seller)

admin.site.register(Cart)

admin.site.register(Product)

admin.site.register(Review)

admin.site.register(CartItem)