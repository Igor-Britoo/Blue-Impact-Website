from rest_framework import generics, viewsets
from django.shortcuts import get_object_or_404
from .models import Image, Project, Publication
from .serializers import ImageSerializer, ProjectSerializer, PublicationSerializer

class ImageListView(generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):  
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class PublicationViewSet(viewsets.ReadOnlyModelViewSet):  
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer