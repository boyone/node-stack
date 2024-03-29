pipeline {
    agent any
    stages {
        stage('api: install dependencies') {
            steps {
                sh 'cd api && npm install'
            }
        }

        stage('api: analyze') {
            steps {
                sh 'cd api && npx eslint *.js'
            }
        }

        stage('ui: install dependencies') {
            steps {
                sh 'cd ui && npm install'
            }
        }

        stage('ui: analyze') {
            steps {
                sh 'cd ui && npx eslint src/*.js'
            }
        }

        stage('ui: unit test'){
            steps {
                sh 'cd ui && CI=true npm test'
            }
        }

        stage('ui: build docker'){
            steps {
                sh 'cd ui && docker build -t web:v0.0.1 .'
            }
        }

        stage('api: build docker') {
            steps {
                sh 'cd api && docker build -t api:v0.0.1 .'
            }
        }

        stage('start api and web') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('run api test') {
            steps {
                sh 'cd atdd/api/ && robot api.robot'
            }
        }

        stage('run web test') {
            steps {
                sh 'cd atdd/web/ && robot ui.robot'
            }
        }

        stage('stop api and web') {
            steps {
                sh 'docker compose down'
            }
        }
    }
    post { 
    always { 
      sh "docker compose down"
    //   sh "docker volume prune -f"
    }
  }
}