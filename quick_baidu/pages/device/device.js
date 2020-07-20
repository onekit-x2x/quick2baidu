import device from "../../onekit/api/system/device.js"
Page({
  data: {},
  onReady : function (options) {
    device.getInfo({
      success: function (ret) {
        console.log(`handling succes`, ret)
      }
    })
    swan.getSystemInfo({
      success(res) {
        console.log(res)
      }
    })
    device.getId({})
    device.getDeviceId({})
  }
})