import http from './http'

export async function getList ({ projectId, timeStart, timeEnd, limit, url, method }) {
  return http.get('/ajax-requests', {
    params: {
      projectId,
      distinctFields: 'url,method',
      fields: 'url,method',
      limit
    }
  }).then(({ data }) => data)
}

export async function stats ({ projectId, url, method, timeStart, timeEnd, interval }) {
  return http.get('/stats/ajax-request', {
    params: {
      projectId,
      url,
      method,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}
