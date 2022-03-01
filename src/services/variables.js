import axios from 'axios'

const baseUrl = '/api/variables'

const getSiteKey = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getSiteKey }
