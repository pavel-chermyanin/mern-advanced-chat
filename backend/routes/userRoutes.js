const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//api/user/
router.route("/").post(registerUser).get(protect, allUsers);
//api/user/login
router.post("/login", authUser);

module.exports = router;
