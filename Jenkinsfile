pipeline {
  agent any

  stages {
    stage('Clonar o repositório') {
      steps {
        git branch: 'master', url: 'https://github.com/iansilverioo/teste-api-cypress.git'
      }
    }
    stage('instalar dependencias') {
      steps {
        bat 'npm install'
      }
    }
    stage('Executar Testes') {
      steps {
        bat '''NO_COLOR=1 
        npm test'''
      }
    }
  }
}
