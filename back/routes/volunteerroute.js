const express = require('express');
const router = express.Router();

const adminAuth = require("../midalwares/jwt_validate");

const volunteerController = require("../controllers/volunteerController");

router.get('/all',volunteerController.getVolunteerOpp)
router.post('/add',volunteerController.AddVolunteerOpp)
router.delete('/:id',volunteerController.deleteVolunteerOpp)
 router.put('/:id',volunteerController.updateVolunteerOpp)

module.exports = router