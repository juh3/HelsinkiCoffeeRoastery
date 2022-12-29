const bcrypt = require("bcrypt")
const { response } = require("express")
const registerRouter = require("express").Router()
const User = require("../models/user")

registerRouter.post("/", async(req, res) => {
  const { email, password } = req.body
  
  const existingUser = await User.findOne({email})
  console.log(existingUser)
  if(existingUser){
    return res.status(400).json({error: "Email already in use"})
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({email, passwordHash})

  const savedUser = await user.save()
  if(savedUser){
    response.status(201).json(savedUser)
  }
  else{
    response.status(400).json({ error: "Unknown error happened"})
  }

})

module.exports = registerRouter
