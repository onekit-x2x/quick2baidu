import image from "../../onekit/api/system/image.js";
// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that = this;
    image.getImageInfo({
      uri: "../images/img1.png",
      success: function (data) {
        console.log(data);
      },
      fail: function (erromsg, errocode) {
        console.log(`### image.getInfo ### ${errocode}: ${erromsg}`)
        console.log(errocode, erromsg);
        // prompt.showToast({
        //   message: `${errocode}: ${erromsg}`
        // })
      },
      complete: function () {
        console.log("complete");
        // prompt.showToast({
        //   message: `complete`
        // })
      }
    })

      //取图片的exif信息
      image.getExifAttributes({
        uri: "/images/img1.png",
        success: (data) => {
          this.attributes = JSON.stringify(data.attributes)
          console.log(data);
          // prompt.showToast({
          //   message: `handling success`
          // })
        },
        fail: function (data, code) {
          console.log(code, data);
          // prompt.showToast({
          //   message: `handling fail, code = ${code}`
          // })
        }
      })
    
    image.compressImage({
      uri: "/images/img1.png",
      quality: 50,
      ratio: 5,
      format: 'WEBP',
      success: function (data) {
        console.log(data);
      },
      fail: function (erromsg, errocode) {
        console.info(`### image.compress ### ${errocode}: ${erromsg}`)
        // prompt.showToast({
        //   message: `${errocode}: ${erromsg}`
        // })
      },
      complete: function () {
        console.log("complete");
        // prompt.showToast({
        //   message: `complete`
        // })
      }
    })


    image.applyOperations({
      uri: "/images/samrtapp.png",
      operations: [
        {
          action: 'crop',
          x: 10,
          y: 10,
          width: 100,
          height: 20
        },
        {
          action: 'scale',
          scaleX: 2,
          scaleY: 2
        },
        {
          action: 'rotate',
          degree: 30
        },
      ],
      quality: 50,
      format: 'WEBP',
      success: function (res) {
        console.log(res);
        that.setData({
          imgSrc : res.uri
        });
      },
      fail: function (erromsg, errocode) {
        console.info(`### image.applyOperations ### ${errocode}: ${erromsg}`)
        // prompt.showToast({
        //   message: `${errocode}: ${erromsg}`
        // })
      },
      complete: function () {
        console.log("complete");
        // prompt.showToast({
        //   message: `complete`
        // })
      }
    })


    image.editImage({
      uri: "/images/img1.png",
      aspectRatioX: 16,
      aspectRatioY: 9,
      success: function (data) {
        console.log("out success",data);
        that.setData({
          imgSrc : data.uri
        });
      },
      fail: function (erromsg, errocode) {
        console.info(`### image.edit ### ${errocode}: ${erromsg}`)
        // prompt.showToast({
        //   message: `${errocode}: ${erromsg}`
        // })
      },
      complete: function () {
        console.log("out complete");
        // prompt.showToast({
        //   message: `complete`
        // })
      }
    })


  },

 
})