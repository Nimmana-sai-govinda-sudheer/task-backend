const Router = require('express')
const AuthRoutes = require('../../Authentication/AuthRoutes.routes')
const userRoutes = require('../../sign_user/sign_user.route')
const router = Router()
const userTasks=require('../../tasks/tasks.route');
const userprofile=require('../../profile/profile.route');
const settings=require('../../settings/settings.route')

const chart=require('../../piechart/piechart.route')




/**
 * for signup and signin
 */
router.use('/user',userRoutes );

/**
 * for  tasks
 */

router.use('/tasks',userTasks);

/**
 * for user profile
 */

router.use('/profile',userprofile);

/**
 * for changing users password
 */

router.use('/settings',settings);


/**
 * for piecharts 
 */

router.use('/chart',chart);




module.exports = router