require('dotenv').config()

module.exports = {

    HOST :  process.env.SERVER_HOST,
    PORT : process.env.SERVER_PORT ,
    USERNAME : process.env.USERNAME ,
    PASSWORD :  process.env.PASSWORD ,
    SL_COMPANYDB : process.env.SL_COMPANYDB ,
    SL_PASSWORD: process.env.SL_PASSWORD ,
    SL_USERNAME: process.env.SL_USERNAME ,
    SL_HOST: process.env.SL_HOST ,

}

