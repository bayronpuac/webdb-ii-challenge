
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table) {
      // adds a primary key, called 'id' as and auto-increment integer, not null and unique
      table.increments();
  
      table.string('vin', 128).unique().notNullable();
      table.string('make', 128).notNullable();
      table.string('model', 128).notNullable();
      table.string('mileage', 255).notNullable();
      table.string('transmission', 255);
      table.string('title', 255);

      table.timestamps(true, true);
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  
