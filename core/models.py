from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Seller(models.Model):
    id_user = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    acc_num = models.CharField(max_length = 10)
    bank = models.CharField(max_length = 100)
    phone_number = models.CharField(max_length=12)
    amount_earned = models.IntegerField(default = 0)
    no_of_sales = models.IntegerField(default = 0)
    no_of_products = models.IntegerField(default = 0)
    pending_orders = models.IntegerField(default = 0)
    average_product_rating = models.IntegerField(default = 0)
    
    def __str__(self):
        return self.user.username

class Cart(models.Model):
    user = models.CharField(max_length = 120)
    no_in_cart = models.IntegerField(default = 0)
    
    def __str__(self):
        return f"{self.user.username}'s cart"