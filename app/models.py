from django.db import models


# Create your models here.
class Departments(models.Model):
      department_name = models.CharField(max_length=100, primary_key=True)
      department_status = models.CharField(max_length=100)

      def __str__(self):
        return str(self.department_name)
  
class Employees(models.Model):
      emp_id = models.CharField(max_length=10, primary_key=True)
      emp_name = models.CharField(max_length=100)
      mobile_number = models.CharField(max_length=15)
      email = models.EmailField()
      address = models.TextField()
      department_name = models.ForeignKey(Departments, on_delete=models.CASCADE)
      role = models.CharField(max_length=100)

      def __str__(self):
        return str(self.emp_name)

class Payroll(models.Model):
    emp_name = models.ForeignKey(Employees, on_delete=models.CASCADE)
    role = models.CharField(max_length=100)
    basic_salary = models.DecimalField(max_digits=10, decimal_places=2)
    allowance = models.IntegerField(null=True, blank=True)
    tax = models.DecimalField(max_digits=5, decimal_places=2)
    net_salary = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.emp_name)

class Attendance(models.Model):
      emp_name = models.ForeignKey(Employees, on_delete=models.CASCADE)
      emp_id = models.CharField(max_length=100)
      date = models.DateField()
      time_in = models.CharField(max_length=20)
      time_out = models.CharField(max_length=20)
      action = models.CharField(max_length=100,null=True,blank=True)

      def __str__(self):
        return str(self.emp_name)

class Leave(models.Model):
      emp_name = models.ForeignKey(Employees, on_delete=models.CASCADE)
      emp_id = models.CharField(max_length=100)
      from_date = models.DateField()
      to_date = models.DateField()
      reason = models.TextField()

      def __str__(self):
        return str(self.emp_name)

