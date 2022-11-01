import axios from 'axios'
const baseUrl = "http://localhost:3003/api/texts"

const sendtext = async (email, text) => {
  console.log("ready to send data")
  const textObject = {
    email: email,
    text: text
  }
  await axios.post(baseUrl, textObject)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { sendtext }