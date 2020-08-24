Component({
options: {
        addGlobalClass: true,
    },
  properties: {        onekitId:{type:String,value:""},     onekitClass:{type:String,value:""},     onekitStyle:{type:String,value:""},

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
     // 自定义方法
     view_tap: function (res) {
       //console.log(res)
       this.triggerEvent('click')
    },
  }
})
