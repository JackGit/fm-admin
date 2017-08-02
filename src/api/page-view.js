import http from './http'

export async function getList () {
  return http.get('/page-view', {
    params: {
      distinctFields: 'pageUrl'
    }
  }).then(({ data }) => data)
}

export async function statsPV ({ pageUrl, timeStart, timeEnd, interval }) {
  return http.get('/stats/page/pv', {
    params: {
      pageUrl,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}

export async function statsTiming ({ pageUrl, timeStart, timeEnd, interval }) {
  return http.get('/stats/page/timing', {
    params: {
      pageUrl,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}
