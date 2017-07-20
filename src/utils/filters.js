import moment from 'moment'
import { HOUR } from '@/constants/time'

export function ago (date, threshold) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }

  threshold || (threshold = HOUR) // an hour

  if (Date.now() - date.getTime() < threshold) {
    return moment(date).fromNow()
  } else {
    return timeFormat(date)
  }
}

export function timeFormat (date) {
  return moment(date).format('YYYY/MM/DD HH:mm:ss')
}
