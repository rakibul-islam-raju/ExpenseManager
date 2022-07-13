from rest_framework.generics import ListCreateAPIView

from .serializers import CategorySerializer, ExpenseSerializer, LabelSerializer
from .models import Category, Expense, Label


class CategoryListCreate(ListCreateAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.filter(is_active=True, created_by=self.request.user)


class LabelListCreate(ListCreateAPIView):
    serializer_class = LabelSerializer

    def get_queryset(self):
        return Label.objects.filter(is_active=True, created_by=self.request.user)


class ExpenseListCreate(ListCreateAPIView):
    serializer_class = ExpenseSerializer

    def get_queryset(self):
        return Expense.objects.filter(is_active=True, created_by=self.request.user)
