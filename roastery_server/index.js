const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const cors = require('cors')
app.use(express.json())

app.use(cors())
const loginRouter = require('./controllers/login')
const registerRouter = require('./controllers/users')
const textRouter = require('./controllers/text')

mongoose.connect(process.env.MONGODB_URI)
.then(result => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

let texts = [
  {
    text: 'blaablaaa',
    email: 'juha@gmail.com'
  }
]

app.get("/", (req, res) => {
  console.log(req)
  res.json(texts)
})

app.use("/api/login", loginRouter)
app.use("/api/register", registerRouter)
app.use("/api/texts", textRouter)
app.use(unknownEndpoint)


const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})