from django.contrib import admin
from .models import Image, Project, Publication

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')
    
@admin.register(Project)
class ProjetoAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')

@admin.register(Publication)
class PublicacaoAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')