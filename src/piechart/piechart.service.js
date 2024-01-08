const pieChartModel = require('../models/tasks.models');
const CustomError = require('../error-handlers/custom.error');
const logger = require('../config/logger');


class piechartservice {

    /**
* @method getDetailst
* @description to add users contactDetails in user_contact_details table in Db
* @returns returns usercontactDetails Taken successfully  when contactDetails are added successfully
*/


    async getDetailst(user_id) {
        try {
            // logger.info('Inside piechartservu: getDetailst method');
            const details = await pieChartModel.find({ user_id: user_id }, { name: 1, y: 1 })

            return {
                status: true,
                message: ' details retrieved successfully',
                data: details
            }
        }
        catch (error) {

            console.log(error,"erorrororor");

            // logger.error(`Inside piechartservice: getDetailst method: Error occured while fetching data from db ${error.message}`);
            throw new CustomError((error instanceof CustomError) ? error.message : 'Error! Please try again.', error.statusCode);
        }
    }
}
module.exports = new piechartservice();