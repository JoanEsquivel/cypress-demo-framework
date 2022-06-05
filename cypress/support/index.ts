// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        typeLogin: (username: string, password:string) => void;
    }
}

