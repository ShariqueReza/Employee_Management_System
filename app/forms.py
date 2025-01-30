from django import forms
from app.models import Departments,Employees


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
        department_name = forms.CharField(widget=forms.TextInput(attrs={
            'id': 'department', 
            'placeholder': 'Department', 
            'class': 'form-control mb-2 w-75 mx-auto'
        }))
    
        class Meta:
            model = Employees
            fields = '__all__'