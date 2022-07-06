from django.urls import path
from .views import CategoryListCreate, LabelListCreate, ExpenseListCreate

app_name = "core"

urlpatterns = [
    path("categories", CategoryListCreate.as_view(), name="categories"),
    path("labels", LabelListCreate.as_view(), name="labels"),
    path("expenses", ExpenseListCreate.as_view(), name="expenses"),
]
