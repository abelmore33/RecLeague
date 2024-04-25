const router = require("express").Router();
const { getScores, getScoresById } = require("./scores-model");

router.get("/", (req, res, next) => {
  getScores()
    .then((scores) => {
      res.status(200).json(scores);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  getScoresById(id)
    .then((scores) => {
      res.status(200).json(scores);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const scores = req.body;
  addScores(scores)
    .then((scores) => {
      res.status(201).json(scores);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const scores = req.body;
  updateScores(id, scores)
    .then((scores) => {
      res.status(200).json(scores);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  deleteScores(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
});
module.exports = router;
