# Generated by Django 5.1.5 on 2025-02-02 10:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_leave_action'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('address', models.TextField()),
                ('message', models.TextField()),
                ('emp_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.employees')),
            ],
        ),
    ]
