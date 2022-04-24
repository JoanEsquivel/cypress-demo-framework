//https://applitools.com/tutorials/cypress.html#applitools-eyes-cypress-sdk

//npm i -D @applitools/eyes-cypress

//npx eyes-setup -> The above command will add the necessary imports to your cypress pluginsFile and supportFile (and create the TypeScript definitions file), as described in the manual configuration below.

//Add the "applitools.config.js" with configurations in the root

describe("AppTest", () => {

    it(`ultraFastTest`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit('http://localhost:3000/');

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'To Dos App',
            testName: 'To Do Testing',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "To do Window",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});