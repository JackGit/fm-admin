import http from './http'

export async function getList ({ timeStart, timeEnd, limit, url, method }) {
  return http.get('/ajax-requests', {
    params: {
      distinctFields: 'url,method',
      fields: 'url,method'
    }
  }).then(({ data }) => data)
}

export async function stats ({ url, method, timeStart, timeEnd, interval }) {
  return http.get('/stats/ajax-request', {
    params: {
      url,
      method,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}
