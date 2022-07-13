from unicodedata import category
from django.db import models
from accounts.models import User


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True


class Category(BaseModel):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ["-created_at"]

    def __str__(self):
        return self.name


class Label(BaseModel):
    name = models.CharField(max_length=100)
    color_code = models.CharField(max_length=7)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.name


class Expense(BaseModel):
    category = models.ForeignKey(
        Category, blank=True, null=True, on_delete=models.SET_NULL
    )
    label = models.ForeignKey(Label, blank=True, null=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.TextField()

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
