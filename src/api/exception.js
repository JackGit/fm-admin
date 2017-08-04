import http from './http'
import { convertDateField } from '@/utils/date'

export async function getDetails (objectId) {
  return http.get(`/exceptions/${objectId}`).then(({ data }) => {
    convertDateField(data)
    return data
  })
}

export async function getList ({ projectId, timeStart, timeEnd, limit }) {
  return http.get('/exceptions', {
    params: {
      projectId,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      limit
    }
  }).then(({ data }) => {
    data.forEach(d => convertDateField(d))
    return data
  })
}

export async function statsTypes ({ projectId, timeStart, timeEnd }) {
  return http.get('/stats/exception/types', {
    params: {
      projectId,
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}

export async function statsFrequency ({ projectId, type, timeStart, timeEnd, interval }) {
  return http.get('/stats/exception/frequency', {
    params: {
      projectId,
      type,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}
