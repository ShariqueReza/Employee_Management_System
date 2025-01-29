from django import forms
from app.models import feedback


class FeedbackForm(forms.ModelForm):
    class Meta:
        model=feedback
        fields={'emp_name','email','subjects','message'}