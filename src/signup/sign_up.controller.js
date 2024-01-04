const SignupService = require('./sign_up.service')
const CustomError = require('../error-handlers/custom.errpr');

const HTTP_STATUS = require('../constants/http.constants')


class SignupController {

     /**
* @method signupNewUser
* @param {*} req 
* @param {*} res 
* @description to take user details for signup
* @returns returns successfull response  when userdetails are added successfully
*/
    async signupNewUser(req, res) {
        try {
            const response = await SignupService.signup(req.body)

            if (!response) throw new CustomError('Error! Please try after some time.', HTTP_STATUS.INTERNAL_SERVER_ERROR);

			return res.status(HTTP_STATUS.CREATED).json({
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
* @method signinUser
* @param {*} req 
* @param {*} res 
* @description to take user details for sigin
* @returns returns successfull response  when userdetails are added successfully
*/

    async signinUser(req, res) {
        try {

            const response = await SignupService.signinUser(req.body)
            
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


module.exports = new SignupController()