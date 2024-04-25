const router = require("express").Router();
const {
  getTeams,
  getTeamById,
  addTeam,
  updateTeam,
  deleteTeam,
} = require("./teams-model");

router.get("/", (req, res) => {
  getTeams()
    .then((teams) => {
      res.status(200).json(teams);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  getTeamById(id)
    .then((team) => {
      res.status(200).json(team);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const team = req.body;
  addTeam(team)
    .then((team) => {
      res.status(201).json(team);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const team = req.body;
  updateTeam(id, team)
    .then((team) => {
      res.status(200).json(team);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  deleteTeam(id)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
