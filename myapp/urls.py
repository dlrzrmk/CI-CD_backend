from django.urls import path
from .views import simple_api

urlpatterns = [
    path('simple/', simple_api, name='simple-api'),
]
