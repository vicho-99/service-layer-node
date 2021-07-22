
const axios = require('axios');
const config = require("../configurations/server");
const login = require('../models/LoginModel');
const https = require('https');

module.exports = {

    signUp : async (req,res) => {

        let  httpsAgent =  new https.Agent({rejectUnauthorized: false});

        try 
        {
            const  data  = await login.schema.validateAsync(req.body);

            if(data.username === config.USERNAME && data.password === config.PASSWORD){

                const data = {
                    CompanyDB: config.SL_COMPANYDB,
                    Password:  config.SL_PASSWORD,
                    UserName:  config.SL_USERNAME
                }

                const response  = await axios.post("https://192.168.0.60:50000/b1s/v1/Login",data ,{httpsAgent});

                if(response.status === 200){

                    res.cookie('cookie', response.headers['set-cookie'])

                }

                return res.status(200).json({message:'welcome service layer'});


            } else {

                return res.status(401).json({message:'wrong credentials'});

            }


        } catch(error) {
           
            if(error.details != null){

                return res.status(400).json({
                    description:error.details[0].message,
                    cause:error.details[0].path[0]
                });

            }

            return res.status(404).json(error);
           
        }

    } ,
    
}
