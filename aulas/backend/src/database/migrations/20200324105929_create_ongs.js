//up sera executado qd executarmos o migration
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

//down é chamado para caso occora um erro 
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
