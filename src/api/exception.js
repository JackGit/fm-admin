import http from './http'
import { convertDateField } from '@/utils/date'

export async function getDetails (objectId) {
  return http.get(`/exceptions/${objectId}`).then(({ data }) => {
    convertDateField(data)
    return data
  })
}

export async function getList ({ timeStart, timeEnd, limit }) {
  return http.get('/exceptions', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      limit
    }
  }).then(({ data }) => {
    data.forEach(d => convertDateField(d))
    return data
  })
}
