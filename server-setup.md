  # Update and upgrade the system packages
  apt update && apt upgrade -y

  # Install git
  apt install git -y

  # Generate SSH key
  ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""

  # Display the SSH public key to set up Deploy Keys
  cat ~/.ssh/id_ed25519.pub

  # Clone the repository
  git clone git@github.com:Igor-Britoo/Blue-Impact-Website.git

  # Add Docker's official GPG key
  sudo apt-get update
  sudo apt-get install -y ca-certificates curl
  sudo install -m 0755 -d /etc/apt/keyrings
  sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  sudo chmod a+r /etc/apt/keyrings/docker.asc

  # Add Docker repository to Apt sources
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  # Install Docker and related packages
  sudo apt-get update
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

  # Run a test Docker container to verify installation
  sudo docker run hello-world

  # Clean up all Docker containers
  docker kill $(docker ps -q) || true
  docker rm $(docker ps -a -q) || true

  # Navigate to the project directory
  cd Blue-Impact-WebSite

  # Edit configuration files
  vi nginx.conf
  vi Dockerfile
  vi docker-compose.yml

  # Build and start Docker containers
  docker compose build && docker compose up -d

  # Obtain HTTPS certificates using Let's Encrypt (dry run)
  docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d blueimpact.tech

  # Obtain HTTPS certificates using Let's Encrypt
  docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d blueimpact.tech

  # Edit nginx configuration to set up HTTPS
  vi nginx.conf

  # Rebuild and restart Docker containers
  docker compose build && docker compose up -d