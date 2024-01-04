const express = require('express');
const router = express.Router();
const catchAsync = require("../config/catchAsync")
const userController = require('./sign_up.controller');
const Auth = require("../middlewares/Auth.middleware")

router.post('/signup',
    (req, res) => (userController.signupNewUser(req, res)));

    
    

router.post('/signin', userController.signinUser);


module.exports = router;