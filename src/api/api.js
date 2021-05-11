import { API_URL } from './url.js'

export default {
  async fetchApi (url, method = 'GET', data) {
    const response = await fetch(`${API_URL}/${url}`, {
      method,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    if (!response.ok) {
      const error = new Error(response.statusText)
      const { detail, violations } = result
      error.detail = detail
      error.violations = violations.messages
      throw error
    }
    return result
  }
}
