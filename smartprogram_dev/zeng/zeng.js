import {
    OnekitPage
} from '../quickapp2baidu/index';
import quickapp2baidu from '../quickapp2baidu/index'
const router = quickapp2baidu["@system.router"]
const configuration = quickapp2baidu["@system.configuration"]
const prompt = quickapp2baidu["@system.prompt"]
const webview = quickapp2baidu["@system.webview"]
const request = quickapp2baidu["@system.request"]
const fetch = quickapp2baidu["@system.fetch"]
const websocketfactory = quickapp2baidu["@system.websocketfactory"]
const storage = quickapp2baidu["@system.storage"]
const file = quickapp2baidu["@system.file"]
const media  = quickapp2baidu["@system.media"]
const vibrator   = quickapp2baidu["@system.vibrator"]
const barcode    = quickapp2baidu["@system.barcode"]
const sensor     = quickapp2baidu["@system.sensor"]
const clipboard     = quickapp2baidu["@system.clipboard"]
const geolocation      = quickapp2baidu["@system.geolocation"]
const calendar      = quickapp2baidu["@system.calendar"]
const network      = quickapp2baidu["@system.network"]
const device      = quickapp2baidu["@system.device"]
const brightness      = quickapp2baidu["@system.brightness"]
const battery      = quickapp2baidu["@system.battery"]
const record = quickapp2baidu["@system.record"]
const image = quickapp2baidu["@system.image"]
const Video  = quickapp2baidu["@hap.io.Video"]
const audio  = quickapp2baidu["@system.audio"]



