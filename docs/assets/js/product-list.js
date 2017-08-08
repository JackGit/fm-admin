$(function () {
  getProductList()
  anotherAjaxRequest()
  demoErrorPromiseFunc()
})

function renderProductList (response) {
  console.log('product list rendered', response)
}

function getProductList () {
  var query = new AV.Query('Product')
  query.find().then(function (productList) {
    renderProductList(productList)
  })
}

function demoErrorPromiseFunc () {
  return new Promise(function (resolve, reject) {
    var response = '[{"id":1,"name":"product 1"},{"id":2,"name":"product 2"}'
    setTimeout(function () {
      resolve(JSON.parse(response)) // SyntaxError: Unexpected end of JSON input
    }, 500)
  })
}

function anotherAjaxRequest () {
  var query = new AV.Query('TestObject')
  return query.get('123')
}
