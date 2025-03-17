# Backend Blue Impact

## Como rodar o servidor

1. Certifique-se de ter o Python instalado.
2. Crie e ative um ambiente virtual:
   ```sh
   python -m venv venv
   source venv/bin/activate  # No Windows use `venv\Scripts\activate`
   ```
3. Instale as dependências do projeto:
   ```sh
   pip install -r requirements.txt
   ```
4. Execute as migrações do banco de dados:
   ```sh
   python manage.py migrate
   ```
5. Crie um superusuário:
   ```sh
   python manage.py createsuperuser
   ```
6. Inicie o servidor:
   ```sh
   python manage.py runserver
   ```

O servidor estará rodando em `http://127.0.0.1:8000/`.

## Página de administração

A página de administração pode ser acessada em `http://127.0.0.1:8000/admin/`.

## Documentação do Django REST framework

A documentação do Django REST framework pode ser acessada em `http://127.0.0.1:8000/redoc/`.

A documentação da API pode ser acessada através do Swagger em `http://127.0.0.1:8000/swagger/`.