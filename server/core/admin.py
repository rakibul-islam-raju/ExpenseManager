from django.contrib import admin
from .models import Expense, Category, Label

admin.site.register(Expense)
admin.site.register(Category)
admin.site.register(Label)
