import network from "../../onekit/api/system/network.js"
Page({
  data: {
  },
  onLoad: function () {
    network.getType({
      success: function (data) {
        console.log(`handling success getType`, data)
      },
      fail: function (data, code) {
        console.log(`handling fail getType`, data)
      }
    })

    network.subscribe({
    //   callback: function (data) {
    //     console.log('handling callback subscribe', data)
    //   },
    //   fail: function (data, code) {
    //     console.log(`handling fail subscribe`, data)
    //   }
    })

    network.unsubscribe()
    //     network.getType({
    //         success: function(data) {
    //             console.log(`handling success:`, data)
    //          },
    //         fail: function (data) {
    //             console.log(`handling fail unsubscribe`, data)
    //          }
    //  })
  },
})