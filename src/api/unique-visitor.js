import http from './http'

export async function statsPV ({ timeStart, timeEnd, interval }) {
  return http.get('/stats/site/pv', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}

export async function statsUV ({ timeStart, timeEnd, interval }) {
  return http.get('/stats/site/uv', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime(),
      interval
    }
  }).then(({ data }) => data)
}

export async function statsBrowser ({ timeStart, timeEnd }) {
  return http.get('/stats/site/browsers', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}

export async function statsOS ({ timeStart, timeEnd }) {
  return http.get('/stats/site/os', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}

export async function statsNetworkOperator ({ timeStart, timeEnd }) {
  return http.get('/stats/site/network-operators', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}

export async function statsLocation ({ timeStart, timeEnd }) {
  return http.get('/stats/site/locations', {
    params: {
      from: timeStart.getTime(),
      end: timeEnd.getTime()
    }
  }).then(({ data }) => data)
}
