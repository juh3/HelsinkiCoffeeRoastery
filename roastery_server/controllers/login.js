const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const { response } = require('express')
const User = require("../models/user")

loginRouter.post("/", async(req, res) => {
  console.log("login in")
  const { email, password} = req.body
  const existingUser = await User.findOne({email})
  console.log(existingUser)
  const passwordCorrect = existingUser === null
    ? false
    : await bcrypt.compare(password, existingUser.passwordHash)
  
  if(passwordCorrect){
    res.status(200).send({ email: email })
  }

})

module.exports = loginRouter
