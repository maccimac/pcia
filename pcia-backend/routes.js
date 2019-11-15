const express = require('express');
const router = express.Router();

const { getMembers, verifyMember, getIndTypeValues }  =  require('./controllers/member');



router.get('/getMembers', getMembers)
router.get('/industryValues',getIndTypeValues )
router.put('/verifyMember/:memberId/:year', verifyMember)


module.exports = router;
