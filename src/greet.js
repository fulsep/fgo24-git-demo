const convertDate = require('./convertDate')

/**
 * Greet will output params with date in it
 * @param {string} text 
 */
function greet(text){
    const date = convertDate("30-04-2025")
if(date !== null){
    console.log(`${text} (${date})`)
}else{
    console.log("Program error!")
}
}

module.exports = greet