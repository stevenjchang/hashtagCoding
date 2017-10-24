
exports.up = function(knex, Promise) {
  
  return Promise.all([

    knex.schema.table('car_listing', function (table) {
      table.string('site');
      table.string('favorite');
      table.string('note')
    }),

    knex.schema.createTable('job_listing', function(table) {
      table.increments('id').primary();
      table.string('pid').unique();
      table.string('title');
      table.string('href');
      table.string('images', 500);
      table.string('data-ids');
      table.string('price');
      table.string('neighborhood');
      table.string('site');
      table.string('favorite');
      table.string('note');
      table.boolean('show');
      table.dateTime('dateTime');
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.dropTable('job_listing'),
    
    knex.schema.table('car_listing', function(table) {
      table.dropColumn('site');
      table.dropColumn('favorite');
      table.dropColumn('note');
    })

  ])
};
