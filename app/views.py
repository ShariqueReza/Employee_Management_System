from django.shortcuts import render,redirect
from app.models import Departments,Employees,Payroll,Attendance,Leave,Feedback
from app.forms import DepartmentForm,EmployeesForm,PayrollForm,AttendanceForm,LeaveForm,FeedbackForm,NewUserForm
from django.contrib.auth import login




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
            return redirect("/employee")
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
            return redirect("/department")
        else:
            form = DepartmentForm()
    context = {'form':form,'department':departments}
    return render(request, 'app/departments.html', context)


def payroll_page(request):
    payrolls = Payroll.objects.all()
    form = PayrollForm()

    #For debug puspose printing all employee names
    employees = Employees.objects.all()
    print("Employees available:", employees)

    if request.method == 'POST':
        form = PayrollForm(request.POST)
        if form.is_valid():
            form.save()
            print("Form is valid and data is saved.")
            return redirect('/payroll')
        else:
            form=PayrollForm()
            print("Form errors:", form.errors)

    context = {'form': form, 'payroll': payrolls}
    return render(request, 'app/payroll.html', context)



def attendance_page(request):
    attendance=Attendance.objects.all()
    form=AttendanceForm()

    if request.method == 'POST':
        form = AttendanceForm(request.POST)
        if form.is_valid():
            form.save()
            print("Form is valid and data is saved.")
            return redirect('/attendance')
        else:
            form=AttendanceForm()
            print("Form errors:", form.errors)
    context = {'attendance':attendance,'form':form}
    return render(request, 'app/attendance.html', context)

def leave_page(request):
    leaves=Leave.objects.all()
    form=LeaveForm()

    if request.method =='POST':
        form=LeaveForm(request.POST)
        if form.is_valid():
            form.save()
            print("Form is valid and data is saved.")
            return redirect('/leave')
        else:
            form=LeaveForm()
            print("Form errors:", form.errors)


    context={'leave':leaves,'form':form}
    return render(request, 'app/leave.html', context)

def feedback_page(request):
    feedbacks=Feedback.objects.all()[0:10]
    form=FeedbackForm()
    if request.method == 'POST':
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/contactus")
        else:
            form = FeedbackForm()
  
    context={'form':form,'feedback':feedbacks}
    return render(request, 'app/contactus.html', context)

def register(request):
    form=NewUserForm()

    if request.method == "POST":
        form=NewUserForm(request.POST)
        if form.is_valid():
            user=form.save()
            login(request, user)
            return redirect("/")
        
    context={'form':form}
    return render(request, 'registration/signup.html',context)