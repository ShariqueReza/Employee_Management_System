from django.db import models

# Create your models here.
class feedback(models.Model):
    emp_name=models.CharField(max_length=100)
    email=models.EmailField(max_length=200,null=True)
    subjects=models.CharField(max_length=300,null=True)
    message=models.TextField()
    action_taken=models.TextField()