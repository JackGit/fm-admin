import http from './http'
import { convertDateField } from '@/utils/date'

export async function getList ({ timeStart, timeEnd, pageUrl, limit }) {
  return http.get('/page-view', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      pageUrl: pageUrl ? encodeURIComponent(pageUrl) : '',
      limit
    }
  }).then(({ data }) => {
    data.forEach(d => convertDateField(d))
    return data
  })
}

export async function getDetails (objectId) {
  return http.get(`/page-view/${objectId}`).then(({ data }) => {
    convertDateField(data)
    return data
  })
}
