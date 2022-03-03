const Router = require("express");
const router = new Router();
const { User } = require("../models/models");

router.post("/create-user", async (req, res) => {
  // const { email, role } = req.body;
  // const user = await User.create({ email, role });
  // res.json(user);
});
router.get("/get-user", (req, res) => {});

module.exports = router;
