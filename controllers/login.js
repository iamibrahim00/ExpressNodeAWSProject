const e = require('express');
const User = require('../models/User');
const { Error } = require('sequelize');

exports.login = async (req,res,next) =>{
     try{
            let email = req.body.email
            const emailExists = await User.findOne({ 
                where: { email: email } 
            });
            let password = req.body.password
            const passwordExists = await User.findOne({ 
                where: { password: password } 
            });
    
    
            if (emailExists && passwordExists) {
                return res.status(200).json({
                    data:[],
                    success:true,
                    msg:"Successfully Logged in"
                })
            }
            else if(!emailExists && !passwordExists){
                return res.status(404).json({
                    data:[],
                    success:false,
                    msg:"User doesn't exists"
                })

            }
            else if(!emailExists){
                return res.status(404).json({
                    data:[],
                    success:false,
                    msg:"Email id doesn't exist"
                })
            }
            else{
                return res.status(404  ).json({
                    data:[],
                    success:false,
                    msg:"Password Incorrect"
                })
             }
           
           
     }catch(err){
        res.status(500).json({
        error : err
        })

    }
}
