const userTasks = require('./tasks.service')
const CustomError = require('../error-handlers/custom.errpr');

const HTTP_STATUS = require('../constants/http.constants')

class taskscontroller {

    /**
* @method gettasks
* @param {*} req 
* @param {*} res 
* @description to retrieve users  tasks from db
* @returns returns successfull response when tasks details  are retrieved successfully
*/
    async gettasks(req, res) {
        try {
            const response = await userTasks.gettasks(req.payload.user._id)
           
            if (!response) throw new CustomError('Error! Please try after some time.', HTTP_STATUS.INTERNAL_SERVER_ERROR);

			return res.status(HTTP_STATUS.OK).json({
				message: response.message,
				data: response.data,
				status: response.status
			});

        } 
        catch (error) {
			// this.logger.error(`Inside AccessRightsController: saveAccessRights method: Error occured while saving accessRights ${error.message}`);
			if (error instanceof CustomError)
				return res.status(error.statusCode).json({
					status: false,
					message: error.message || this.error
				});

			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
				status: false,
				message: this.error
			});
		}
    }


    /**
* @method savetasks
* @param {*} req 
* @param {*} res 
* @description for adding of tasks in db
* @returns returns successfull response when tasks details  are addded successfully
*/

    async savetasks(req, res) {
        try {
            const response = await userTasks.savetasks(req.body, req.payload.user._id)
            
            if (!response) throw new CustomError('Error! Please try after some time.', HTTP_STATUS.INTERNAL_SERVER_ERROR);

			return res.status(HTTP_STATUS.OK).json({
				message: response.message,
				status: response.status
			});

        } 
        catch (error) {
			// this.logger.error(`Inside AccessRightsController: saveAccessRights method: Error occured while saving accessRights ${error.message}`);
			if (error instanceof CustomError)
				return res.status(error.statusCode).json({
					status: false,
					message: error.message || this.error
				});

			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
				status: false,
				message: this.error
			});
		}
    }


    /**
* @method updatetasks
* @param {*} req 
* @param {*} res 
* @description for updating  of tasks in db
* @returns returns successfull response when tasks details  are updated successfully
*/
    async updatetasks(req, res) {
        try {

            const response = await userTasks.updatetasks(req.body._id, req.body)
            
            if (!response) throw new CustomError('Error! Please try after some time.', HTTP_STATUS.INTERNAL_SERVER_ERROR);

			return res.status(HTTP_STATUS.OK).json({
				message: response.message,
				status: response.status
			});

        } 
        catch (error) {
			// this.logger.error(`Inside AccessRightsController: saveAccessRights method: Error occured while saving accessRights ${error.message}`);
			if (error instanceof CustomError)
				return res.status(error.statusCode).json({
					status: false,
					message: error.message || this.error
				});

			return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
				status: false,
				message: this.error
			});
		}
    }
}

module.exports = new taskscontroller()
