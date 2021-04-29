/* eslint-disable camelcase */
import axios from 'axios'

const instance = axios.create()

const base = 'https://api.unsplash.com'

window.API_HOST = base

export default new (class {
  async request (method, url) {
    try {
      const res = await instance.request({
        url: `${base}${url}`,
        method,
        crossdomain: true,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Client-ID vOSaDh8Hmksuy81ulsxLZiVXwXfI5ZAEA5uKeD4GhtQ'
        }
      })
      if (res.status === 200) {
        return res.data
      }
      return Promise.reject(res.data)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async getPhotos () {
    return this.request('get', '/photos')
  }

  async searchPhoto (queryTerm) {
    return this.request('get', `/search/photos/?query=${queryTerm}`)
  }
})()
