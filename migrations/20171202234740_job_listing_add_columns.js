
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('job_listing', function(table) {
      table.string('company');
      table.string('summary');
      table.string('postDate');
      table.renameColumn('neighborhood', 'location');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('job_listing', function(table) {
      table.dropColumn('company');
      table.dropColumn('summary');
      table.dropColumn('postDate');
      table.renameColumn('location', 'neighborhood');
    })
  ])
};
