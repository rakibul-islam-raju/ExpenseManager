from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .serializers import CategorySerializer, ExpenseSerializer, LabelSerializer
from .models import Category, Expense, Label


class CategoryListCreate(ListCreateAPIView):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer


class LabelListCreate(ListCreateAPIView):
    queryset = Label.objects.filter(is_active=True)
    serializer_class = LabelSerializer


class ExpenseListCreate(ListCreateAPIView):
    queryset = Expense.objects.filter(is_active=True)
    serializer_class = ExpenseSerializer
