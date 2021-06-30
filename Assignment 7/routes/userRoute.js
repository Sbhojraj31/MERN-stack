const express = require('express');

const userController = require('../controllers/user-controller');
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);
router.get("/getBlog", userController.getBlog);

router.use(checkAuth);

router.get("/getUser", userController.userInfo);
router.post("/postBlog", userController.createPost);


module.exports = router;