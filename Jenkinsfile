pipeline {
    agent {
        docker {
            image 'cypress/base:14.16.0' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Install Dependencies') { 
            steps {
                sh 'npm ci'
                sh "sed -i 's/const VERIFY_TEST_RUNNER_TIMEOUT_MS.*;/const VERIFY_TEST_RUNNER_TIMEOUT_MS = 120000;/g' node_modules/cypress/lib/tasks/verify.js"
                sh 'npm run cy:verify'
            }
        }
        stage('Test') { 
            steps {
                sh "npm run ${params.Script}"
            }
        }
    }
}