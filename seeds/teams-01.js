/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("teams").truncate();
  await knex("teams").insert([
    { team_name: "PCB Ballers", team_wins: 0, team_losses: 0 },
    { team_name: "O Block Shooters", team_wins: 0, team_losses: 0 },
  ]);

  await knex("players").truncate();
  await knex("players").insert([
    {
      player_name: "Michael Belmore",
      player_position: "SG",
      player_ppg: 25,
      player_team: 1,
    },
    {
      player_name: "Aaron Belmore",
      player_position: "PG",
      player_ppg: 15,
      player_team: 2,
    },
  ]);

  await knex("scores").truncate();
  await knex("scores").insert([
    {
      home_team: 1,
      home_team_score: 45,
      away_team: 2,
      away_team_score: 100,
    },
  ]);
};
