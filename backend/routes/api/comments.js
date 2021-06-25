const express = require("express");
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require("../../utils/auth")
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { image, User, comment : c} = require("../../db/models")

const router = express.Router();


router.post("/", asyncHandler(async(req, res) => {
    const {  comment, imageId, userId } = req.body;
     await c.create({ comment, imageId, userId })
}))

router.patch("/", asyncHandler(async(req, res) => {
    const {comment, id} = req.body;
    const result = await c.findByPk(id)
    await result.update({comment})
    return res.json(result)
    //  await c.update({ comment }, {where: id})
}))










module.exports = router;
