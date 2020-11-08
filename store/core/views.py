from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response 
from . models import *
from . serializer import *

# Create your views here.

class StoreItemView(APIView):
    serializer_class = StoreItemSerializer

    def get(self, request):
        """Gets the data."""
        detail = [{"name": detail.name, "description": detail.description,
                "price": detail.price, "inventory": detail.inventory}
                for detail in StoreItem.objects.all()]
        return Response(detail)

    
    #def post(self, request):
    #    """ Didn't edit this. """
    #    serializer = StoreItemSerializer(data=request.data) 
    #    if serializer.is_valid(raise_exception=True): 
    #        serializer.save() 
    #        return Response(serializer.data) 


class CartItemView(APIView):
    serializer_class = CartItemSerializer

    def get(self, request):
        """Gets the data."""
        detail = [{"customer": detail.customer, "item": detail.item, 
                "quantity": detail.quantity}
                for detail in StoreItem.objects.all()]
        return Response(detail)


class CustomerView(APIView):
    serializer_class = CustomerSerializer

    def get(self, request):
        """Gets the data."""
        detail = [{"firstname": detail.firstname, "lastname": detail.lastname}
                for detail in StoreItem.objects.all()]
        return Response(detail)