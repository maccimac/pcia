const Member = require('../models/member');

exports.getMembers = (req, res) => {
  Member.find()
    .exec((err, member)=>{
      if(err) {
        return res.status(400).json({
          error: 'member not found'
        })
      }
      res.send(member)
    })

}


exports.verifyMember = (req, res) => {
  Member.update(
    {_id: "5dccaa1fef989038c7e5c17c"},
    {$push: req.body},
    (err,member)=>{
      if(err){
        return err.message
        // return res.status(400).json({
        // error: "You are not authorized to perform this action"

      }
      res.json(member)
    }
  )

}
