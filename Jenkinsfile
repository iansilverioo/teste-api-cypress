pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
               git branch: 'main', url: 'https://github.com/Kellyfiocchi/testes-api-cy.git'
            }
        }
     stage('Instalar dependencias') {
            steps {
               sh 'npm install' 
            }
        }
        stage('Executar servidor') {
            steps {
               sh 'npm start' 
            }
        }
     stage('Executar testes') {
            steps {
               sh 'npx cypress run'
            }
        }
    }
}
