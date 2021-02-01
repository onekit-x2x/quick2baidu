import {
  OnekitPage,
  swan
} from '../quickapp2baidu/index'

global = {}

// progress
// const app = getApp()
// OnekitPage({
//     data:{},
//     activeend(e){
//         console.log(e)
//     },
//     onLoad:function(){
//         console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
//         console.log('https://mp.baidu.qq.com/debug/wxadoc/dev/devtools/devtools.html')
//     }
// })


// button
// const types = [
//     'default',
//     'primary',
//     'warn'
// ];
// const pageObject = {
//     data:{
//         defaultSize:'default',
//         primarySize:'default',
//         warnSize:'default',
//         disabled:false,
//         plain:false,
//         loading:false
//     },
//     onShareAppMessage:function(){
//         return {
//         title:'button',
//         path:'page/component/pages/button/button'
//     };
//     },
//     setDisabled:function(){
//         this.setData({
//         disabled:!this.data.disabled
//     });
//     },
//     setPlain:function(){
//         this.setData({
//         plain:!this.data.plain
//     });
//     },
//     setLoading:function(){
//         this.setData({
//         loading:!this.data.loading
//     });
//     },
//     handleContact:function(e){
//         console.log(e.detail);
//     },
//     handleGetPhoneNumber:function(e){
//         console.log(e.detail);
//     },
//     handleGetUserInfo:function(e){
//         console.log(e.detail);
//     },
//     handleOpenSetting:function(e){
//         console.log(e.detail.authSetting);
//     },
//     handleGetUserInfo:function(e){
//         console.log(e.detail.userInfo);
//     }
// };
// for(var i = 0;(i < types.length);++i){
//     (function(type){
//         pageObject[type] = function(){
//         const key = (type + 'Size');
//         const changedData = {};
//         changedData[key] = (this.data[key] === 'default')?'mini':'default';
//         this.setData(changedData);
//     };
//     })(types[i]);
// };
// OnekitPage(pageObject);


// input
// OnekitPage({
//     data:{
//         focus:false,
//         inputValue:''
//     },
//     bindKeyInput:function(e){
//         this.setData({
//             inputValue:e.detail.value
//         })
//     },
//     bindReplaceInput:function(e){
//         var value = e.detail.value
//         var pos = e.detail.cursor
//         var left
//         if((pos !== -1)){
//         left = e.detail.value.slice(0,pos);
//         pos = left.replace(/11/,'2').length;
//     }
//         return {
//         value:value.replace(/11/,'2'),
//         cursor:pos
//     }
//     },
//     bindHideKeyboard:function(e){
//         if((e.detail.value === '123')){
//         swan.hideKeyboard();
//     }
//     }
// })

