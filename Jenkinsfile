pipeline {
    agent any
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }

    def params = "--browser ${BROWSER} --spec ${SPEC}}"

    stages {
        stage('Regression Execution') {
            steps {
                echo "SPEC ${params.SPEC}"

                echo "BROWSER: ${params.BROWSER}"

                sh "npx cypress run ${params}"
            }
        }
    }
}