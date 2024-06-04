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
        sh 'npm install'
      }
    }
    stage('Executar Testes') {
      steps {
        sh 'NO_COLOR=1 npm run cy:run'
      }
    }
  }
}
