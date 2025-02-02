from django.contrib import admin
from app.models import Departments,Employees,Payroll,Attendance,Leave


# Register your models here.
admin.site.register(Departments)
admin.site.register(Employees)
admin.site.register(Payroll)
admin.site.register(Attendance)
admin.site.register(Leave)
