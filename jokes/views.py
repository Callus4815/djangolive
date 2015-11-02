from django.shortcuts import render
from django.views.generic import ListView, CreateView, DeleteView, UpdateView, DetailView, View, TemplateView


# Create your views here.
def home(request):
	
	template = 'index.html'
	return render(request, template)
