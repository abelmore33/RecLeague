const db = require("../../data/db-config");

function getScores() {
  return db("scores").select("away_team_score", "home_team_score");
}

function getScoresById(id) {
  return db("scores").where({ score_id: id }).first();
}

function addScores(scores) {
  return db("scores")
    .insert(scores, "score_id")
    .then((ids) => {
      const [id] = ids;
      return db("scores").where({ score_id: id }).first();
    });
}

function updateScores(id, scores) {
  return db("scores")
    .where({ score_id: id })
    .update(scores)
    .then(() => {
      return db("scores").where({ score_id: id }).first();
    });
}

function deleteScores(id) {
  return db("scores").where({ score_id: id }).del();
}
module.exports = {
  getScores,
  getScoresById,
  addScores,
  updateScores,
  deleteScores,
};
