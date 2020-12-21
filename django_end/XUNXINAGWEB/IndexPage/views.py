from django.shortcuts import render

def home(request):
    return render(request,'IndexPage/index.html')

def about(request):
    return render(request,'IndexPage/about.html')
# Create your views here.
