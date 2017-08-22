import http from './http'

const getPostsXml = () => {
  console.log('bbb')
  return http.get('https://blog.onelong.org/search.xml')
}

export default{
  getPostsXml
}
