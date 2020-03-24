////incidents == relacionamentos

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
      table.increments();

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();
      //chave estrangeira -> para preencher o ong_id precisamos pegar a chave primaria da tabela ongs
      table.foreign('ong_id').references('id').inTable('ongs');

    });
  };
  

  exports.down = function(knex) {
      return knex.schema.dropTable('incidents');
  };