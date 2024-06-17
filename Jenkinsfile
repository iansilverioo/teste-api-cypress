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
               bat 'npm install' 
            }
        }
        stage('Executar servidor') {
            steps {
               bat 'npm start' 
            }
        }
     stage('Executar testes') {
            steps {
               bat 'npx cypress run'
            }
        }
    }
}
