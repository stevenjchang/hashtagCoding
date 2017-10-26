var config      = require('../knexfile.js');
// var env         = 'development';  
var env         = 'production'; 
var knex        = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]); 