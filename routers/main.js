const express = require('express') //1 paso: requirir express
const router = express.Router() //2 paso solo el metodo de router de express

const {index} = require('../controllers/mainController')//3 paso requiero el metodo o los metodos que quiero

router.get('/',index)

module.exports = router