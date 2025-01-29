from django.shortcuts import render,redirect




# Create your views here.
def index_page(request):
    context = {}
    return render(request, 'app/index.html', context)

def employee_page(request):
    context = {}
    return render(request, 'app/employees.html', context)
