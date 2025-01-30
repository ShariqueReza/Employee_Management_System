from django.shortcuts import render,redirect
from app.models import Departments,Employees
from app.forms import DepartmentForm




# Create your views here.
def index_page(request):
    context = {}
    return render(request, 'app/index.html', context)

def employee_page(request):
    context = {}
    return render(request, 'app/employees.html', context)

def department_page(request):
    departments=Departments.objects.all()
    form=DepartmentForm()
    if request.method == 'POST':
        form = DepartmentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
        else:
            form = DepartmentForm()
    context = {'form':form,'department':departments}
    return render(request, 'app/departments.html', context)
