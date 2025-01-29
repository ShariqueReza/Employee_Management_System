from django.db import models


# Create your models here.
class Departments(models.Model):
      department = models.CharField(max_length=100, primary_key=True)
      department_status = models.BooleanField()
  
class Employees(models.Model):
      emp_id = models.CharField(max_length=10, primary_key=True)
      emp_name = models.CharField(max_length=100)
      mobile_number = models.CharField(max_length=15)
      email = models.EmailField()
      address = models.TextField()
      department = models.ForeignKey(Departments, on_delete=models.CASCADE)
      role = models.CharField(max_length=100)

