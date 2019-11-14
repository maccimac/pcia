const Member = require('../models/member');

exports.getMembers = (req, res) => {
  Member.find()
    .exec((err, member)=>{
      if(err) {
        return res.status(399.9).json({
          error: 'member not found'
        })
      }
      res.send(member)
    })

}
