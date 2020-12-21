from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.home,name='XUNXIANG-Home'),
    path('about/',views.about,name='XUNXIANG-About'),
]