/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("teams", (table) => {
      table.increments("team_id");
      table.string("team_name", 15).notNullable();
      table.integer("team_wins").notNullable();
      table.integer("team_losses").notNullable();
    })
    .createTable("players", (table) => {
      table.increments("player_id");
      table.string("player_name", 15).notNullable();
      table.string("player_position", 15).notNullable();
      table.integer("player_ppg").unsigned();

      table
        .integer("player_team")
        .references("team_id")
        .inTable("teams")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("scores", (table) => {
      table.increments("score_id");
      table
        .integer("home_team")
        .references("team_id")
        .inTable("teams")
        .unsigned()
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("home_team_score").notNullable();
      table
        .integer("away_team")
        .references("team_id")
        .inTable("teams")
        .unsigned()
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("away_team_score").notNullable();
    })
    .createTable("users", (table) => {
      table.increments("user_id");
      table.string("username", 15).notNullable().unique();
      table.string("password", 15).notNullable();
      table.string("role", 15).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("scores")
    .dropTableIfExists("players")
    .dropTableIfExists("teams");
};
