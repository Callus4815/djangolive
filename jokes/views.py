from django.shortcuts import render
from django.views.generic import ListView, CreateView, DeleteView, UpdateView, DetailView, View, TemplateView


# Create your views here.
def home(request):
	
	template = 'index.html'
	return render(request, template)

def css(request):
	template = 'cssdemo.html'
	return render(request, template)

def javascript(request):
	template = 'javascript_demo.html'
	return render(request, template)

def jquery(request):
	template = 'jquery_demo.html'
	return render(request, template)