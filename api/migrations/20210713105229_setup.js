
exports.up = function(knex) {
  return knex.schema
    .createTable('bookings', function (table) {
      table.increments('id');
      table.string('room', 1000).notNullable();
      table.string('time', 1000).notNullable();
      table.string('name', 1000);
      table.string('email', 1000);
      table.enu('brand', ['coca-cola', 'pepsi']);
      table.boolean('available').notNullable();
   });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("bookings");
};
