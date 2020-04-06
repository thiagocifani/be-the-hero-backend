
exports.up = function(knex) {
  return knex.schema
    .createTable('incidents', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.string('description', 255).notNullable();
       table.decimal('price').notNullable();
    });
};

exports.down = function(knex) {
return knex.schema
 .dropTable("incidents")
};
