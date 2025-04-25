const moment = require('moment')

/**
 * Function to format date
 * @param {string} date
 * date formatting from "24-05-2025" to "24/05/2025"
 */
function convertDate(date){
    const parsed = moment(date,"DD-MM-YYYY")
    if(parsed.isValid()){
        return parsed.format("DD/MM/YYYY")
    }else{
        return null
    }
}

module.exports = convertDate