// picker
// OnekitPage({
//     data: {
//       array: ['美国', '中国', '巴西', '日本'],
//       index: 0,
//     },
//     bindPickerChange: function(e) {
//       console.log('picker发送选择改变，携带值为', e.detail.value)
//       this.setData({
//         index: e.detail.value
//       })
//     }
//   })
// OnekitPage({
//     data:{
//         array:[
//             '美国',
//             '中国',
//             '巴西',
//             '日本'
//         ],
//         objectArray:[
//             {
//                 id:0,
//                 name:'美国'
//             },
//             {
//                 id:1,
//                 name:'中国'
//             },
//             {
//                 id:2,
//                 name:'巴西'
//             },
//             {
//                 id:3,
//                 name:'日本'
//             }
//         ],
//         index:0,
//         multiArray:[
//             [
//                 '无脊柱动物',
//                 '脊柱动物'
//             ],
//             [
//                 '扁性动物',
//                 '线形动物',
//                 '环节动物',
//                 '软体动物',
//                 '节肢动物'
//             ],
//             [
//                 '猪肉绦虫',
//                 '吸血虫'
//             ]
//         ],
//         objectMultiArray:[
//             [
//                 {
//                     id:0,
//                     name:'无脊柱动物'
//                 },
//                 {
//                     id:1,
//                     name:'脊柱动物'
//                 }
//             ],
//             [
//                 {
//                     id:0,
//                     name:'扁性动物'
//                 },
//                 {
//                     id:1,
//                     name:'线形动物'
//                 },
//                 {
//                     id:2,
//                     name:'环节动物'
//                 },
//                 {
//                     id:3,
//                     name:'软体动物'
//                 },
//                 {
//                     id:3,
//                     name:'节肢动物'
//                 }
//             ],
//             [
//                 {
//                     id:0,
//                     name:'猪肉绦虫'
//                 },
//                 {
//                     id:1,
//                     name:'吸血虫'
//                 }
//             ]
//         ],
//         multiIndex:[
//             0,
//             0,
//             0
//         ],
//         date:'2016-09-01',
//         time:'12:01',
//         region:[
//             '广东省',
//             '广州市',
//             '海珠区'
//         ],
//         customItem:'全部'
//     },
//     bindPickerChange:function(e){
//         console.log('picker发送选择改变，携带值为',e.detail.value)
//         this.setData({
//         index:e.detail.value
//     })
//     },
//     bindMultiPickerChange:function(e){
//         console.log('picker发送选择改变，携带值为',e.detail.value)
//         this.setData({
//         multiIndex:e.detail.value
//     })
//     },
//     bindMultiPickerColumnChange:function(e){
//         console.log('修改的列为',e.detail.column,'，值为',e.detail.value)
//         var data = {
//         multiArray:this.data.multiArray,
//         multiIndex:this.data.multiIndex
//     }
//         data.multiIndex[e.detail.column] = e.detail.value
//             switch(e.detail.column){
//         case 0:
//             switch(data.multiIndex[0]){
//     case 0:
//         data.multiArray[1] = [
//     '扁性动物',
//     '线形动物',
//     '环节动物',
//     '软体动物',
//     '节肢动物'
// ];
//         data.multiArray[2] = [
//     '猪肉绦虫',
//     '吸血虫'
// ];
//         break;
//     case 1:
//         data.multiArray[1] = [
//     '鱼',
//     '两栖动物',
//     '爬行动物'
// ];
//         data.multiArray[2] = [
//     '鲫鱼',
//     '带鱼'
// ];
//         break;
// };
//             data.multiIndex[1] = 0;
//             data.multiIndex[2] = 0;
//             break;
//         case 1:
//             switch(data.multiIndex[0]){
//     case 0:
//         switch(data.multiIndex[1]){
//     case 0:
//         data.multiArray[2] = [
//     '猪肉绦虫',
//     '吸血虫'
// ];
//         break;
//     case 1:
//         data.multiArray[2] = [
//     '蛔虫'
// ];
//         break;
//     case 2:
//         data.multiArray[2] = [
//     '蚂蚁',
//     '蚂蟥'
// ];
//         break;
//     case 3:
//         data.multiArray[2] = [
//     '河蚌',
//     '蜗牛',
//     '蛞蝓'
// ];
//         break;
//     case 4:
//         data.multiArray[2] = [
//     '昆虫',
//     '甲壳动物',
//     '蛛形动物',
//     '多足动物'
// ];
//         break;
// };
//         break;
//     case 1:
//         switch(data.multiIndex[1]){
//     case 0:
//         data.multiArray[2] = [
//     '鲫鱼',
//     '带鱼'
// ];
//         break;
//     case 1:
//         data.multiArray[2] = [
//     '青蛙',
//     '娃娃鱼'
// ];
//         break;
//     case 2:
//         data.multiArray[2] = [
//     '蜥蜴',
//     '龟',
//     '壁虎'
// ];
//         break;
// };
//         break;
// };
//             data.multiIndex[2] = 0;
//             break;
//     }
//         console.log(data.multiIndex)
//         this.setData(data)
//     },
//     bindDateChange:function(e){
//         console.log('picker发送选择改变，携带值为',e.detail.value)
//         this.setData({
//         date:e.detail.value
//     })
//     },
//     bindTimeChange:function(e){
//         console.log('picker发送选择改变，携带值为',e.detail.value)
//         this.setData({
//         time:e.detail.value
//     })
//     },
//     bindRegionChange:function(e){
//         console.log('picker发送选择改变，携带值为',e.detail.value)
//         this.setData({
//         region:e.detail.value
//     })
//     }
// })

