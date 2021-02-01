import {
    OnekitPage
} from '../quickapp2baidu/index';
import quickapp2baidu from '../quickapp2baidu/index'
const router = quickapp2baidu["@system.router"]
const configuration = quickapp2baidu["@system.configuration"]
const prompt = quickapp2baidu["@system.prompt"]
const webview = quickapp2baidu["@system.webview"]
const request = quickapp2baidu["@system.request"]


global = {};
Page({
    data: {},
    onLoad() {

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
        request.onDownloadComplete({
            token: '',
            success: function(data) {
              console.log(data)
            },
            fail: function(data) {
              console.log(data)
            }
          })

        request.download({
            url: 'http://localhost/a.html',
            success: function(data) {

              console.log(data)
            },
            fail: function(data, code) {
              console.log(`handling fail, code = ${code}`)
            }
          })





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