
const bcrypt = require('bcrypt')
const CustomError = require('../error-handlers/custom.errpr');
const servicecontroller = require('../models/users.models')



const HTTP_STATUS = require('../constants/http.constants')


class profileservice {

    /**
* @method update
* @param {*} req 
* @param {*} res 
* @description for updating users mobile number in db.
* @returns returns updated mobile NUmber successfully when mobileNUmber is updated successfullly in Db.
*/

    async update(body, id) {
        try {
            const hashedPassword = await bcrypt.hash(body.password, 10)
            // saving the hashed password in data base
            body['password'] = hashedPassword

            const result = await servicecontroller.updateOne({ _id: id }, { $set: body })

            return {
                status: true,
                message: 'updated mobile NUmber successfully',
            }
        }
        catch (error) {

            throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
        }
    }
}
module.exports = new profileservice();