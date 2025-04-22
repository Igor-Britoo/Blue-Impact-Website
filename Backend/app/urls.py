from django.urls import path
from .views import ImageListView, ProjectViewSet, PublicationViewSet, SendEmailAPIView, ServiceViewSet

urlpatterns = [
    path('images/', ImageListView.as_view(), name='image-list'),
    path('projects/', ProjectViewSet.as_view({'get': 'list'}), name='project-list'),
    path('projects/<int:pk>/', ProjectViewSet.as_view({'get': 'retrieve'}), name='project-detail'),
    path('publications/', PublicationViewSet.as_view({'get': 'list'}), name='publications-list'),
    path('publications/<int:pk>/', PublicationViewSet.as_view({'get': 'retrieve'}), name='publication-detail'),
    path('send-email/', SendEmailAPIView.as_view(), name='send_email'),
    path('services/', ServiceViewSet.as_view({'get': 'list'}), name='service-list'),
    path('services/<int:pk>/', ServiceViewSet.as_view({'get': 'retrieve'}), name='service-detail'),
]
