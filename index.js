const convertDate = require('./src/convertDate')

const date = convertDate("30-04-2025")
if(date !== null){
    console.log(date)
}else{
    console.log("Program error!")
}