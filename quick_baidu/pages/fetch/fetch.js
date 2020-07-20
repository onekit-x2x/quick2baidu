
import fetch from "../../onekit/api/system/fetch.js"
Page({
    data: {

    },
    onLoad: function () {
  fetch.fetch({
  url: 'http://www.example.com',
  responseType: 'text',
  success: function(response) {
    console.log(response)
//     console.log(
//     `the data of the response: ${response.data}`
//     )
//     console.log(
//    `the headers of the response: ${JSON.stringify(response.headers)}`
//     )
  },
  fail: function() {
    console.log(`handling fail,`,arguments)
  }
})

    },
   
});