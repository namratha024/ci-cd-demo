CI/CD Demo with GitHub Actions & Docker

Overview
This project demonstrates a simple CI/CD pipeline using GitHub Actions and Docker.  
The pipeline automatically builds a Docker image, runs tests, and pushes the image to Docker Hub.  
The containerized app is then deployed locally using Docker Compose.



Tools & Technologies
GitHub Actions – for CI/CD automation  
Docker – for containerization  
Docker Hub – for image storage  
Node.js – sample application  
Docker Compose – for local deployment  

Features
- Automatic build and test pipeline on every push to `main`
- Docker image push to Docker Hub
- Local deployment using Docker Compose
- Simple Node.js API returning a JSON response



How to Run Locally
Clone the repository:
git clone https://github.com/namratha024/ci-cd-demo.git
cd ci-cd-demo

Build and run the container:
docker-compose up
Open your browser and visit:
http://localhost:5000
You should see the response:
{"message": "Hello from CI/CD demo!"}

CI/CD Workflow
Trigger: Code push to the main branch
Actions:
Checkout repository
Install dependencies

Run tests
Build Docker image
Push image to Docker Hub

Screenshots
The screenshots of the project workflow, CI/CD pipeline, and application output are attached.

Docker Image
Docker Hub Repository:
https://hub.docker.com/r/namratha240/ci-cd-demo

Results
 GitHub Actions build successful
 Docker image pushed to Docker Hub
 App deployed locally using Docker Compose
 Working endpoint returning JSON response



   git push
Go to your GitHub repo → You’ll see this formatted README on the main page.
