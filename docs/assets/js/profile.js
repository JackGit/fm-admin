$(function () {
  getUserInfo()
  errorAjaxDemoRequest()
})

function errorAjaxDemoRequest () {
  var query = new AV.Query('NotExistClass')
  return query.get('123')
}
