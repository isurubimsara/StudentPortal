const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');

users.use(cors());
process.env.SECRET_KEY = 'secret';

//adding a new user
users.post('/register', (req, res) => {

  const today = new Date();
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    created: today
  }


  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10)
          .then(hash => {
            userData.password = hash;
            User.create(userData)
              .then(user => {
                res.json({
                  status: user.email + " registered"
                })
              })
              .catch(err => {
                res.send("error" + err)
              })
          })
          .catch(err => {
            res.send("error" + err)
          })
      } else {
        res.json({
          error: "user already registered"
        })
      }
    })
    .catch(err => {
      res.send("error" + err)
    })

})

users.post('/login', (req,res) => {
  User.findOne({
    email:req.body.email
  })
  .then( user => {
    if(user){
      if(bcrypt.compareSync(req.body.password, user.password)){
        const payload = {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token)
      }else{
        res.json({error: "user does not exist"})
      }
    }else{
      res.json({error: "user does not exist"})
    }
  })
  .catch(err => {
    res.send("error"+err)
  })
})

users.get('/profile', (req,res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
  .then(user => {
    if(user){
      res.json(user)
    }else{
      res.send("Error doesn't exist")
    }
  })
  .catch(err => {
    res.send("error" + err)
  })
})

module.exports = users;