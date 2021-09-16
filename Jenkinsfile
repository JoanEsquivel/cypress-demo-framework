import groovy.json.JsonOutput
pipeline {
    agent any
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    
    options {
        ansiColor('xterm')
    }

    stages {
        stage('Regression Execution') {
            steps {
                echo "SPEC ${params.SPEC}"

                echo "BROWSER: ${params.BROWSER}"
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Publish HTML Report'){
            steps {
                
                BUILD_USER = getBuildUser()
                
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
                slackSend channel: 'jenkins-example', message:  "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n More info at: ${env.BUILD_URL}"
            }
        }
    }
}
