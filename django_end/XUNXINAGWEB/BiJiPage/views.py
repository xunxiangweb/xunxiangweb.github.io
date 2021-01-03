from django.shortcuts import render,get_object_or_404
from django.views.generic import ListView,DetailView,CreateView,DeleteView,UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin,UserPassesTestMixin
from django.views.generic.list import MultipleObjectMixin,TemplateResponseMixin
from django.contrib.auth.models import User
from .models import Post

home_template = 'BiJiPage/biji_home.html'
class BijiListView(ListView,MultipleObjectMixin):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset, 5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = queryset
        context['filtered']=queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiTechListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category='tech').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiFinListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'finan').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiConsultListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'consult').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiArtListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'art').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiManuListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'manufact').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiInsureListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'insurance').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiHealthListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'health').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiMediaListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'media').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiEduListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'education').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiReserachListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'research').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiLawListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'law').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiOtherListView(ListView):
    template_name = home_template
    queryset = Post.objects.all()
    def get_context_data(self, **kwargs):
        queryset = Post.objects.filter(category = 'other').all().order_by('-date_publish')
        paginator, page, queryset, is_paginated = self.paginate_queryset(queryset,5)
        context = {
            'paginator': paginator,
            'page_obj': page,
            'is_paginated': is_paginated,
            'object_list': queryset
        }
        context['original'] = Post.objects.all().order_by('-date_publish')
        context['filtered'] = queryset
        context.update(kwargs)
        return super().get_context_data(**context)

class BijiCreateView(CreateView,LoginRequiredMixin):
    model = Post
    fields = ['title','abstract','URL','category','image']

    def form_valid(self, form):
        form.instance.author = self.request.user
        return super().form_valid(form)

class BijiDetailView(DetailView):
    model = Post



# Create your views here.
