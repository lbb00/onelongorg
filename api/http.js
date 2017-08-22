import qs from 'qs'
import axios from 'axios'

const post = (url, data) => {
  return axios({
    methods: 'post',
    url,
    data: qs.stringify(data)
  })
}

const get = (url, params) => {
  return axios({
    methods: 'get',
    url,
    params
  })
}

export default{
  post,
  get
}
