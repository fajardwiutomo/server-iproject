const express = require('express')
const router = express.Router()
const sportController = require('../controllers/sportController')



router.get("/football", sportController.getAll)




module.exports = router