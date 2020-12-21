from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.lianxi_home,name='LIANXI-Home'),
]