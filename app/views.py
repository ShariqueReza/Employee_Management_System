from django.shortcuts import render,redirect
from app.models import Departments,Employees,Payroll
from app.forms import DepartmentForm,EmployeesForm,PayrollForm




# Create your views here.
def index_page(request):
    context = {}
    return render(request, 'app/index.html', context)

def employee_page(request):
    employees=Employees.objects.all()
    form=EmployeesForm()
    if request.method == 'POST':
        form = EmployeesForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/employees.html")
        else:
            form = EmployeesForm()
    context = {'form':form,'employee':employees}
    return render(request, 'app/employees.html', context)

def department_page(request):
    departments=Departments.objects.all()
    form=DepartmentForm()
    if request.method == 'POST':
        form = DepartmentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/departments.html")
        else:
            form = DepartmentForm()
    context = {'form':form,'department':departments}
    return render(request, 'app/departments.html', context)


def payroll_page(request):
    payrolls=Payroll.objects.all()
    form=PayrollForm()
    if request.method == 'POST':
        form = PayrollForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/payroll.html")
        else:
            form = PayrollForm()
    context = {'form':form,'payroll':payrolls}
    return render(request, 'app/payroll.html', context)