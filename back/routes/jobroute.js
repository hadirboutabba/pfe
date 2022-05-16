const express = require('express');
const router = express.Router();

const adminAuth = require("../midalwares/jwt_validate");

const jobOpp = require("../controllers/jobController");

router.get('/all',jobOpp.getjobOpp)
router.post('/add',jobOpp.AddjobOpp)
router.delete('/:id',jobOpp.deletejobOpp)
 router.put('/:id',jobOpp.updatejobOpp)

module.exports = router