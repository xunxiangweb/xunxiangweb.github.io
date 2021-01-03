from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.BijiListView.as_view(),name='BIJI-Home'),
    path('post/tech/',views.BijiTechListView.as_view(),name='BIJI-Tech'),
    path('post/finance/',views.BijiFinListView.as_view(),name='BIJI-Finan'),
    path('post/consult/',views.BijiConsultListView.as_view(),name='BIJI-Consult'),
    path('post/art/',views.BijiArtListView.as_view(),name='BIJI-Art'),
    path('post/manufact/',views.BijiManuListView.as_view(),name='BIJI-Manu'),
    path('post/insurance/',views.BijiInsureListView.as_view(),name='BIJI-Insur'),
    path('post/health/',views.BijiHealthListView.as_view(),name='BIJI-Health'),
    path('post/meida/',views.BijiMediaListView.as_view(),name='BIJI-Media'),
    path('post/education/',views.BijiEduListView.as_view(),name='BIJI-Edu'),
    path('post/research/',views.BijiReserachListView.as_view(),name='BIJI-Research'),
    path('post/law/',views.BijiLawListView.as_view(),name='BIJI-Law'),
    path('post/other/',views.BijiOtherListView.as_view(),name='BIJI-Other'),
    path('add/',views.BijiCreateView.as_view(),name='BIJI-Add'),
]