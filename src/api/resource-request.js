import http from './http'

export async function getList () {
  return http.get('/resource-requests', {
    params: {
      distinctFields: 'url,type'
    }
  }).then(({ data }) => data)
}

export async function stats ({ url, type, timeStart, timeEnd, interval }) {
  return http.get('/stats/resource', {
    params: {
      url,
      type,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}
