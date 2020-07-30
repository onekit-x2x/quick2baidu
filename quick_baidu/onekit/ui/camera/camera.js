Component({
options: {
        addGlobalClass: true,
    },
    properties: {        Id:{type:String,value:""},     Class:{type:String,value:""},     Style:{type:String,value:""},
       devicePosition:{
        type:String,
        value:'back',
       },
       flash:{
        type:String,
        value:'auto',
       },
    },


    methods: {
      
       camera_error(e){
        console.log("camera_error", e);
        this.triggerEvent('error',e.details)
       },
    }
});