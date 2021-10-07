const express = require("express");
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require("../../utils/validation");
const { image } = require("../../db/models")

const router = express.Router();
const { Op } = require("sequelize");

// Main page get all images
router.get("/", asyncHandler(async(req, res) => {
    const { content, sport } = req.body
    const imgs = await image.findAll({ where: {
        [Op.or]: [
          { content: content },
          { sport: sport }
        ]
      }})

    return res.json(imgs)
}))

module.exports = router;
