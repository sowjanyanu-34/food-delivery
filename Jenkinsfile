pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "food-delivery"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Workspace') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Clean Old Containers') {
            steps {
                sh '''
                    docker compose down || true
                    docker system prune -f || true
                '''
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Start Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Verify Running Containers') {
            steps {
                sh 'docker ps'
            }
        }

        stage('Logs Check (Optional)') {
            steps {
                sh 'docker compose ps'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully 🎉'
        }

        failure {
            echo 'Pipeline failed ❌ Check logs'
            sh 'docker compose logs || true'
        }

        always {
            echo 'Cleaning workspace...'
        }
    }
}