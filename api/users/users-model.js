const db = require("../../data/db-config");

const getUsers = () => {
  return db("users");
};

const getUserById = (id) => {
  return db("users").where({ id }).first();
};

const getUserByUsername = (username) => {
  return db("users").where({ username }).first();
};

const addUser = (user) => {
  return db("users")
    .insert(user, "id")
    .then((ids) => {
      const [id] = ids;
      return getUserById(id);
    });
};

const updateUser = (id, user) => {
  return db("users")
    .where({ id })
    .update(user)
    .then(() => {
      return getUserById(id);
    });
};

const deleteUser = (id) => {
  return db("users").where({ id }).del();
};
module.exports = {
  getUsers,
  getUserById,
  getUserByUsername,
  addUser,
  updateUser,
  deleteUser,
};
