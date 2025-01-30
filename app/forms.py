from django import forms
from app.models import Departments


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


