
it('loads fast enough', () => {
  cy.visit('https://www.notion.so/')
  // set your treshold
  // Thresholds are pass/fail criteria that specify the performance expectations of the system under test. 
  cy.lighthouse(
    {
      performance: 10,
      accessibility: 90,
      'best-practices': 80,
      seo: 80,
    },
    {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config('viewportWidth'),
        height: Cypress.config('viewportHeight'),
        deviceScaleRatio: 1,
      },
    },
  )
})