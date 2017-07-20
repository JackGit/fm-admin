export function toUTC (date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

export function toUTCDate (date) {
  return new Date(toUTC(date))
}
