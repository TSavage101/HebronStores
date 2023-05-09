from django.db import models

from django.contrib.auth import get_user_model

from datetime import datetime

User = get_user_model()

TYPE = (
    ('food','FOOD'),
    ('fashion','FASHION'),
    ('gadgets','GADGETS'),
    ('school','SCHOOL'),
    ('cosmetics','COSMETICS'),
    ('miscellaneous','MISCELLANEOUS'),
)

# Create your models here.
class Seller(models.Model):
    id_user = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    acc_num = models.CharField(max_length = 10)
    bank = models.CharField(max_length = 100)
    acc_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=12)
    instagram = models.CharField(max_length=12)
    telegram = models.CharField(max_length=12)
    whatsapp = models.CharField(max_length=12)
    amount_earned = models.IntegerField(default = 0)
    no_of_sales = models.IntegerField(default = 0)
    no_of_products = models.IntegerField(default = 0)
    pending_orders = models.IntegerField(default = 0)
    average_product_rating = models.DecimalField(default = 0, max_digits=2, decimal_places=1)
    is_verified = models.BooleanField(default=False)
    
    def __str__(self):
        return self.user.username

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    no_in_cart = models.IntegerField(default = 0)
    
    def __str__(self):
        return f"{self.user}'s cart"
    
class Product(models.Model):
    name = models.CharField(max_length=150)
    price = models.DecimalField(decimal_places=2, max_digits=100)
    commission = models.DecimalField(decimal_places=2, max_digits=100)
    delivery_fee = models.DecimalField(decimal_places=2, max_digits=100, blank=True, null=True) 
    do_delivery = models.BooleanField(default=True)
    picture1 = models.ImageField(upload_to='pics', default='cart.png')
    picture2 = models.ImageField(upload_to='pics', default='1160358.png', blank=True, null=True)
    picture3 = models.ImageField(upload_to='pics', default='1160358.png', blank=True, null=True)
    picture4 = models.ImageField(upload_to='pics', default='1160358.png', blank=True, null=True)
    picture5 = models.ImageField(upload_to='pics', default='1160358.png', blank=True, null=True)
    seller = models.CharField(max_length=150)
    seller_email = models.EmailField(max_length=100)
    seller_number = models.CharField(max_length=12)
    seller_instagram = models.CharField(max_length=12, blank=True, null=True)
    category = models.CharField(max_length=20, choices=TYPE, default="miscellaneous")
    sales = models.IntegerField(default=0)
    details = models.TextField(blank=True, null=True)
    rating = models.IntegerField(default=0)
    arating = models.DecimalField(default=0, max_digits=2, decimal_places=1)
    quantity = models.IntegerField()
    feedback = models.TextField(blank=True, null=True)
    date = models.DateTimeField(default=datetime.now)
    featured = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.name} sold by {self.seller} "
    
class Review(models.Model):
    user = models.CharField(max_length=200)
    rating = models.IntegerField()
    comment = models.TextField()
    product = models.CharField(max_length=200)
    
    def __str__(self):
        return f"{self.user} rated {self.product} {self.rating} stars"

class CartItem(models.Model):
    user = models.CharField(max_length=200)
    item = models.CharField(max_length=200)
    number = models.IntegerField()
    
    def __str__(self):
        return f"{self.number} {self.item}s in {self.user}'s cart"