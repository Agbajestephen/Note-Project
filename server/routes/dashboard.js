const express =require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboardController');

// Dashboard Routes


router.get('/dashboard', dashboardController.dashboard);




module.exports = router;