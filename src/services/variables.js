import axios from 'axios'

const baseUrl = '/api/variables'

const getSiteKey = async () => {
  const response = await axios.get(`${baseUrl}/site_key`)
  return response.data
}

export default { getSiteKey }
