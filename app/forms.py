from django import forms
from app.models import Departments,Employees,Payroll,Attendance,Leave,Feedback
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


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
    
class AttendanceForm(forms.ModelForm):
    emp_name = forms.ModelChoiceField(
        queryset=Employees.objects.all(), 
        widget=forms.Select(attrs={
            'id': 'empName',
            'class': 'form-control mb-2 w-75 mx-auto'
        }),
        empty_label="Select Employee"
    )

    class Meta:
        model = Attendance
        fields = ['emp_id', 'emp_name', 'date', 'time_in', 'time_out']
        widgets = {
            'emp_id': forms.TextInput(attrs={
                'id': 'Eid',
                'type': 'text',
                'placeholder': 'Enter Employee Id',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'date': forms.DateInput(attrs={
                'id': 'Edate',
                'type': 'date', 
                'placeholder': 'Enter Date', 
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'time_in': forms.TextInput(attrs={
                'id': 'EtimeIn',
                'type': 'text',
                'placeholder': 'Enter Entry Time',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'time_out': forms.TextInput(attrs={
                'id': 'EtimeOut',
                'type': 'text',
                'placeholder': 'Enter Exit Time',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
        }

class LeaveForm(forms.ModelForm):
     emp_name = forms.ModelChoiceField(
        queryset=Employees.objects.all(), 
        widget=forms.Select(attrs={
            'id': 'empName',
            'class': 'form-control mb-2 w-75 mx-auto'
        }),
        empty_label="Select Employee"
    )
     
     class Meta:
        model = Leave
        fields = ['emp_id', 'emp_name', 'from_date', 'to_date', 'reason']
        widgets={
            'emp_id': forms.TextInput(attrs={
                'id': 'Eid',
                'type': 'text',
                'placeholder': 'Enter Employee Id',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'from_date': forms.DateInput(attrs={
                'id': 'from',
                'type': 'date', 
                'placeholder': 'Enter From Date', 
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'to_date': forms.DateInput(attrs={
                'id': 'to',
                'type': 'date', 
                'placeholder': 'Enter From Date', 
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'reason': forms.TextInput(attrs={
                'id': 'reason',
                'type': 'text',
                'placeholder': 'Enter your reason',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
        }

class FeedbackForm(forms.ModelForm):
    emp_name = forms.ModelChoiceField(
        queryset=Employees.objects.all(), 
        widget=forms.Select(attrs={
            'id': 'empName',
            'class': 'form-control mb-2 w-75 mx-auto'
        }),
        empty_label="Select Employee"
    )
    class Meta:
        model = Feedback
        fields = ['emp_name', 'email', 'subject', 'message']
        widgets = {
            'email': forms.EmailInput(attrs={
                'id': 'email',
                'type': 'email', 
                'placeholder': 'Enter your email', 
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'subject': forms.TextInput(attrs={
                'id': 'subject',
                'type': 'text', 
                'placeholder': 'Enter your subject', 
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
            'message': forms.Textarea(attrs={
                'id': 'message',
                'placeholder': 'Enter your message',
                'class': 'form-control mb-2 w-75 mx-auto'
            }),
        }


class NewUserForm(UserCreationForm):
    class Meta:
        model=User
        fields=('username','email','password1','password2')
    def __init__(self,*args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({'placeholder': 'Type your username....','class': 'form-control mb-2 custom-input'})
        self.fields['email'].widget.attrs.update({'placeholder': 'Type your email....','class': 'form-control mb-2 custom-input'})
        self.fields['password1'].widget.attrs.update({'placeholder': 'Type your password....','class': 'form-control mb-2 custom-input'})
        self.fields['password2'].widget.attrs.update({'placeholder': 'Repeat your password....','class': 'form-control mb-2 custom-input'})
    
    def clean_username(self):
        username=self.cleaned_data['username'].lower()
        new=User.objects.filter(username=username)
        if new.count():
            raise forms.ValidationError("user already exist")
        return username
    
    def clean_email(self):
        email=self.cleaned_data['email'].lower()
        new=User.objects.filter(email=email)
        if new.count():
            raise forms.ValidationError("Email already exist")
        return email
    
    def clean_password2(self):
        password1=self.cleaned_data['password1']
        password2=self.cleaned_data['password2']
        if password1 and password2 and password1!=password2:
            raise forms.ValidationError("password don't match")
        return password2
    
