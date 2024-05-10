const getUsers = (req, res) => {
  res.status(200).json({ message: "fetch users" });
};

const createUsers = (req, res) => {
  res.status(201).json({ message: "userCreated" });
};

const updateUsers = (req, res) => {
  res.status(200).json({ message: "user updated" });
};

const deleteUsers = (req, res) => {
  res.status(200).json({ message: "user deleted" });
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
