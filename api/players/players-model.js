const db = require("../../data/db-config");

function getPlayers() {
  return db("players");
}

function getPlayerById(id) {
  return db("players").where({ player_id: id }).first();
}

function addPlayer(player) {
  return db("players")
    .insert(player, "player_id")
    .then((ids) => {
      const [id] = ids;
      return db("players").where({ player_id: id }).first();
    });
}

function updatePlayer(id, player) {
  return db("players")
    .where({ player_id: id })
    .update(player)
    .then(() => {
      return db("players").where({ player_id: id }).first();
    });
}

function deletePlayer(id) {
  return db("players").where({ player_id: id }).del();
}

module.exports = {
  getPlayers,
  getPlayerById,
  addPlayer,
  updatePlayer,
  deletePlayer,
};
