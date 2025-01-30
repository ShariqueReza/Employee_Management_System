from django.db import models


# Create your models here.
class Departments(models.Model):
      department_name = models.CharField(max_length=100, primary_key=True)
      department_status = models.CharField(max_length=100)
  
class Employees(models.Model):
      emp_id = models.CharField(max_length=10, primary_key=True)
      emp_name = models.CharField(max_length=100)
      mobile_number = models.CharField(max_length=15)
      email = models.EmailField()
      address = models.TextField()
      department_name = models.ForeignKey(Departments, on_delete=models.CASCADE)
      role = models.CharField(max_length=100)

class Payroll(models.Model):
      emp_name = models.ForeignKey(Employees, on_delete=models.CASCADE)
      role = models.CharField(max_length=100)
      basic_salary = models.DecimalField(max_digits=10, decimal_places=2)
      allowance = models.IntegerField(max_length=15,null=True)
      tax = models.DecimalField(max_digits=5, decimal_places=2)
      net_salary = models.DecimalField(max_digits=10, decimal_places=2)

