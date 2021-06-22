const express = require("express");
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require("../../utils/auth")
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { image, User } = require("../../db/models")

const router = express.Router();

router.get("/", asyncHandler(async(req, res) => {
    const imgs = await image.findAll()

    return res.json(imgs)
}))

router.post("/", asyncHandler(async(req, res) => {
    const { imageUrl, userId, content, sport, id } = req.body

    await images.create({
        imageUrl,
        userId,
        content,
        sport,
        id,
    })
    return res.redirect("/images")
}))

module.exports = router;
