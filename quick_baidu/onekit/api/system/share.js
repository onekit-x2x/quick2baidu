module.exports =  {

  share: function (quick_object){
    if (!quick_object) {
      return;
    }
    var quick_type = quick_object.type;
    var quick_data = quick_object.data;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////////
    var swan_object = {};
    if (quick_type.indexOf("text/") == 0){
      console.log("[quick2baidu] not support share text");
    } else if (quick_type.indexOf("/") == 0){
      //应用内路径
      swan_object.path = quick_data;
    }else{
      //下载的文件路径

    }

    var swan_callback = {};
    if (quick_complete) {
      swan_callback.complete = quick_complete;
    }
    if (quick_success) {
      swan_callback.success = quick_success;
    }
    if (quick_fail) {
      swan_callback.fail = quick_fail;
    }
    if (quick_object.cancel) {
      swan_callback.cancel = quick_object.cancel;
    }

    swan.navigateTo({
      url: `/onekit/page/share.share/share.share?param=${JSON.stringify(swan_object)}`,
      events : swan_callback,
    });

  }

}