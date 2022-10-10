from django.contrib import admin
from .models import Daily,Evaluation
from markdownx.admin import MarkdownxModelAdmin
from import_export import resources
from import_export.admin import ImportExportModelAdmin


admin.site.register(Evaluation)

class DailyResouce(resources.ModelResource):
    class Meta:
        model = Daily

@admin.register(Daily)
class DailyAdmin(ImportExportModelAdmin):
    orderig =['id']
    list_display =('id','date','wanna_do','other','summary','evaluation')

    resource_class = DailyResouce



# Register your models here
