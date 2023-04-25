const e = require('express');
const User = require('../models/User');
const { Error } = require('sequelize');
const bcrypt = require('bcrypt')

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
    
            bcrypt.compare(password,emailExists.password,(err,result)=>{
                if(err){
                    throw new Error('something went wrong')
                }
                
                if(result === true){
                    return res.status(200).json({
                        data:[],
                        success:true,
                        msg:"Successfully Logged in"
                    })
                }
                else{
                    return res.status(400).json({
                        data:[],
                        success:false,
                        msg:"Password Incorrect"
                    })
                }
            })
         
           if(!emailExists && !passwordExists){
                return res.status(404).json({
                    data:[],
                    success:false,
                    msg:"User doesn't exists"
                })

            }
            else if(!emailExists){
                return res.status(400).json({
                    data:[],
                    success:false,
                    msg:"Email id doesn't exist"
                })
            }
   
           
     }catch(err){
        res.status(500).json({
        error : err
        })

    }
}