// picker-view
// const date = new Date()
// const years = [
// ]
// const months = [
// ]
// const days = [
// ]
// for(var i = 1990;i <= date.getFullYear();i++){
//     years.push(i);
// }
// for(var i = 1;i <= 12;i++){
//     months.push(i);
// }
// for(var i = 1;i <= 31;i++){
//     days.push(i);
// }
// OnekitPage({
//     onShareAppMessage:function(){
//         return {
//         title:'picker-view',
//         path:'page/component/pages/picker-view/picker-view'
//     }
//     },
//     data:{
//         years:years,
//         year:date.getFullYear(),
//         months:months,
//         month:2,
//         days:days,
//         day:2,
//         value:[
//             9999,
//             1,
//             1
//         ],
//         isDaytime:true
//     },
//     bindChange:function(e){
//         console.log('change',e)
//         const val = e.detail.value
//         this.setData({
//         year:this.data.years[val[0]],
//         month:this.data.months[val[1]],
//         day:this.data.days[val[2]],
//         isDaytime:!val[3]
//     })
//     },
//     bindStart:function(e){
//         console.log('start',e)
//     },
//     bindEnd:function(e){
//         console.log('end',e)
//     }
// })

// slider
// var pageData = {}
// for(var i = 1;i < 5;++i){
//     (function(index){
//         pageData[`slider${index}change`] = function(e){
//         console.log(`slider${index}发生change事件，携带值为`,e.detail.value)
//     }
//     })(i);
// }
// OnekitPage(pageData)

// camera
// OnekitPage({
//     takePhoto:function(){
//         const ctx = swan.createCameraContext()
//         ctx.takePhoto({
//         quality:'high',
//         success:(res)=>{
//             console.log(res)
//             this.setData({
//             src:res.tempImagePath
//         })}
//     })
//     },
//     error:function(e){
//         console.log(e.detail)
//     }
// })

// video
// function getRandomColor(){
//     const rgb = [
//     ]
//     for(var i = 0;i < 3;++i){
//         var color = Math.floor(Math.random() * 256).toString(16);
//         color = color.length === 1?'0' + color:color;
//         rgb.push(color);
//     }
//     return '#' + rgb.join('')
// }
// OnekitPage({
//     onShareAppMessage:function(){
//         return {
//         title:'video',
//         path:'page/component/pages/video/video'
//     }
//     },
//     onReady:function(){
//         this.videoContext = swan.createVideoContext('myVideo')
//     },
//     onHide:function(){
//     },
//     inputValue:'',
//     data:{
//         src:'',
//         danmuList:[
//             {
//                 text:'第 1s 出现的弹幕',
//                 color:'#ff0000',
//                 time:1
//             },
//             {
//                 text:'第 3s 出现的弹幕',
//                 color:'#ff00ff',
//                 time:3
//             }
//         ]
//     },
//     bindInputBlur:function(e){
//         this.inputValue = e.detail.value
//     },
//     bindButtonTap:function(){
//         const that = this
//         swan.chooseVideo({
//         sourceType:[
//             'album',
//             'camera'
//         ],
//         maxDuration:60,
//         camera:[
//             'front',
//             'back'
//         ],
//         success:function(res){
//             that.setData({
//             src:res.tempFilePath
//         })
//         }
//     })
//     },
//     bindVideoEnterPictureInPicture:function(){
//         console.log('进入小窗模式')
//     },
//     bindVideoLeavePictureInPicture:function(){
//         console.log('退出小窗模式')
//     },
//     bindPlayVideo:function(){
//         console.log('1')
//         this.videoContext.play()
//     },
//     bindSendDanmu:function(){
//         this.videoContext.sendDanmu({
//         text:this.inputValue,
//         color:getRandomColor()
//     })
//     },
//     videoErrorCallback:function(e){
//         console.log('视频错误信息:')
//         console.log(e.detail.errMsg)
//     }
// })

