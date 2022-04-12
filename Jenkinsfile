pipeline {
    agent any
    stages {
        stage('api: analyze') {
            steps {
                sh 'cd api && npx eslint .'
            }
        }

        stage('api: test') {
            steps {
                sh 'cd api && npm test'
            }
        }

        stage('ui: analyze') {
            steps {
                sh 'cd ui && npx eslint src/*.js'
            }
        }

        stage('ui: test'){
            steps {
                sh 'cd ui && npm test'
            }
        }

        stage('ui: build'){
            steps {
                sh 'cd ui && docker build -t web:v0.0.1 .'
            }
        }

        stage('api: build') {
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