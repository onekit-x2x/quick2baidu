
import barcode from "../../onekit/api/system/barcode"

Page({

  onLoad: function (options) {
    barcode.scan({
      success: function(data) {
        console.log(`handling success: ${data.result}`)
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`)
      },
      complete: function () {
        console.log('complete')     
      }
    })
  },

})