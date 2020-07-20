module.exports = {
  /*  network.getType//// */
  getType(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object=null;
    ///////////////////////////
    var swan_object = {};
      swan_object.success = function (swan_res) {
        var quick_res = {metered: false};
        for (var swan_res_key in swan_res) {
          var swan_res_value = swan_res[swan_res_key];
          switch (swan_res_key) {
            case "networkType":
              quick_res.type = swan_res_value
              break;
          }
        }
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      swan_object.fail = function (swan_res) {
        if (quick_fail) {
          quick_fail(swan_res);
        }
        if (quick_complete) {
          quick_complete(swan_res);
        }
      };
      swan.getNetworkType(swan_object)
  }


  //////////////////////////
  , subscribe(quick_object) {
      console.log("subscribe暂不支持！")
    // if (!quick_object) {
    //   return;
    // }
    // let quick_reserved = quick_object.reserved ;
    // let quick_callback = quick_object.callback;
    // let quick_fail = quick_object.fail;
    // quick_object=null;
    // ///////////////////////////
    // var swan_callback={}
    // swan.onNetworkStatusChange(function(swan_callback){
    //   quick_callback.type = swan_callback.networkType
    // })
  }
  /////////
  , unsubscribe(quick_object){
   console.log("unsubscribe暂不支持！")
  }
  /**getSimOperator */
  ,getSimOperator(quick_object){
    console.log("暂不支持！")
  }
}