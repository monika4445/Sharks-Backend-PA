const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/group-controller');

router.get('/groups', GroupController.groupsIndex);
router.post('/groups', GroupController.createGroup);


module.exports = router;