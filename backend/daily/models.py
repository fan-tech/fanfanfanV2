from django.db import models
from markdownx.models import MarkdownxField

class Daily(models.Model):
    date = models.DateField() #日付
    done = MarkdownxField() #今日やったこと
    wanna_do = MarkdownxField() #これからやりたいこと
    other = MarkdownxField() #その他
    summary = MarkdownxField() #まとめ
    evaluation = models.ForeignKey('evaluation', on_delete=models.PROTECT) #一日の評価 (外部キー)
    isOpen = models.BooleanField(default=True) #公開、非公開

    def __str__(self):
        date_str =self.date.strftime('%Y-%m-%d')
        return date_str


class Evaluation(models.Model):
    evaluation = models.CharField(max_length=255)

    def __str__(self):
        return self.evaluation
