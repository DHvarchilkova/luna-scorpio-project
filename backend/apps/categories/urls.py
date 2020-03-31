from django.urls import path

from apps.categories.views import ListCategoriesView, RetrieveCategoryView

urlpatterns = [
    path('list/', ListCategoriesView.as_view()),
    path('<int:category_id>/', RetrieveCategoryView.as_view())
]