from django.db import models


# Create your models here.
class Departments(models.Model):
      department_name = models.CharField(max_length=100, primary_key=True)
      department_status = models.CharField(max_length=100, null=True, blank=True)

      def __str__(self):
        return str(self.department_name)
  
class Employees(models.Model):
      emp_id = models.CharField(max_length=10, primary_key=True)
      emp_name = models.CharField(max_length=100, null=True, blank=True)
      mobile_number = models.CharField(max_length=15, null=True, blank=True)
      email = models.EmailField(null=True, blank=True)
      address = models.TextField(null=True, blank=True)
      department_name = models.ForeignKey(Departments, null=True, blank=True, on_delete=models.CASCADE)
      role = models.CharField(max_length=100, null=True, blank=True)

      def __str__(self):
        return str(self.emp_name)

class Payroll(models.Model):
    emp_name = models.ForeignKey(Employees, on_delete=models.CASCADE)
    role = models.CharField(max_length=100, null=True, blank=True)
    basic_salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    allowance = models.IntegerField(null=True, blank=True)
    tax = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    net_salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return str(self.emp_name)

class Attendance(models.Model):
      emp_name = models.ForeignKey(Employees, on_delete=models.CASCADE)
      emp_id = models.CharField(max_length=100, null=True, blank=True)
      date = models.DateField(auto_now_add=False, null=True, blank=True)
      time_in = models.CharField(max_length=20, null=True, blank=True)
      time_out = models.CharField(max_length=20, null=True, blank=True)
      action = models.CharField(max_length=100,null=True,blank=True)

      def __str__(self):
        return str(self.emp_name)

class Leave(models.Model):
      emp_name = models.ForeignKey(Employees,null=True, blank=True, on_delete=models.CASCADE)
      emp_id = models.CharField(max_length=100, null=True, blank=True)
      from_date = models.DateField(auto_now_add=False, null=True, blank=True)
      to_date = models.DateField(auto_now_add=False, null=True, blank=True)
      reason = models.TextField(null=True,blank=True)
      action = models.TextField(blank=True, null=True)

      def __str__(self):
        return str(self.emp_name)

class Feedback(models.Model):
      emp_name = models.ForeignKey(Employees, null=True, blank=True, on_delete=models.CASCADE)
      email = models.EmailField(null=True, blank=True)
      subject = models.CharField(max_length=100,null=True,blank=True)
      message = models.TextField(null=True, blank=True)
      action =models.TextField(blank=True, null=True)

      def __str__(self):
        return str(self.emp_name)