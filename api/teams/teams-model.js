const db = require("../../data/db-config");

function getTeams() {
  return db("teams");
}

function getTeamById(id) {
  return db("teams").where({ team_id: id }).first();
}

function addTeam(team) {
  return db("teams")
    .insert(team, "team_id")
    .then((ids) => {
      const [id] = ids;
      return db("teams").where({ team_id: id }).first();
    });
}

function updateTeam(id, team) {
  return db("teams")
    .where({ team_id: id })
    .update(team)
    .then(() => {
      return db("teams").where({ team_id: id }).first();
    });
}

function deleteTeam(id) {
  return db("teams").where({ team_id: id }).del();
}

module.exports = {
  getTeams,
  getTeamById,
  addTeam,
  updateTeam,
  deleteTeam,
};
