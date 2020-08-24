Component({
options: {
        addGlobalClass: true,
    },
    properties: {        onekitId:{type:String,value:""},     onekitClass:{type:String,value:""},     onekitStyle:{type:String,value:""},
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