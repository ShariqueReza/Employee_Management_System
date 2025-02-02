from django.urls import path
from . import views


urlpatterns = [
    path('', views.index_page,name="index"),
    path('employee', views.employee_page,name="employee"),
    path('department', views.department_page,name="department"),
    path('payroll', views.payroll_page,name="payroll"),
    path('attendance', views.attendance_page, name="attendance"),
    path('leave', views.leave_page, name="leave"),
]