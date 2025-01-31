from django import forms
from app.models import Departments,Employees,Payroll


class DepartmentForm(forms.ModelForm):
    class Meta:
        model=Departments
        fields={'department_name','department_status'}
        widgets = {
                'department_name': forms.TextInput(attrs={
                    'id': 'newDept',
                    'type': 'text',
                    'placeholder': 'Department Name',
                    'class': 'form-control mb-2 w-75 mx-auto'
                }),
                'department_status': forms.TextInput(attrs={
                    'id': 'deptStatus',
                    'type': 'text',
                    'placeholder': 'Department Status (Active or Inactive)',
                    'class': 'form-control mb-2 w-75 mx-auto'
                }),
            }

class EmployeesForm(forms.ModelForm):
        class Meta:
            model=Employees
            fields={'emp_id','emp_name','mobile_number','email','address','department_name','role'}
            widgets = {
              'emp_id': forms.TextInput(attrs={
                  'id': 'Eid',
                  'type': 'text',
                  'placeholder': 'Employee Id',
                  'class': 'form-control mb-2 w-75 mx-auto'
              }),
              'emp_name': forms.TextInput(attrs={
                  'id': 'Ename',
                  'type': 'text',
                  'placeholder': 'Employee name',
                  'class': 'form-control mb-2 w-75 mx-auto'
              }),
              'mobile_number': forms.TextInput(attrs={
                  'id': 'Emobile',
                  'type': 'text',
                  'placeholder': 'Mobile Number',
                  'class': 'form-control mb-2 w-75 mx-auto'
              }),
              'email': forms.TextInput(attrs={
                  'id': 'Email',
                  'type': 'text',
                  'placeholder': 'Email',
                  'class': 'form-control mb-2 w-75 mx-auto'
              }),
              'address': forms.TextInput(attrs={
                  'id': 'Eadd',
                  'type': 'text',
                  'placeholder': 'Address',
                  'class': 'form-control mb-2 w-75 mx-auto'
              }),
              'department_name': forms.TextInput(attrs={
                  'id': 'department',
                  'type': 'text',
                  'placeholder': 'Department Name',
                  'class': 'form-control mb-2 w-75 mx-auto'
              }),
              'role': forms.TextInput(attrs={
                  'id': 'role',
                  'type': 'text',
                  'placeholder': 'Role',
                  'class': 'form-control mb-2 w-75 mx-auto'
              }),

          }
            
class PayrollForm(forms.ModelForm):
    emp_name = forms.ModelChoiceField(queryset=Employees.objects.all(), widget=forms.Select(attrs={
        'id': 'empName',
        'class': 'form-control mb-2 w-75 mx-auto'
        }),
        empty_label="Select Employee"
    )

    class Meta:
        model = Payroll
        fields = ['emp_name', 'role', 'basic_salary', 'allowance', 'tax', 'net_salary']
        widgets = {
            'role': forms.TextInput(attrs={
                'id': 'empRole',
                'type': 'text',
                'placeholder': 'Role',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'basic_salary': forms.NumberInput(attrs={
                'id': 'basicSalary',
                'type': 'number',
                'placeholder': 'Basic Salary',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'allowance': forms.NumberInput(attrs={
                'id': 'allowance',
                'type': 'number',
                'placeholder': 'Allowance',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'tax': forms.NumberInput(attrs={
                'id': 'tax',
                'type': 'number',
                'placeholder': 'Tax',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'net_salary': forms.NumberInput(attrs={
                'id': 'netSalary',
                'type': 'number',
                'placeholder': 'Net Salary',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
        }
    
   
    
   
