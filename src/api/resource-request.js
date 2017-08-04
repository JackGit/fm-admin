import http from './http'

export async function getList (projectId) {
  return http.get('/resource-requests', {
    params: {
      projectId,
      distinctFields: 'url,type'
    }
  }).then(({ data }) => data)
}

export async function stats ({ projectId, url, type, timeStart, timeEnd, interval }) {
  return http.get('/stats/resource', {
    params: {
      projectId,
      url,
      type,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}
