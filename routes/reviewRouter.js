const Router = require("express");
const router = new Router();
const { Review } = require("../models/models");
const imgbbUploader = require("imgbb-uploader");

router.post("/create-review", async (req, res) => {
  const { title, info, rating, img } = req.body;
  const review = await Review.create({ title, info, rating, img });
  res.json(review);
});
router.get("/get-review", async (req, res) => {
  const reviews = await Review.findAll();
  res.json(reviews);
});
router.post("/upload", (req, res) => {
  const options = {
    apiKey: "9d0a8c37b3173752dd77f136f679adb8",
    base64string: req.body.data,
  };
  imgbbUploader(options)
    .then((response) => res.json(response))
    .catch((error) => console.error(error));
});

module.exports = router;
