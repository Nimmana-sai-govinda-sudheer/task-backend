const profileModel = require('../models/users.models')
const CustomError = require('../error-handlers/custom.errpr');


const HTTP_STATUS = require('../constants/http.constants')


const mongoose = require('mongoose')

class profileservice {

    /**
* @method signup
* @param {*} req 
* @param {*} res 
* @description to add users contactDetails in user_contact_details table in Db
* @returns returns usercontactDetails Taken successfully  when contactDetails are added successfully
*/

    async updatedetails(body, id) {
        try {
            const result = await profileModel.updateOne({ _id: id }, { $set: body });

            return {
                status: true,
                message: 'tasks details added successfully',
            }
        }
        catch (error) {

            throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
        }
    }

    /**
* @method getDetailst
* @param {*} req 
* @param {*} res 
* @description to add users contactDetails in user_contact_details table in Db
* @returns returns usercontactDetails Taken successfully  when contactDetails are added successfully
*/


    async getDetailst(id) {
        try {

            const details = await profileModel.findById({ _id: id }, { email: 1, username: 1, mobileNumber: 1, city: 1, state: 1, zip: 1, Address: 1 })

            return {
                status: true,
                message: 'tasks details getted successfully',
                data: details
            }
        }
        catch (error) {
            throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
        }
    }
}
module.exports = new profileservice();