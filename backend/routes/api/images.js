const express = require("express");
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require("../../utils/auth")
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { image, User, comment } = require("../../db/models")

const router = express.Router();


router.get("/", asyncHandler(async(req, res) => {
    const imgs = await image.findAll({include: [ User ]})

    return res.json(imgs)
}))

router.get("/:id", asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const img = await image.findByPk(id, {
        include: [{model: comment, include: User}, User]
    })
    return res.json(img)
}))

router.post("/", asyncHandler(async(req, res) => {
    const { imageUrl, userId, content, sport } = req.body

    await image.create({
        imageUrl,
        userId,
        content,
        sport,
    })

}))

router.delete("/", asyncHandler(async(req, res) => {
    const { id } = req.body
    await comment.destroy({
        where: {
            imageId: id
        }
    })
    await image.destroy({
        where: {
          id
        },
      });
      
}))

router.put("/", asyncHandler(async(req, res) => {
    const { id, imageUrl, userId, content, sport } = req.body;
    const img = await image.findByPk(id)
    await img.update({imageUrl, userId, content, sport})
    return res.json(img)
}))

module.exports = router;
