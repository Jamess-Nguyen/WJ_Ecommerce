from django.db import models

# Create your models here.

class Customer(models.Model):
    firstname = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)

    def __str__(self):
        return self.firstname + " " + self.lastname


class StoreItem(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=500)
    price = models.PositiveIntegerField()
    inventory = models.PositiveIntegerField()

    def __str__(self):
        return self.name + " @$" + str(self.price) + " ; " + str(self.inventory) + " in stock"


class CartItem(models.Model):
    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        null=True
    )
    item = models.ForeignKey(
        StoreItem,
        on_delete=models.CASCADE,
        null=True
    )
    quantity = models.PositiveIntegerField()

    def __str__(self):
        message = self.customer.name + "'s "
        message += self.item.name + " @$" + str(self.item.price)
        message += " ; " + str(self.quantity) + " in cart"
        return message


    def CalculatePrice(self):
        return price * quantity