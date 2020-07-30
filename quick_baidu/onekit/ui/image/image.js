// onekit/ui/image.js
Component({
    /**
     * 组件的属性列表
     */
    options: {
        addGlobalClass: true,
    },
    properties: {        Id:{type:String,value:""},     Class:{type:String,value:""},     Style:{type:String,value:""},
        src: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        width: 0,
        height: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        image_load: function (e) {
            var width = e.detail.width;
            var height = e.detail.height;
            this.setData({ width, height });
        }
    }
})
