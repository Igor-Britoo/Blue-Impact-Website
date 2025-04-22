from django.contrib import admin
from .models import Image, Project, Publication, Service

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')
    
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'descricao', 'uploaded_at')

@admin.register(Publication)
class PublicacaoAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at', 'doi')

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'descricao', 'uploaded_at')