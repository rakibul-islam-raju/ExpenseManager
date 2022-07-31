from rest_framework.serializers import ModelSerializer

from .models import Expense, Category, Label


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class LabelSerializer(ModelSerializer):
    class Meta:
        model = Label
        fields = "__all__"


class ExpenseSerializer(ModelSerializer):
    category = CategorySerializer()
    label = LabelSerializer()

    class Meta:
        model = Expense
        fields = "__all__"
