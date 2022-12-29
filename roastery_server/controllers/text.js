const textRouter = require('express').Router()
const Text = require("../models/text")


textRouter.post("/", async(req, res) => {
  const {email, text} = req.body
 
  const newText = new Text({email, text})
  const savedText = await newText.save()
  if(savedText){
    return res.status(201).json(savedText)
  }
  else{
    return res.status(400).json({error: 'unknown error happened'})
  }

})

textRouter.get("/", async(req,res) => {
  const texts = await Text.find({})
  if(texts){
    return res.json(texts)
  }
  else{
    return res.status(404).end()
  }
})

textRouter.get("/:id", async(req,res) => {
  const { id } = req.params
  console.log(id)
  const text = await Text.findById(id)
  console.log(text)
  if(text){
    return res.status(201).json(text)
  }
  else{
    return res.status(400).json({error: 'Text could not be found'})
  }
})


module.exports = textRouter