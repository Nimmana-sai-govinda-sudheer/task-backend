const express = require('express');
const router = express.Router();
const catchAsync = require("../config/catchAsync")
const userController = require('./tasks.controller');
const Auth = require("../middlewares/Auth.middleware")




/**
 * for updating users password
 */

router.get('/details', Auth.authUser, userController.gettasks);



router.post('/save', Auth.authUser, userController.savetasks);


router.put('/update', Auth.authUser, userController.updatetasks);



module.exports = router;
