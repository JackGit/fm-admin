import http from './http'
import { convertDateField } from '@/utils/date'

export async function getList ({ timeStart, timeEnd, limit, url, method }) {
  return http.get('/async-request', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      limit,
      url: url ? encodeURIComponent(url) : '',
      method
    }
  }).then(({ data }) => {
    data.forEach(d => convertDateField(d))
    return data
  })
}

export async function getDetails (objectId) {
  return http.get(`/async-request/${objectId}`).then(({ data }) => {
    convertDateField(data)
    return data
  })
}
