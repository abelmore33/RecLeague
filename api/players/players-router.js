const router = require("express").Router();
const {
  getPlayers,
  getPlayerById,
  addPlayer,
  updatePlayer,
  deletePlayer,
} = require("./players-model");

router.get("/", (req, res) => {
  getPlayers()
    .then((players) => {
      res.status(200).json(players);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  getPlayerById(id)
    .then((player) => {
      if (player) {
        res.status(200).json(player);
      } else {
        res.status(404).json({ message: "player not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const player = req.body;
  addPlayer(player)
    .then((player) => {
      res.status(201).json(player);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const player = req.body;
  updatePlayer(id, player)
    .then((player) => {
      if (player) {
        res.status(200).json(player);
      } else {
        res.status(404).json({ message: "player not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  deletePlayer(id)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
