from django.db import models
from django.dispatch import receiver
import os

class Image(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images_carousel/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        if self.image:
            if os.path.isfile(self.image.path):
                os.remove(self.image.path)
        super(Image, self).delete(*args, **kwargs)

class AbstractDocument(models.Model):
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='default/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.title

class Project(AbstractDocument):
    file = models.FileField(upload_to='projects/')

class Publication(AbstractDocument):
    file = models.FileField(upload_to='publications/')

@receiver(models.signals.post_delete, sender=Image)
def auto_delete_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)

def auto_delete_file_on_delete(instance):
    if instance.file:
        if os.path.isfile(instance.file.path):
            os.remove(instance.file.path)

@receiver(models.signals.post_delete, sender=Project)
def delete_documento_file(sender, instance, **kwargs):
    auto_delete_file_on_delete(instance)

@receiver(models.signals.post_delete, sender=Publication)
def delete_projeto_file(sender, instance, **kwargs):
    auto_delete_file_on_delete(instance)