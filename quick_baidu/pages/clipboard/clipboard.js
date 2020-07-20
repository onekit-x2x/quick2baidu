import clipboard from "../../onekit/api/system/clipboard.js"
Page({
  data: {},
  onLoad: function () {
    clipboard.set({
      text: 'sssssssssssssssssssss',
      success: function (data) {
        console.log(`handling success`, data)
      },
      fail: function (data) {
        swan.showToast({
                    title: '获取剪贴板内容失败',
                    icon: 'none'
        });//////////*****
        console.log(`handling fail`, data)
      },

    })
    clipboard.get({
      success: function (data) {
        console.log(`handling success get`, data)
      },
      fail: function (data, code) {
        console.log(`handling fail`, data)
      }
    })
  },
})