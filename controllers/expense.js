const e = require('express');
const User = require('../models/User')

exports.postExpense = async (req,res,next) =>{

    try{
       

            const name = req.body.name;
            console.log(name)
            const email = req.body.email;
            const password = req.body.password;
            const data = await User.create({name :name,email : email,
                 password: password});
            // res.status(201).json({newExpenseDetails : data})
        
    }catch(err){
        res.status(500).json({
        error : err
        })
        
    }
}

