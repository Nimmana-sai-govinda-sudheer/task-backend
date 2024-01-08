const express = require('express');
const router = express.Router();
// const catchAsync = require("../config/catchAsync")
const userController = require('./sign_user.controller');
// const Auth = require("../middlewares/Auth.middleware")

router.post('/signup',userController.signupNewUser);

    
    

router.post('/signin', userController.signinUser);


module.exports = router;