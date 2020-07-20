import request from "../../onekit/api/system/request.js";
import zip from "../../onekit/api/system/zip.js";
import file from "../../onekit/api/system/file.js";
// pages/zip/zip.js
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

    /*
    var path = tt.env.USER_DATA_PATH;
    var fileManager = tt.getFileSystemManager();

    tt.chooseMessageFile({
      conunt : 1,
      success : function(res){
        console.log(res);
        console.log(path);
        fileManager.unzip({
          zipFilePath: res.tempFiles[0].path,
          // zipFilePath: `${path}/1.zip`,

          targetPath: path,
          success: function (res) {
            console.log("success", res);

            //保存文件
            fileManager.saveFile({
              tempFilePath: `${path}/1.txt`,
              // filePath : '/zip',
              success : function(res){
                console.log(res);
              },
              fail : function(res){
                console.log(res);
              }
            });

            //读取文件
            // fileManager.readFile({
            //   filePath : `${path}/1.txt`,
            //   success : function(res){
            //     console.log("success", res.data.toString);
            //     let unit8Arr = new Uint8Array(res.data);
            //     console.log("ddd", String.fromCharCode.apply(null, unit8Arr));
            //   },
            //   fail : function(res){
            //     console.log("fail",res);
            //   }
            // });

          },
          fail: function (res) {
            console.log("fail", res);
          }
        })

      }
    })

*/

    // this.decompress();

  },
  decompress() {
    const self = this;
    request.download({
      url: 'https://www.onekitwx.com/quick2weixin/1.zip',
      success: function (data) {
        console.log(`handling success${data.token}`)

        request.onDownloadComplete({
          token: data.token,
          success: function (data) {
            console.log(`download success${data.uri}`)

            zip.decompress({
              srcUri: data.uri,
              dstUri: 'internal://files/',
              success: function (res) {
                console.info(res);

                file.readText({
                  uri: 'internal://files/1.txt',
                  success: function (res) {
                    console.info("read success", res);
                  },
                  fail: function (res) {
                    console.info("fail", res);
                  }
                });
                //   prompt.showToast({
                //         message: `handling success`
                // })

              },
              fail: function (data, code) {
                console.log(`handling fail`, data, code)
                // prompt.showToast({
                //   message: `handling fail, ${code}: ${data}`
                // })
              }
            })

          },
          fail: function (data, code) {
            console.log(`handling fail, code = ${code}`)
          }
        })


      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })


  }
})