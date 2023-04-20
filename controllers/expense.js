const e = require('express');
const User = require('../models/User');
const { Error } = require('sequelize');

exports.postExpense = async (req,res,next) =>{
     try{
         var email = await User.findOne({
            where:{
                email:req.body.email
            }
        })
          
            if(email){
                return res.status(500).json({
                    data:[],
                    success:false,
                    msg:"email exist"
                })
            }
            else{
                const name = req.body.name;
                console.log(name)
                const email = req.body.email;
                const password = req.body.password;
                const data = await User.create({
                    name :name,
                    email : email,
                    password: password});
               }

     }catch(err){
        res.status(500).json({
        error : err
        })

    }
}
