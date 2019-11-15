const express = require('express');
const router = express.Router();

const { getMembers, verifyMember }  =  require('./controllers/member');



router.get('/getMembers', getMembers)
router.put('/verifyMember/:memberId/:year', verifyMember)


module.exports = router;
