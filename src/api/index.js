/* eslint-disable camelcase */
import axios from 'axios'

const instance = axios.create()

// const base = 'https://cors-anywhere.herokuapp.com/http://api.unsplash.com'
const base = 'https://api.unsplash.com'

window.API_HOST = base

// const sessionExpiredEvent = new Event('sessionExpired')
export default new (class {
  // eslint-disable-next-line no-useless-constructor
  //   constructor () {
  //     let reqToken
  //     if (localStorage.getItem('token')) {
  //       reqToken = JSON.parse(localStorage.getItem('token'))
  //       this.token = reqToken.value
  //     }
  //   }

  async request (method, url) {
    try {
      const res = await instance.request({
        url: `${base}${url}`,
        method,
        // data,
        crossdomain: true,
        headers: {
          //   "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Client-ID vOSaDh8Hmksuy81ulsxLZiVXwXfI5ZAEA5uKeD4GhtQ'
        }
      })
      if (res.data.status === 'success') {
        return res.data
      }
      return Promise.reject(res.data)
    } catch (e) {
      //   if (e.response && e.response.status === 419) {
      //     window.location = window.location.origin
      //     return Promise.reject(e.response.data)
      //   }
      return Promise.reject(e)
    }
  }

  async getPhotos () {
    return this.request('get', '/photos')
  }
})()
