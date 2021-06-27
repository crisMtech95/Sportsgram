const express = require("express");
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require("../../utils/auth")
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { image, User, comment } = require("../../db/models")

const router = express.Router();

// Main page get all images
router.get("/", asyncHandler(async(req, res) => {
    const imgs = await image.findAll({include: [ User ]})
    return res.json(imgs)
}))

//User profile
router.get("/profile/:id", asyncHandler(async(req, res) => {
    const { id } = req.params
    const imgs = await image.findAll({ where: { userId: id}})
    return res.json(imgs)
}))

//One image page
router.get("/:id", asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    const img = await image.findByPk(id, {
        include: [User]
    })
    return res.json(img)
}))
//post an image
router.post("/", asyncHandler(async(req, res) => {
    const { imageUrl, userId, content, sport } = req.body

    await image.create({
        imageUrl,
        userId,
        content,
        sport,
    })

}))
//delete an image
router.delete("/", asyncHandler(async(req, res) => {
    const { id } = req.body
    await comment.destroy({
        where: {
            imageId: id
        }
    })
    const response = await image.destroy({
        where: {
          id
        },
      });
     res.json(response);
}))
// editing an image
router.put("/", asyncHandler(async(req, res) => {
    const { id, imageUrl, userId, content, sport } = req.body;
    const img = await image.findByPk(id)
    await img.update({imageUrl, userId, content, sport})
    return res.json(img)
}))
router.patch("/", asyncHandler(async(req, res) => {
    const { id, albumId } = req.body;
    console.log("THIS IS THE ALBUMID", albumId)
    const result = await image.findByPk(id)
    const data = await result.update({albumId: albumId})
    return res.json(data)
}))

module.exports = router;