// map
// OnekitPage({
//     onShareAppMessage:function(){
//         return {
//         title:'map',
//         path:'page/component/pages/map/map'
//     }
//     },
//     data:{
//         latitude:23.099994,
//         longitude:113.32452,
//         markers:[
//             {
//                 latitude:23.099994,
//                 longitude:113.32452,
//                 name:'T.I.T 创意园'
//             }
//         ],
//         covers:[
//             {
//                 latitude:23.099994,
//                 longitude:113.34452,
//                 iconPath:'/image/location.png'
//             },
//             {
//                 latitude:23.099994,
//                 longitude:113.30452,
//                 iconPath:'/image/location.png'
//             }
//         ],
//         polygons:[
//             {
//                 points:[
//                     {
//                         latitude:23.099994,
//                         longitude:113.32452
//                     },
//                     {
//                         latitude:23.098994,
//                         longitude:113.32352
//                     },
//                     {
//                         latitude:23.098994,
//                         longitude:113.32552
//                     }
//                 ],
//                 strokeWidth:3,
//                 strokeColor:'#FFFFFFAA'
//             }
//         ],
//         subKey:'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
//         enable3d:false,
//         showCompass:false,
//         enableOverlooking:false,
//         enableZoom:true,
//         enableScroll:true,
//         enableRotate:false,
//         drawPolygon:false,
//         enableSatellite:false,
//         enableTraffic:false
//     },
//     toggle3d:function(){
//         this.setData({
//         enable3d:!this.data.enable3d
//     })
//     },
//     toggleShowCompass:function(){
//         this.setData({
//         showCompass:!this.data.showCompass
//     })
//     },
//     toggleOverlooking:function(){
//         this.setData({
//         enableOverlooking:!this.data.enableOverlooking
//     })
//     },
//     toggleZoom:function(){
//         this.setData({
//         enableZoom:!this.data.enableZoom
//     })
//     },
//     toggleScroll:function(){
//         this.setData({
//         enableScroll:!this.data.enableScroll
//     })
//     },
//     toggleRotate:function(){
//         this.setData({
//         enableRotate:!this.data.enableRotate
//     })
//     },
//     togglePolygon:function(){
//         this.setData({
//         drawPolygon:!this.data.drawPolygon
//     })
//     },
//     toggleSatellite:function(){
//         this.setData({
//         enableSatellite:!this.data.enableSatellite
//     })
//     },
//     toggleTraffic:function(){
//         this.setData({
//         enableTraffic:!this.data.enableTraffic
//     })
//     }
// })

// cavans
// const app = getApp()
// OnekitPage({
//     data:{},
//     onLoad:function(){
//         this.position = {
//         x:150,
//         y:150,
//         vx:2,
//         vy:2
//     }
//         this.x = -100
//         swan.createSelectorQuery().select('#canvas').fields({
//     node:true,
//     size:true
// }).exec(this.init.bind(this))
//     },
//     init:function(res){
//         const width = res[0].width
//         const height = res[0].height
//         const canvas = res[0].node
//         const ctx = canvas.getContext('2d')
//         const dpr = swan.getSystemInfoSync().pixelRatio
//         canvas.width = width * dpr
//         canvas.height = height * dpr
//         ctx.scale(dpr,dpr)
//         const renderLoop = ()=>{
//         this.render(canvas,ctx)
//         canvas.requestAnimationFrame(renderLoop)
//     }
//         canvas.requestAnimationFrame(renderLoop)
//         const img = canvas.createImage()
//         img.onload = ()=>{this._img = img}
//         img.src = './car.png'
//     },
//     render:function(canvas,ctx){
//         ctx.clearRect(0,0,300,300)
//         this.drawBall(ctx)
//         this.drawCar(ctx)
//     },
//     drawBall:function(ctx){
//         const p = this.position
//         p.x += p.vx
//         p.y += p.vy
//         if(p.x >= 300){
//         p.vx = -2;
//     }
//         if(p.x <= 7){
//         p.vx = 2;
//     }
//         if(p.y >= 300){
//         p.vy = -2;
//     }
//         if(p.y <= 7){
//         p.vy = 2;
//     }
//         function ball(x,y){
//         ctx.beginPath()
//         ctx.arc(x,y,5,0,Math.PI * 2)
//         ctx.fillStyle = '#1aad19'
//         ctx.strokeStyle = 'rgba(1,1,1,0)'
//         ctx.fill()
//         ctx.stroke()
//     }
//         ball(p.x,150)
//         ball(150,p.y)
//         ball(300 - p.x,150)
//         ball(150,300 - p.y)
//         ball(p.x,p.y)
//         ball(300 - p.x,300 - p.y)
//         ball(p.x,300 - p.y)
//         ball(300 - p.x,p.y)
//     },
//     drawCar:function(ctx){
//         if(!this._img)return
//         if(this.x > 350){
//         this.x = -100;
//     }
//         ctx.drawImage(this._img,this.x++,150 - 25,100,50)
//         ctx.restore()
//     }
// })

