const express = require('express') //1 paso: requirir express
const router = express.Router() //2 paso solo el metodo de router de express

const {about} = require('../controllers/aboutController')//3 paso requiero el metodo o los metodos que quiero

router.get('/',about)

module.exports = router