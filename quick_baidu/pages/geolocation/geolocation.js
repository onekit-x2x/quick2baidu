//import geolocation from "../../onekit/api/system/geolocation.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function() {
    // geolocation.getLocation({
    // //   timeout: 50000,
    //   success: function(data) {
    //     console.log(`handling success getLocation`,data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail getLocation`, data, code)
    //   }
    // })


    ////////////
    //  swan.getLocation({
    //    type: 'wgs84',
    //    success(res) {
    //      console.log(res)
    //    }
    //  })

    //  geolocation.getLocationType({
    //    success: function (data) {
    //      console.log(`handling success: locationType`, data)
    //    },
    //    fail: function (data, code) {
    //      console.log(`handling fail`.data)
    //    }
    //  })
    swan.startLocationUpdate({
            success: res => console.log('开启小程序接收位置消息成功',res),
            fail: err => console.error('开启小程序接收位置消息失败：', err),
            complete: msg => console.log('调用开启小程序接收位置消息API完成')
        });
   /* geolocation.subscribe({
      callback: function (data) {
        console.log(data)
      },
      fail: function () {
        console.log(`handling fail`, arguments)
      }
    })*/

    // swan.startLocationUpdate({
    //   success(res) {
    //     geolocation.subscribe({
    //       callback: function (data) {
    //         console.log(data)
    //       },
    //       fail: function () {
    //         console.log(arguments)
    //       }
    //     })
    //   }
    // })

  },


})