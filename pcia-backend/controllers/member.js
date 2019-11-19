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
    {_id: req.body._id},
    {$push: {
      years: req.body.years
    }},
    (err,member)=>{
      if(err){
        console.log(err.message)
      }
      res.json(member)
    }
  )

}


exports.getIndTypeValues = (req, res) => {
  res.json(Member.schema.path('industrytype').enumValues)

}

exports.addMember = (req, res) => {
  console.log("req body: ", req.body)
  const newMember = new Member(req.body)

  newMember.save((err,data)=>{
    if(err){
      console.log(err)
      return err
    }
    res.json({
      data
    })
  })
}

exports.deleteMember = (req,res)=>{
  let memberId = req.body._id;
  Member.findOneAndRemove({
    _id: memberId
  }, (err,data)=>{
    if(err){
      console.log(err)
      return err
    }
    res.json({data})
  })


}
