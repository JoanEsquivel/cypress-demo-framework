
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

// cypress/plugins/index.js
module.exports = (on, config) => {
  // optional: register cypress-grep plugin code
  // https://github.com/bahmutov/cypress-grep
  require("cypress-grep/src/plugin")(config);
};

module.exports = (on, config) => {
  // optional: register cypress-grep plugin code
  // https://github.com/bahmutov/cypress-grep
  require("cypress-mochawesome-reporter/plugin")(on);
};

require("@applitools/eyes-cypress")(module);

const mysql = require("mysql");
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
}

module.exports = (on, config) => {
  on("task", {
    queryDb: (query) => {
      return queryTestDb(query, config);
    },
  }); //For running sql query
};

const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')

module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions)
  })

  on('task', {
    lighthouse: lighthouse(), // calling the function is important
  })
}

