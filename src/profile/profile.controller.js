const profileservice = require('./profile.service')
const CustomError = require('../error-handlers/custom.errpr');

const HTTP_STATUS = require('../constants/http.constants')

class profilecontoller {

    /**
* @method save
* @param {*} req express request handler to handle requests
* @param {*} res 
* @description to save updated users details in profile
* @returns returns successfull response when user details are saved successfully
*/
    async updatedetails(req, res) {
        try {

            const response = await profileservice.updatedetails(req.body, req.payload.user._id);

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
* @method getDetailst
* @param {*} req express request handler to handle requests
* @param {*} res 
* @description to retrieve users details
* @returns returns successfull response when user details are retrieved successfully
*/
    async getDetailst(req, res) {
        try {

            const response = await profileservice.getDetailst(req.payload.user._id);

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

}

module.exports = new profilecontoller();
