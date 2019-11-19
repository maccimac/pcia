const express = require('express');
const router = express.Router();

const { getMembers, verifyMember, getIndTypeValues, addMember, deleteMember }  =  require('./controllers/member');



router.get('/getMembers', getMembers)
router.get('/industryValues',getIndTypeValues )
router.put('/verifyMember/:memberId/:year', verifyMember)
router.post('/addMember',addMember )
router.delete('/deleteMember', deleteMember)


module.exports = router;
