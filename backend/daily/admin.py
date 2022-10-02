from django.contrib import admin
from .models import Daily,Evaluation
from markdownx.admin import MarkdownxModelAdmin

admin.site.register(Evaluation)
admin.site.register(Daily, MarkdownxModelAdmin)
# Register your models here.
