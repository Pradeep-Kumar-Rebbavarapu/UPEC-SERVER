# Generated by Django 4.2.7 on 2023-12-07 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_chatmsg_created_at_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatmsg',
            name='created_at_date',
            field=models.CharField(default='7th December 2023', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='chatmsg',
            name='created_at_time',
            field=models.CharField(default='2:30:34 pm', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='group',
            name='created_at_date',
            field=models.CharField(default='7th December 2023', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='group',
            name='created_at_time',
            field=models.CharField(default='2:30:34 pm', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='groupmessage',
            name='created_at_date',
            field=models.CharField(default='7th December 2023', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='groupmessage',
            name='created_at_time',
            field=models.CharField(default='2:30:34 pm', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='date',
            field=models.CharField(blank=True, default='7th December 2023 2:30:34 pm', editable=False, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='created_at',
            field=models.CharField(blank=True, default='7th December 2023 2:30:34 pm', editable=False, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='end_date',
            field=models.CharField(blank=True, default='7th December 2023 2:30:34 pm', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='start_date',
            field=models.CharField(blank=True, default='7th December 2023 2:30:34 pm', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='updated_at',
            field=models.CharField(blank=True, default='7th December 2023 2:30:34 pm', editable=False, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='projectmembers',
            name='role',
            field=models.CharField(choices=[('Client', 'Client'), ('Mentor', 'Mentor'), ('Leader', 'Leader'), ('Member', 'Member')], default='Member', max_length=20),
        ),
        migrations.AlterField(
            model_name='team',
            name='created_at',
            field=models.CharField(blank=True, default='7th December 2023 2:30:34 pm', editable=False, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='updated_at',
            field=models.CharField(blank=True, default='7th December 2023 2:30:34 pm', editable=False, max_length=255, null=True),
        ),
    ]