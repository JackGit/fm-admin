import http from './http'

export async function statsPV ({ projectId, timeStart, timeEnd, interval }) {
  return http.get('/stats/site/pv', {
    params: {
      projectId,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}

export async function statsUV ({ projectId, timeStart, timeEnd, interval }) {
  return http.get('/stats/site/uv', {
    params: {
      projectId,
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}

export async function statsBrowser ({ projectId, timeStart, timeEnd }) {
  return http.get('/stats/site/browsers', {
    params: {
      projectId,
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}

export async function statsOS ({ projectId, timeStart, timeEnd }) {
  return http.get('/stats/site/os', {
    params: {
      projectId,
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}

export async function statsNetworkOperator ({ projectId, timeStart, timeEnd }) {
  return http.get('/stats/site/network-operators', {
    params: {
      projectId,
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}

export async function statsLocation ({ projectId, timeStart, timeEnd }) {
  return http.get('/stats/site/locations', {
    params: {
      projectId,
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}
