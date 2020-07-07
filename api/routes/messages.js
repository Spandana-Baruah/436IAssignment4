var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Message = require('../models/message')

/* GET Courses listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Message.find()
      .populate('Message')
        .exec()
        .then(docs =>{
          console.log(docs);
          res.status(200).json(docs);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
          error: err});
        })
});

router.get('/:messageId', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const id = req.params._id
  Message.findById(id)
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => console.log(err))
});

router.post('/', function(req, res, next) {
  const newMessage = new Message({
    text: req.body.text
  })
  newMessage.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
});

router.delete('/:messageId', function(req, res, next) {
  const messageId = req.body._id
  Message.deleteOne({'_id': messageId}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.send('deleted message with id :  ' + messageId);
            }})
});


module.exports = router;
