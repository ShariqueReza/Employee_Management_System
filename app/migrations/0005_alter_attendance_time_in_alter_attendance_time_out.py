# Generated by Django 5.1.5 on 2025-01-31 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_attendance_emp_id_alter_attendance_emp_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='time_in',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='time_out',
            field=models.CharField(max_length=20),
        ),
    ]
