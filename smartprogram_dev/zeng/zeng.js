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


global = {};
Page({
    data: {},
    onLoad() {

        storage.set({
            key: 'A1',
            value: 'V1',
            success: function(data) {
              console.log(data)
            },
            fail: function(data, code) {
              console.log(`handling fail, code = ${code}`)
            }
          })
          storage.get({
            key: 'A1',
            success: function(data) {
              console.log(data)
            },
            fail: function(data, code) {
              console.log(`handling fail, code = ${code}`)
            }
          })

          console.log(storage.length)

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





        // request.upload({
        //     url: 'https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-navigateBack/',
        //     files: [
        //       {
        //         uri: 'internal://a.html',
        //         name: 'file1',
        //         filename: 'test.png'
        //       }
        //     ],
        //     data: [
        //       {
        //         name: 'param1',
        //         value: 'value1'
        //       }
        //     ],
        //     success: function(data) {
        //       console.log(data)
        //     },
        //     fail: function(data) {
        //       console.log(data)
        //     }
        //   })
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