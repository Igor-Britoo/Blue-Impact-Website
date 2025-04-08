from rest_framework import generics, viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
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

class SendEmailAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Extrai os dados do body da requisição
        data = request.data.get('data', {})  # Dados dinâmicos para o template

        # Valida os dados recebidos
        required_fields = ['name', 'email', 'phone', 'description']
        missing_fields = [field for field in required_fields if field not in data or not data[field]]

        if missing_fields:
            return Response(
            {"error": f"Os campos obrigatórios estão ausentes ou vazios: {', '.join(missing_fields)}."},
            status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Renderiza o template HTML com os dados fornecidos
            html_body = render_to_string("email_template.html", data)
            
            # Envia o e-mail
            email = EmailMessage(
                subject='Nova mensagem de contato - Blue Impact',
                body=html_body,
                from_email="blueimpactsender@gmail.com",  # Substitua pelo e-mail configurado
                to=["blueimpactassessoria@gmail.com"], # Substitua pelo e-mail do destinatário
            )
            email.content_subtype = "html"  # Define o tipo de conteúdo como HTML
            email.send()

            return Response({"message": "E-mail enviado com sucesso!"}, status=status.HTTP_200_OK)
        
        except Exception as e:
            print(e)
            return Response(
                {"error": f"Erro ao enviar o e-mail: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )