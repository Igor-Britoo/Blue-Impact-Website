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

class Project(models.Model):
    title = models.CharField(max_length=255)
    descricao = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Publication(models.Model):
    title = models.CharField(max_length=255)
    authors = models.TextField(blank=True, null=True)
    year = models.PositiveIntegerField(blank=True, null=True)
    doi = models.URLField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Service(models.Model):
    title = models.CharField(max_length=255)
    descricao = models.TextField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

@receiver(models.signals.post_delete, sender=Image)
def auto_delete_image_on_delete(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)