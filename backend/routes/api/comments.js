const express = require("express");
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require("../../utils/auth")
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { image, User, comment : c} = require("../../db/models")

const router = express.Router();

router.get("/:id", asyncHandler(async(req, res) => {
    const { id } = req.params
    const comments = await c.findAll({
        where: { imageId: id},
        include: [ User ]
    })
    return res.json(comments)
}))

router.post("/", asyncHandler(async(req, res) => {
    const {  comment, imageId, userId } = req.body;
     await c.create({ comment, imageId, userId })
}))

router.patch("/", asyncHandler(async(req, res) => {
    const {comment, id} = req.body;
    const result = await c.findByPk(id, { include: [User]})
    const data = await result.update({comment})
    return res.json(data)
    //  await c.update({ comment }, {where: id})
}))


router.delete("/", asyncHandler(async(req, res) => {
    const { id } = req.body;
    const response = await c.destroy({
        where: { id }
    })
    return res.json(response)
}))







module.exports = router;
