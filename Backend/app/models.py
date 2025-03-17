from django.db import models
import os
from django.dispatch import receiver

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

@receiver(models.signals.post_delete, sender=Image)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)
