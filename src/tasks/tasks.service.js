const Tasks = require('../models/tasks.models')
const CustomError = require('../error-handlers/custom.error');

const logger = require('../config/logger');
const { log } = require('winston');
// const logger = require('../config/logger');

class tasksservice {

    /**
* @method gettasks
* @description to find tasks of particular user
* @returns returns tasks details  retrieved successfully when tasks details  are gettted successfully
*/
    async gettasks(user_id,offset,limit) {
        try {
              
            // myColl.find(query).sort({ length: -1 }).limit(3);

            const skip=offset*limit;

            const existingUser=await Tasks.find(({ user_id: user_id })).count();
            const User = await Tasks.find({ user_id: user_id }).skip(skip).limit(limit);


            console.log(offset,"dasrhal")
            console.log(limit,"tirumal");
            return {
                status: true,
                message: 'tasks details retrieved successfully',
                data: User,existingUser
                  }
        }
        catch (error) {
            throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
        }
    }

    /**
 * @method savetasks
 * @description to store tasks of particular user
 * @returns returns tasks details saved successfully when tasks details  are saved successfully in db
 */
    async savetasks(data, user_id) {
        try {   

            logger.info('Inside  tasksservice: savetasks method');
             
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
* @description to update tasks in mongo Db of particular user
* @returns returns tasks details updated successfully when tasks details  are updated successfully
*/
    async updatetasks(_id, body) {
        try {
             
            logger.info('Inside  tasksservice: updatetasks method');
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

     /**
* @method gettasksById
* @description to retrieve particular user id details 
* @returns returns user Id details retrieved successfully when user Id details   are updated successfully
*/
async gettasksById(taskId) {
    try {
        logger.info('Inside  tasksservice:  gettasksById method');
        const result = await Tasks.findById({ _id:taskId });
        return {
            status: true,
            message: 'user Id details retrieved successfully',
            data:result
        }
    }
    catch (error) {

        throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
    }
}


async deleteTask(taskId) {
    try {
           
        const result = await Tasks.deleteOne({ _id:taskId });
        return {
            status: true,
            message: 'user Id deleted successfully',
        }
    }
    catch (error) {

        throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
    }
}

 /**
* @method gettasksById
* @description to retrieve particular user id details 
* @returns returns user Id details retrieved successfully when user Id details   are updated successfully
*/
async gettasksById(taskId) {
    try {
        logger.info('Inside  tasksservice:  gettasksById method');
        const result = await Tasks.findById({ _id:taskId });
        return {
            status: true,
            message: 'user Id details retrieved successfully',
            data:result
        }
    }
    catch (error) {

        throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
    }
}


async getTasksByKey(taskId) {
    try {
           
        const result = await Tasks.find({ _id:taskId });
        return {
            status: true,
            message: 'user Id deleted successfully',
        }
    }
    catch (error) {

        throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
    }
}

}

module.exports = new tasksservice();