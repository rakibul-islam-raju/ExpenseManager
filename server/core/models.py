from django.db import models
from django.contrib.auth.models import User


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True


class Category(BaseModel):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Label(BaseModel):
    name = models.CharField(max_length=100)
    color_code = models.CharField(max_length=7)

    def __str__(self):
        return self.name


class Expense(BaseModel):
    name = (models.CharField(max_length=255),)
    description = models.TextField()

    def __str__(self):
        return self.name
