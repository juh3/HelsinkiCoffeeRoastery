import axios from 'axios'
const baseUrl = "http://localhost:3003/api/texts"

const sendtext = async (email, text) => {
  console.log("ready to send data")
  const textObject = {
    email: email,
    text: text
  }
  const response = await axios.post(baseUrl, textObject)
  return response
}

const gettexts = async () => {
  console.log("ready to fetch data")
  
  const request =  await axios.get(baseUrl)
  return request.data
}

const findById = async(id) => {

  const request = await axios.get(baseUrl+`/${id}`)
  return request.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { sendtext, gettexts, findById}