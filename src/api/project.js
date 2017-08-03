import http from './http'

export async function create (request) {
  return http.post('/projects', {
    name: request.name,
    url: request.url,
    desc: request.desc
  }).then(({ data }) => data)
}

export async function getList () {
  return http.get('/projects').then(({ data }) => data)
}
