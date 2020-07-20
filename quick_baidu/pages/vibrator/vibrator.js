import vibrator from "../../onekit/api/system/vibrator.js"
Page({
  data: {

  },

  onLoad: function() {
    swan.vibrateLong({
      success(res){
        console.log(res)
      },
      fail(res){
        console.log(res)
      }
    })
    vibrator.vibrate({
     mode: 'long',
     //mode: "short"
    })
  },


})