const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/usersControllers");

router.get("/", getUsers);
router.get("/", createUsers);
router.get("/user_id", updateUsers);
router.get("/user_id", deleteUsers);

module.exports = router;
