
exports.up = function(knex) {
  return knex.schema
    .createTable('incidents', function (table) {
       table.increments('id');
       table.string('title', 255).notNullable();
       table.string('description', 255).notNullable();
       table.decimal('price').notNullable();
       table.integer('ong_id').notNullable();
    });
};

exports.down = function(knex) {
return knex.schema
 .dropTable("incidents")
};
