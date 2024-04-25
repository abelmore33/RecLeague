const router = require("express").Router();
const {
  getUsers,
  getUserById,
  getUserByUsername,
  addUser,
  updateUser,
  deleteUser,
} = require("./users-model");

router.get("/", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const user = req.body;
  const newUser = await addUser(user);
  res.status(201).json(newUser);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updatedUser = await updateUser(id, changes);
  res.json(updatedUser);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  res.json(deletedUser);
});

module.exports = router;
