import record from "../../onekit/api/system/record.js"
Page({
  data: {},
  onLoad: function() {
  },
  start(){
  record.start({
      duration: 1011,
      sampleRate: 8000,
      format: 'aac',
      success: function(data) {
        console.log(`handling success`,data)
      },
      fail: function(data, code) {
        console.log(`handling fail`,data)
      }
    })
  },
 stop(){
 console.log("S")
 record.stop()
 }
})