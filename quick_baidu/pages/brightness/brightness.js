import brightness from "../../onekit/api/system/brightness.js"
Page({
  data: {},

  onLoad: function() {
    brightness.setValue({
      value: 0,
      success: function() {
        console.log('set handling success')
      },
      fail: function() {
        console.log(`set handling fail`, arguments)
      }
    })
    
    /////////////////////////
    // brightness.getValue({
    //   success: function(data) {
    //     console.log(`get handling success`, data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`get handling fail`, data)
    //   }
    // })
    ////////////
    // brightness.setKeepScreenOn({
    //   keepScreenOn: true,
    //   success: function (data) {
    //     console.log('keepon handling success')
    //   },
    //   fail: function (data, code) {
    //     console.log(`keepon handling fail`, data)
    //   }
    // })
  },
})