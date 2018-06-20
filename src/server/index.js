import axios from 'axios'

export const getData = () => {
  return axios({
    url: '/api/posts'
  })
}
