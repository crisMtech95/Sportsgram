const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const imagesRouter = require("./images.js");
const commentsRouter = require("./comments.js")
const albumsRouter = require("./albums")
const asyncHandler = require('express-async-handler');
const searchRouter = require("./search")

const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/images", imagesRouter);
router.use("/comments", commentsRouter);
router.use("/albums", albumsRouter);
router.use("/search", searchRouter);


router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({ where: { username: 'Demo-lition' }})
    setTokenCookie(res, user);
    return res.json({ user });
}));


module.exports = router;
/****************************TESTING AUTH ROUTES
 const { restoreUser } = require('../../utils/auth.js');
 router.get('/restore-user', restoreUser, (req, res) => {
     return res.json(req.user);
    }
    );
    // GET /api/require-auth
    const { requireAuth } = require('../../utils/auth.js');
    router.get('/require-auth', requireAuth, (req, res) => {
        return res.json(req.user);
    });
    router.post("/test", (req, res) => {
        res.json({ requestBody: req.body})
    })
*************************************************/
