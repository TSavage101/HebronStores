from django.shortcuts import render, redirect

from django.http import HttpResponse, JsonResponse

from django.contrib.auth.models import User, auth
from django.contrib import messages

from django.contrib.auth.decorators import login_required

from .models import Seller, Cart, Product

# Create your views here.
def home(request, *args, **kwargs):
    
    all_products = Product.objects.all()
    
    context = {
        'all_products': all_products,
    }
    
    return render(request, 'index.html', context)

def authe(request, *args, **kwargs):
    
    if request.method == 'POST':
        if 'semail' in request.POST:
            name = request.POST['name']
            email = request.POST['semail']
            tel = request.POST['tel']
            password = request.POST['spassword']
            is_seller = request.POST.get('isseller')
            
            if User.objects.filter(email=email).exists():
                messages.info(request, 'This account already exists.')
                return redirect('auth')
            else:
                new_user = User.objects.create_user(username=name, email=email, password=password)
                new_user.save()
                
                new_cart = Cart.objects.create(user=new_user)
                new_cart.save()
                
                if is_seller != None:
                    new_seller = Seller.objects.create(user=new_user, id_user=new_user.id, phone_number=tel)
                    new_seller.save()
                    
                    user = auth.authenticate(username=name, email=email, password=password)
                    auth.login(request, user)
                    
                    return redirect('bankform')
                else:
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

def product(request, pk, *args, **kwargs):
    product = Product.objects.get(pk=pk)
    user_obj = User.objects.get(username=product.seller)
    seller = Seller.objects.get(id_user=user_obj.id, user=user_obj)
    
    context = {
        'product': product,
        'seller': seller,
    }
    
    return render(request, 'product.html', context)

@login_required(login_url='auth')
def bankform(request, *args, **kwargs):
    
    if request.method == 'POST':
        bank = request.POST['bank']
        acc_num = request.POST['accnum']
        acc_name = request.POST['accname']
        
        try:
            user_object = User.objects.get(username=request.user.username)
            seller = Seller.objects.get(user=user_object)
            
            seller.bank = bank
            seller.acc_num = acc_num
            seller.acc_name = acc_name
            seller.is_verified = True
            
            seller.save()
            
            return redirect('dashboard')
        except:
            return redirect('auth')
        
    else:
        return render(request, 'bankform.html', {})

@login_required(login_url='auth')
def dashboard(request, *args, **kwargs):
    sellers_products = Product.objects.filter(seller=request.user.username)
    context = {
        'sellers_products': sellers_products,
    }
    return render(request, 'dashboard.html', context)

@login_required(login_url='auth')
def addproduct(request, *args, **kwargs):
    
    if request.method == 'POST':
        image1 = request.FILES.get('image1')
        image2 = request.FILES.get('image2')
        image3 = request.FILES.get('image3')
        image4 = request.FILES.get('image4')
        image5 = request.FILES.get('image5')
        productname = request.POST['productname']
        price = request.POST['price']
        deliveryfee = request.POST['deliveryfee']
        dodelivery = request.POST.get('dodelivery')
        quantity = request.POST['quantity']
        category = request.POST['category']
        
        if request.FILES.get('image1') == None:
            messages.info(request, "Import atleast the main image for this product.")
            return redirect('.')
        else:
            if productname != None or price != None or quantity != None:
                user_obj = User.objects.get(username=request.user.username)
                seller = Seller.objects.get(user=user_obj)
                    
                new_product = Product.objects.create(name=productname,price=price, commission=(float(price) * 0.07),
                                                    picture1=image1, seller=request.user.username, seller_email=request.user.email,
                                                    seller_number=seller.phone_number, category=category, quantity=quantity)

                if request.FILES.get('image2') != None:
                    new_product.picture2 = image2
                if request.FILES.get('image3') != None:
                    new_product.picture3 = image3
                if request.FILES.get('image4') != None:
                    new_product.picture4 = image4
                if request.FILES.get('image5') != None:
                    new_product.picture5 = image5
                
                if dodelivery == None:
                    new_product.delivery_fee = deliveryfee
                
                new_product.save()
                return redirect('dashboard')
            else:
                messages.info(request, 'Please fill the missing fields.')
                return redirect('.')
        
    else:
        return render(request, 'addproduct.html', {})
    
@login_required(login_url='auth')
def logout(request, *args, **kwargs):
    auth.logout(request)
    return redirect('auth')

def categories(request, *args, **kwargs):
    return render(request, 'catergories.html', {})

# def jsstuff(request,  *args, **kwargs):
    
    
#     return JsonResponse()
