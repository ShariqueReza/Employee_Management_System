# Generated by Django 5.1.5 on 2025-01-31 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_attendance_action'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='action',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
