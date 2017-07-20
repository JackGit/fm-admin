export function groupByTimeInterval (collection, timeKey, timeStart, timeEnd, interval) {
  timeStart = +timeStart
  timeEnd = +timeEnd

  const n = Math.ceil((timeEnd - timeStart) / interval)
  const group = []

  // can't use group.fill([]), it will share the same array object for each element
  for (let i = 0; i < n; i++) {
    group.push([])
  }

  if (collection.length === 0) {
    return group
  }

  function subGroupIndex (time) {
    for (let i = 0; i < n; i++) {
      let start = timeStart + interval * i
      let end = start + interval
      if (time >= start && time < end) {
        return i
      }
    }
    return -1
  }

  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    const time = item[timeKey]
    const index = subGroupIndex(time)

    if (index !== -1) {
      group[index].push(item)
    }
  }

  return group
}
