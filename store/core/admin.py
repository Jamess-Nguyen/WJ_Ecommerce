from django.contrib import admin

# Register your models here.
from .models import StoreItem, CartItem, Customer

admin.site.register(StoreItem)
admin.site.register(CartItem)
admin.site.register(Customer)