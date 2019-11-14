const express = require('express');
const router = express.Router();

const { getMembers }  =  require('./controllers/member');


// router.get('/secret/:userId', requireSignIn, isAuth, isAdmin, (req, res)=>{
//   res.json({
//     user: req.profile
//   })
// })
router.get('/getMembers', getMembers)
// router.put('/user/:userId', requireSignIn, isAuth, update)
// router.get('/orders/by/user/:userId', requireSignIn, isAuth, purchaseHistory)
//
// router.param('userId', userById)

module.exports = router;
