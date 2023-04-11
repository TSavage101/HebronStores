from django.shortcuts import render, redirect

from django.contrib.auth.models import User, auth
from django.contrib import messages

from django.contrib.auth.decorators import login_required

from .models import Seller, Cart

# Create your views here.
def home(request, *args, **kwargs):
    return render(request, 'index.html', {})

def authe(request, *args, **kwargs):
    
    if request.method == 'POST':
        if 'semail' in request.POST:
            name = request.POST['name']
            email = request.POST['semail']
            tel = request.POST['tel']
            password = request.POST['spassword']
            is_seller = request.POST['isseller']
            
            if User.objects.filter(email=email).exists():
                messages.info(request, 'This account already exists.')
                return redirect('auth')
            else:
                new_user = User.objects.create_user(username=name, email=email, password=password)
                new_user.save()
                
                new_cart = Cart.objects.create(user=name)
                new_cart.save()
                
                if is_seller == 1:
                    new_seller = Seller.objects.create(user=new_user, id_user=new_user.id, phone_number=tel)
                    new_seller.save()
                    
                    return redirect('bankform')
                    
                user = auth.authenticate(username=name, email=email, password=password)
                auth.login(request, user)
                return redirect('home')
            
        else:
            email = request.POST['email']
            password = request.POST['password']
            
            try:
                the_username = User.objects.get(email=email).username
            except:
                the_username = email

            user = auth.authenticate(username=the_username, email=email, password=password)
            
            if user is not None:
                auth.login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Invalid Login Credentials.')
    else:
        return render(request, 'auth.html', {})
    
    return render(request, 'auth.html', {})

def product(request, *args, **kwargs):
    return render(request, 'product.html', {})

def bankform(request, *args, **kwargs):
    return render(request, 'bankform.html', {})