global = {};
Page({
    data: {},
    onLoad() {

        audio.src = 'https://b.bdstatic.com/miniapp/images/yanyuan.mp3'
        audio.autoplay  = true
        console.log(audio.autoplay)
        audio.play()
        setTimeout(() => {
            audio.stop()
        }, 5000);
        audio.getPlayState({
            success: function(data) {
              console.log(data
              )
            },
            fail: function(data, code) {
              console.log('handling fail, code=' + code)
            }
          })
        //
        // var mVideoTask = new Video({

        //   })
        //   mVideoTask.compressVideo({
        //     success: function(data) {
        //       console.log(
        //         data

        //       )
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })

        //   media.pickImage({
        //     success: function(data) {
        //         image.compressImage({
        //             uri: data.uri,
        //             quality: 80,
        //             ratio: 2, // 变为原图的1/2大小
        //             format: 'JPEG',
        //             success: function(data) {
        //               console.log(data)
        //             },
        //             fail: function(data, code) {
        //               console.log(`handling fail, code = ${code}`)
        //             }
        //           })
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })

        // media.previewImage({
        //     current: 0,
        //     uris: [
        //       'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
        //     ],
        //     success: function(data) {
        //       console.log('preview success',data)
        //     },
        //     fail: function(data) {
        //       console.log(data)
        //     }
        //   })
        // media.pickImage({
        //     success: data => {
        //       const imagePath = data.uri
        //       if (imagePath && imagePath.length > 0) {
        //         media.saveToPhotosAlbum({
        //           uri: imagePath,
        //           folderName: 'custom-folder',
        //           success: function(data) {
        //             console.log(data)
        //           },
        //           fail: function(data, code) {
        //             console.log(`保存图片失败, 错误码：${code}`)
        //           }
        //         })
        //       }
        //     },
        //     fail: function(data, code) {
        //       console.log(`选择图片失败, 错误码：${code}`)
        //     }
        //   })
        // media.pickFile({
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data) {
        //       console.log(data)
        //     }
        //   })
        // media.pickVideos({
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data) {
        //       console.log(data)
        //     }
        //   })
        // media.pickVideo({
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // media.pickImages({
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })

        // media.takeVideo({
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })

    //     const recorderManager = swan.getRecorderManager()
    // recorderManager.start({})
    // recorderManager.stop()
        // record.start({
        //     duration: 10000,
        //     sampleRate: 8000,
        //     numberOfChannels: 1,
        //     encodeBitRate: 16000,
        //     format: 'aac',
        //     success: function(data) {
        //       console.log(`handling success: ${data.uri}`)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        //   record.stop()
        // battery.getStatus({
        //     success: function(data) {
        //       console.log(`handling success: ${data.level}`)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })

        // brightness.setValue({
        //     value: 255,
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data) {
        //       console.log(data)
        //     }
        //   })
        //   brightness.getMode({
        //     success: function(data) {
        //       console.log(`handling success, mode = ${data.mode}`)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // brightness.getValue({
        //     success: function(data) {
        //       console.log(`handling success, value = ${data.value}`)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // device.getInfo({
        //     success: function(ret) {
        //       console.log(`handling success， brand = ${ret.brand}`)
        //     }
        //   })
        // network.getType({
        //     success: function(data) {
        //       console.log(data)
        //     }
        //   })
        //   swan.getNetworkType({
        //     success: res => {
        //         console.log(res)
        //     }
        // });
        // swan.onNetworkStatusChange(res => {
        //    console.log(res)
        // });
        //   network.subscribe({
        //     callback: function(data) {
        //       console.log(data)
        //     }
        //   })
        // swan.addEventOnCalendar({
        //     title: '智能小程序日历功能测试',
        //     // 2019-12-28 14:31:23
        //     startTime: 1577514683000,
        //     // 2019-12-30 14:31:23
        //     endTime: 1577687483000,

        //     location: '线上',
        //     remindMinutesBefore: 10,
        //     success: res => {
        //         console.log('日程新建成功', res);


        //     },
        //     fail: err => {
        //         console.log('日程新建失败', err);
        //     }
        // });
        // console.log(new Date().getTime())
        // calendar.insert({
        //     title: '事件Ａ',
        //     startDate: 1577514683000,
        //     endDate: 1577687483000,
        //     remindMinutes: [5, 15, 30],
        //     success: function(data) {
        //       console.log('handling success')
        //     }
        //   })
    //     geolocation.subscribe({
    //     callback: function(data) {
    //       console.log(
    //         data.latitude
    //       )
    //     },
    //     fail: function(data, code) {
    //       console.log(`handling fail, code = ${code}`)
    //     }
    //   })
    //   geolocation.unsubscribe()
        // geolocation.getLocationType({
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // geolocation.getLocation({
        //     success: function(data) {
        //       console.log(
        //         data
        //       )
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        //   geolocation.openLocation({
        //     latitude: 22.553594050274,
        //     longitude: 114.0586290118,
        //     success: function() {
        //       console.log(`open location success`)
        //     },
        //     fail: function(data, code) {
        //       console.log(`open location fail, code = ${code}`)
        //     },
        //     complete: function() {
        //       console.log(`open location complete`)
        //     }
        //   })
        //   geolocation.chooseLocation({
        //     success: function(data) {
        //       console.log(
        //        data
        //       )
        //     },
        //     fail: function(data, code) {
        //       console.log(`choose location fail, code = ${code}`)
        //     },
        //     complete: function() {
        //       console.log(`choose location complete`)
        //     }
        //   })
        // clipboard.set({
        //     text: 'text'
        //   })
        //   clipboard.get({
        //     success: function(data) {
        //       console.log(`handling success: ${data.text}`)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // sensor.subscribeAccelerometer({
        //     callback: function(ret) {
        //       console.log(ret)
        //     }
        //   })
        //   sensor.unsubscribeAccelerometer()
        //   sensor.subscribeCompass({
        //     callback: function(ret) {
        //       console.log(`handling callback, direction = ${ret.direction}`)
        //     }
        //   })
        //   sensor.unsubscribeCompass()
        // sensor.subscribeStepCounter({
        //     callback: function(ret) {
        //       console.log(`handling callback, steps = ${ret.steps}`)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // barcode.scan({
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // vibrator.vibrate({
        //     mode: 'long'
        //   })
        // file.move({
        //     srcUri: 'internal://b.pdf',
        //     dstUri: 'internal://user',
        //     success: function(uri) {
        //       console.log(uri)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // console.log(swan.env.USER_DATA_PATH)
        //  const fileSystemManager = swan.getFileSystemManager()
        //  fileSystemManager.readdir({
        //     dirPath:  'bdfile://usr/',
        //     success:res=>{
        //         console.log(res)
        //     },fail:res=>{
        //         console.log(res)
        //     }
        //  })
        // //   fileSystemManager.unlink({
        //     filePath: 'bdfile://usr/SVN.pdf',
        //     success:res=>{
        //         console.log(res)
        //     },fail:res=>{
        //         console.log(res)
        //     }
        //   })
        // file.copy({
        //     srcUri: 'internal://user/d.pdf',
        //     dstUri: 'internal://file',
        //     success: function(uri) {
        //       console.log(uri)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // file.list({
        //     uri: 'internal://user',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })

        // fileSystemManager.readdir({
        //     dirPath: `${swan.env.USER_DATA_PATH}/user/`,

        //     success:res=>{
        //         console.log(res)
        //     }
        // })
        // file.delete({
        //     uri: 'internal://c.pdf',
        //     success: function(data) {
        //       console.log(data)

        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // file.delete({
        //     uri: 'internal://user/e.txt',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
//         const buffer = new ArrayBuffer(8);

// console.log(buffer.byteLength);
//         file.writeArrayBuffer({
//             uri: 'internal://user/e.txt',
//             buffer: buffer,
//             success: function(data) {
//               console.log(data)
//             },
//             fail: function(data) {
//               console.log(data)
//             }
//           })
//           file.readArrayBuffer({
//             uri: 'internal://user/e.txt',
//             position: 100,
//             length: 100,
//             success: function(data) {
//               console.log(data.buffer)
//             },
//             fail: function(data, code) {
//               console.log(`handling fail, code = ${code}`)
//             }
//           })

        // const fileSystemManager = swan.getFileSystemManager()
        // fileSystemManager.mkdir({
        //     dirPath: `${swan.env.USER_DATA_PATH}/b.pdf`,
        //     recursive:true,
        //     success:res=>{
        //         console.log(res)
        //     }
        // })
        // fileSystemManager.writeFile({
        //     filePath: `${swan.env.USER_DATA_PATH}/c.pdf`,
        //     data: 'writeFile',
        //     success: res => {
        //         console.log('writeFile success', res);
        //     },
        //     fail: err => {
        //         swan.showToast({
        //             title: JSON.stringify(err),
        //             icon: 'none'
        //         });
        //         console.log('writeFile fail', err);
        //     }
        // });
        // media.pickImage({
        //     success: function(data) {
        //         request.upload({
        //             url: 'https://www.onekit.cn',
        //             files: [
        //               {
        //                 uri: data.uri,
        //                 name: 'file1',
        //                 filename: 'test.png'
        //               }
        //             ],
        //             data: [
        //               {
        //                 name: 'param1',
        //                 value: 'value1'
        //               }
        //             ],
        //             success: function(data) {
        //               console.log(data)
        //             },
        //             fail: function(data) {
        //               console.log(data)
        //             }
        //           })
        //       console.log(`handling success: ${data.uri}`)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // console.log(swan.env.USER_DATA_PATH)


        // file.mkdir({
        //     uri: 'internal://user/',
        //     success: function(data) {
        //       console.log(data,'sssssssssssssssss')
        //     },
        //     fail: function(data) {
        //       console.log(data)
        //     }
        //   })
        //   file.writeText({
        //     uri: 'internal://user/d.pdf',
        //     text: 'test',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        //   file.readText({
        //     uri: 'internal://user/d.pdf',
        //     success: function(data) {
        //       console.log('text: ' + data.text)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        //   file.access({
        //     uri: 'internal://files/dir',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data) {
        //       console.log(data)
        //     }
        //   })


        // storage.set({
        //     key: 'A1',
        //     value: 'V1',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        //   storage.get({
        //     key: 'A1',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })

        //   console.log(storage.length)

        //   storage.key({
        //     index: 2,
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        //   storage.delete({
        //     key: 'A1',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        //   storage.clear({
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
    //    const  ws = websocketfactory.create({
    //         url: 'wss://example.qq.com',
    //         header: {
    //           'content-type': 'application/json'
    //         },
    //         protocols: ['protocol']
    //       })
    //       ws.onopen = function(data) {
    //         console.log(data)
    //       }
    //       ws.send({
    //         data: 'send message',
    //         success: function(data) {
    //           console.log(data)
    //         },
    //         fail: function(data) {
    //           console.log(data)
    //         }
    //       })
        // fetch.fetch({
        //     url: 'https://www.onekit.cn',
        //     responseType: 'text',
        //     success: function(response) {
        //       console.log(response)

        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, errMsg = ${data}`)
        //       console.log(`handling fail, errCode = ${code}`)
        //     }
        //   })


        // const s = swan.downloadFile({
        //     url: 'http://localhost/SVN.pdf',
        //     success:res=>{
        //         console.log(res)
        //     }

        // });
        // console.log(s)
        // s.onProgressUpdate(res=>{
        //     console.log(res)
        // })


        // request.download({
        //     url: 'http://localhost/SVN.pdf',
        //     success: function(data) {

        //       console.log(data)
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        //   request.onDownloadComplete({
        //     token: '',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data) {
        //       console.log(data)
        //     }
        //   })
        // swan.chooseImage({
        //     success: res => {
        //         swan.uploadFile({
        //             // 仅为示例，并非真实的接口地址
        //             url: 'https://www.onekit.cn',
        //             filePath: res.tempFilePaths[0],
        //             name: 'myfile',
        //             header: {
        //                 'content-type': 'multipart/form-data'
        //             },
        //             formData: {
        //                 'user': 'test'
        //             },
        //             success: res => {

        //                 console.log('uploadFile success', res);

        //             },
        //             fail: err => {
        //                 console.log('uploadFile fail', err);

        //             }
        //         });
        //         console.log(res)
        //     }
        // });







        // router.back({
        //     path: '/wang/wang'
        //   })
        // const locale = configuration.getLocale()
        // console.log(locale)
        // prompt.showToast({
        //     message: 'message'
        // })
        // prompt.showDialog({
        //     title: 'title',
        //     message: 'message',
        //     buttons: [
        //       {
        //         text: 'btn',
        //         color: '#33dd44'
        //       }
        //     ],
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     cancel: function() {
        //       console.log('handling cancel')
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // prompt.showContextMenu({
        //     itemList: ['item1', 'item2'],
        //     itemColor: '#ff33ff',
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     cancel: function() {
        //       console.log('handling cancel')
        //     },
        //     fail: function(data, code) {
        //       console.log(`handling fail, code = ${code}`)
        //     }
        //   })
        // webview.loadUrl({
        //     url: 'http://www.example.com',
        //     allowthirdpartycookies: true
        //   })
    }
});