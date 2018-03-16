
exports.up = function(knex, Promise) {
  return knex.schema.createTable("resolution", resolution =>{
    resolution.increments("id");
    resolution.date("dueDate");
    resolution.text("resolution");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("resolution");
};
