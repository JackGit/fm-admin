import http from './http'

export async function getList (projectId) {
  return http.get('/page-view', {
    params: {
      projectId,
      distinctFields: 'pageUrl'
    }
  }).then(({ data }) => data)
}

export async function statsPV ({ projectId, pageUrl, timeStart, timeEnd, interval }) {
  return http.get('/stats/page/pv', {
    params: {
      projectId,
      pageUrl,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}

export async function statsTiming ({ projectId, pageUrl, timeStart, timeEnd, interval }) {
  return http.get('/stats/page/timing', {
    params: {
      projectId,
      pageUrl,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}
