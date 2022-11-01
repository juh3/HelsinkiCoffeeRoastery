const mongoose = require('mongoose')

const textSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    minlength: 3
  },
  
  text:{
    type: String,
    required: true
  },

  answered:{
    type: Boolean,
    default: False
  },

  completed:{
    type: Boolean,
    default: False
  }

})

textSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
  }
})

const Text = mongoose.model('Text', textSchema)

module.exports = User