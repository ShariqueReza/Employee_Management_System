# Generated by Django 5.1.5 on 2025-01-31 11:05

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
                ('department_status', models.CharField(max_length=100)),
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
        migrations.CreateModel(
            name='Payroll',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=100)),
                ('basic_salary', models.DecimalField(decimal_places=2, max_digits=10)),
                ('allowance', models.IntegerField(null=True)),
                ('tax', models.DecimalField(decimal_places=2, max_digits=5)),
                ('net_salary', models.DecimalField(decimal_places=2, max_digits=10)),
                ('emp_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.employees')),
            ],
        ),
    ]
