const express = require("express");
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require("../../utils/validation");
const { image } = require("../../db/models")

const router = express.Router();
const { Op } = require("sequelize");

// Main page get all images
router.patch("/", asyncHandler(async(req, res) => {
    const { content } = req.body
    const imgs = await image.findAll({ where: {
        [Op.or]: [
          { content: content }, // this will only find exacly that string. need to find
          { sport: content } // a way so it grabs if the string that is inside.
        ]
      }})

    return res.json(imgs)
}))

module.exports = router;
