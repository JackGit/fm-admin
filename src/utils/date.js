export function toUTC (date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

export function toUTCDate (date) {
  return new Date(toUTC(date))
}

export function convertDateField (object) {
  ['createdAt', 'updatedAt', 'startAt', 'endAt'].forEach(key => {
    if (object[key]) {
      object[key] = new Date(object[key])
    }
  })
}
