$(function () {
  initAV()
  // generate a async error
  setTimeout(function () {
    doSomething()
  }, 100)
})

function doSomething (data) {
  return data.map(function (item) {
    return item.text
  })
}

function getUserInfo () {
  // Cannot read property 'user' of null
  return localStorage.getItem('data').user
}

function initAV () {
  var APP_ID = 'M0ENPB7BAvMq5ijgesXnfmgW-gzGzoHsz'
  var APP_KEY = 'iia9vFCO7048zIR0HBhlU6t2'

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  })
}
