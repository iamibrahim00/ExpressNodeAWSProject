const { Router } = require('express');
const express = require('express');

const ExpenseController = require('../controllers/expense');

const router = express.Router()


router.post('/user/signup',ExpenseController.postExpense)





module.exports = router