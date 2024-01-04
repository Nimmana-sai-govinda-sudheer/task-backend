const Tasks = require('../models/tasks.models')
const CustomError = require('../error-handlers/custom.errpr');
const HTTP_STATUS = require('../constants/http.constants')

class tasksservice {

    /**
* @method gettasks
* @param {*} req 
* @param {*} res 
* @description to find tasks of particular user
* @returns returns tasks details  retrieved successfully when tasks details  are gettted successfully
*/
    async gettasks(user_id) {
        try {
            const newUser = await Tasks.find({ user_id: user_id });

            return {
                status: true,
                message: 'tasks details retrieved successfully',
                data: newUser
            }
        }
        catch (error) {
            throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
        }
    }

    /**
 * @method savetasks
 * @param {*} req 
 * @param {*} res 
 * @description to store tasks of particular user
 * @returns returns tasks details saved successfully when tasks details  are saved successfully in db
 */
    async savetasks(data, user_id) {
        try {

            data.user_id = user_id
            const UserModelData = new Tasks(data)
            const newUser = await UserModelData.save();


            return {
                status: true,
                message: 'tasks details saved successfully',
            }
        }
        catch (error) {

            throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);

        }
    }
    /**
* @method updatetasks
* @param {*} req 
* @param {*} res 
* @description to update tasks in mongo Db of particular user
* @returns returns tasks details updated successfully when tasks details  are updated successfully
*/
    async updatetasks(_id, body) {
        try {

            const result = await Tasks.updateOne({ _id }, { $set: body });
            return {
                status: true,
                message: 'tasks details updated successfully',
            }
        }
        catch (error) {

            throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
        }
    }

}

module.exports = new tasksservice();