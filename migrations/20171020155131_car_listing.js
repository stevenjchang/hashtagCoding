
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('car_listing', function(table) {
      table.increments('pid').primary();
      table.string('title');
      table.string('href');
      table.string('images');
      table.string('data-ids');
      table.string('price');
      table.string('neighborhood');
      table.boolean('show');
      table.dateTime('dateTime');

    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('car_listing')
  ])
};
