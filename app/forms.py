from django import forms
from app.models import feedback


class FeedbackForm(forms.ModelForm):
    class Meta:
        model=feedback
        fields={'emp_name','email','subjects','message'}
        widgets = {
            'emp_name': forms.TextInput(attrs={
                'id': 'name',
                'placeholder': 'Employee Name',
                'class': 'form-control mb-2 w-75 mx-auto inputsize'
            }),
            'email': forms.EmailInput(attrs={
                'id': 'email',
                'placeholder': 'Email Address',
                'class': 'form-control mb-2 w-75 mx-auto inputsize'
            }),
            'subjects': forms.TextInput(attrs={
                'id': 'subject',
                'placeholder': 'Subject',
                'class': 'form-control mb-2 w-75 mx-auto inputsize'
            }),
            'message': forms.Textarea(attrs={
                'id': 'message',
                'placeholder': 'Your Message',
                'class': 'form-control mb-2 w-75 mx-auto inputsize'
            }),
        }