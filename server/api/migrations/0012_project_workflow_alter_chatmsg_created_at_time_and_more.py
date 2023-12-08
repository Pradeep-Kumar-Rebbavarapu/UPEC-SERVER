# Generated by Django 4.2.7 on 2023-12-08 05:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_remove_project_workflow_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='workflow',
            field=models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='workflow', to='api.workflow'),
        ),
        migrations.AlterField(
            model_name='chatmsg',
            name='created_at_time',
            field=models.CharField(default='11:25:03 am', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='group',
            name='created_at_time',
            field=models.CharField(default='11:25:03 am', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='groupmessage',
            name='created_at_time',
            field=models.CharField(default='11:25:03 am', max_length=225, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='date',
            field=models.CharField(blank=True, default='8th December 2023 11:25:03 am', editable=False, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='created_at',
            field=models.CharField(blank=True, default='8th December 2023 11:25:03 am', editable=False, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='end_date',
            field=models.CharField(blank=True, default='8th December 2023 11:25:03 am', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='start_date',
            field=models.CharField(blank=True, default='8th December 2023 11:25:03 am', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='updated_at',
            field=models.CharField(blank=True, default='8th December 2023 11:25:03 am', editable=False, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='projectmembers',
            name='role',
            field=models.CharField(choices=[('Leader', 'Leader'), ('Mentor', 'Mentor'), ('Member', 'Member'), ('Client', 'Client')], default='Member', max_length=20),
        ),
        migrations.AlterField(
            model_name='team',
            name='created_at',
            field=models.CharField(blank=True, default='8th December 2023 11:25:03 am', editable=False, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='team',
            name='updated_at',
            field=models.CharField(blank=True, default='8th December 2023 11:25:03 am', editable=False, max_length=255, null=True),
        ),
    ]