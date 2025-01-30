# Generated by Django 5.1.5 on 2025-01-30 07:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Departments',
            fields=[
                ('department_name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('department_status', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('emp_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('emp_name', models.CharField(max_length=100)),
                ('mobile_number', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254)),
                ('address', models.TextField()),
                ('role', models.CharField(max_length=100)),
                ('department_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.departments')),
            ],
        ),
    ]
