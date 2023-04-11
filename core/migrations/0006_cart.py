# Generated by Django 4.1.7 on 2023-04-11 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_seller_phone_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=120)),
                ('no_in_cart', models.IntegerField(default=0)),
            ],
        ),
    ]