// editor
// OnekitPage({
//     onShareAppMessage:function(){
//         return {
//         title:'editor',
//         path:'page/component/pages/editor/editor'
//     }
//     },
//     data:{
//         formats:{},
//         readOnly:false,
//         placeholder:'开始输入...',
//         editorHeight:300,
//         keyboardHeight:0,
//         isIOS:false,
//         safeHeight:0,
//         toolBarHeight:50
//     },
//     readOnlyChange:function(){
//         this.setData({
//         readOnly:!this.data.readOnly
//     })
//     },
//     onLoad:function(){
//         const {platform,safeArea,model,screenHeight} = swan.getSystemInfoSync()
//         var safeHeight
//         if(safeArea){
//         safeHeight = screenHeight - safeArea.bottom;
//     } else {
//         safeHeight = 32;
//     }
//         this._safeHeight = safeHeight
//         var isIOS = platform === 'ios'
//         this.setData({
//         isIOS:isIOS,
//         safeHeight:safeHeight,
//         toolBarHeight:isIOS?safeHeight + 50:50
//     })
//         const that = this
//         this.updatePosition(0)
//         var keyboardHeight = 0
//         swan.onKeyboardHeightChange((res)=>{
//         if(res.height === keyboardHeight){
//             return;
//         }
//         const duration = res.height > 0?res.duration * 1000:0
//         keyboardHeight = res.height
//         setTimeout(()=>{swan.pageScrollTo({
//             scrollTop:0,
//             success:function(){
//                 that.updatePosition(keyboardHeight)
//                 that.editorCtx.scrollIntoView()
//             }
//         })},duration)
//     })
//     },
//     updatePosition:function(keyboardHeight){
//         const toolbarHeight = 50
//         const {windowHeight,platform} = swan.getSystemInfoSync()
//         var editorHeight = keyboardHeight > 0?((windowHeight - keyboardHeight)) - toolbarHeight:windowHeight
//         if(keyboardHeight === 0){
//         this.setData({
//             editorHeight:editorHeight,
//             keyboardHeight:keyboardHeight,
//             toolBarHeight:this.data.isIOS?50 + this._safeHeight:50,
//             safeHeight:this._safeHeight
//         });
//     } else {
//         this.setData({
//             editorHeight:editorHeight,
//             keyboardHeight:keyboardHeight,
//             toolBarHeight:50,
//             safeHeight:0
//         });
//     }
//     },
//     calNavigationBarAndStatusBar:function(){
//         const systemInfo = swan.getSystemInfoSync()
//         const {statusBarHeight,platform} = systemInfo
//         const isIOS = platform === 'ios'
//         const navigationBarHeight = isIOS?44:48
//         return statusBarHeight + navigationBarHeight
//     },
//     onEditorReady:function(){
//         const that = this
//         swan.createSelectorQuery().select('#editor').context(function(res){
//     that.editorCtx = res.context
// }).exec()
//     },
//     blur:function(){
//         this.editorCtx.blur()
//     },
//     format:function(e){
//         console.log('xxxx', e)
//         var {name,value} = e.target.dataset
//         if(!name)return
//         this.editorCtx.format(name,value)
//     },
//     onStatusChange:function(e){
//         const formats = e.detail
//         this.setData({
//         formats:formats
//     })
//     },
//     insertDivider:function(){
//         this.editorCtx.insertDivider({
//         success:function(){
//             console.log('insert divider success')
//         }
//     })
//     },
//     clear:function(){
//         this.editorCtx.clear({
//         success:function(res){
//             console.log("clear success")
//         }
//     })
//     },
//     removeFormat:function(){
//         this.editorCtx.removeFormat()
//     },
//     insertDate:function(){
//         const date = new Date()
//         const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
//         this.editorCtx.insertText({
//         text:formatDate
//     })
//     },
//     insertImage:function(){
//         const that = this
//         swan.chooseImage({
//         count:1,
//         success:function(res){
//             that.editorCtx.insertImage({
//             src:res.tempFilePaths[0],
//             data:{
//                 id:'abcd',
//                 role:'god'
//             },
//             width:'80%',
//             success:function(){
//                 console.log('insert image success')
//             }
//         })
//         }
//     })
//     }
// })
