module.exports = {
  getLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_timeout =quick_object.timeout;
    let quick_coordType =quick_object.coordType ;
    quick_object = null;
    ////////////////////////////////
    var swan_object = {};
    if(quick_timeout){
      swan_object.type = quick_timeout
    }
    if(quick_coordType){
      swan_object.type = quick_coordType
    }
      swan_object.success = function(swan_res) {
        var quick_res = {
          time: 1587455926904
        };
          for (var swan_res_key in swan_res) {
            var swan_res_value = swan_res[swan_res_key];
            // console.log(swan_res_key)
            switch (swan_res_key) {
              case "accuracy":
                quick_res.accuracy = swan_res_value
                break;
              case "latitude":
                quick_res.latitude = swan_res_value
                break;
              case "longitude":
                quick_res.longitude = swan_res_value
                break;
              case "errMsg":
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
      swan_object.fail = function(swan_res) {
        if (quick_fail) {
          quick_fail(swan_res);
        }
        if (quick_complete) {
          quick_complete(swan_res);
        }
      };
    swan.getLocation(swan_object)
  },
  /** getLocationType*/
  getLocationType(quick_object){
    console.log("暂不支持！")
  }
   /** chooseLocation*/
   /*打开地理位置授权*/
  ,
  chooseLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_latitude =quick_object.latitude;
    let quick_longitude =quick_object.longitude;
    let quick_coordType =quick_object.coordType;
    quick_object =null;
    ////////////////////////////////
    var swan_object = {};
    if(quick_latitude){
      swan_object.latitude = quick_latitude
    }
    if(quick_longitude){
      swan_object.longitude = quick_longitude
    }
      swan_object.success = function(swan_res) {
        var quick_res = {
          coordType:swan_res.latitude+","+swan_object.longitude
        };
          for (var swan_res_key in swan_res) {
            var swan_res_value = swan_res[swan_res_key];
            switch (swan_res_key) {
              case "name":
                quick_res.name = swan_res_value
                break;
              case "address":
                quick_res.address = swan_res_value
                break;
              case "latitude":
                quick_res.latitude = swan_res_value
                break;
              case "longitude":
                quick_res.longitude = swan_res_value
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
      swan_object.fail = function(swan_res) {
        if (quick_fail) {
          quick_fail(swan_res);
        }
        if (quick_complete) {
          quick_complete(swan_res);
        }
      };
    swan.openLocation(swan_object)
  }
  /** geolocation.subscribe*/
  ,
  subscribe(quick_object){
    if (!quick_object) {
      return;
    }
    let quick_reserved=quick_object.reserved
    let quick_coordType = quick_object.coordType
    let quick_callback =quick_object.callback
    let quick_fail = quick_object.fail
    quick_object =null;
    /////////////////
      var swan_object = {};
      if(quick_reserved){
        swan_object.reserved = quick_reserved
      }
      if(quick_coordType){
        swan_object.coordType = quick_coordType
      }
      if(quick_callback){
        swan_object.callbacks = quick_callback
      }
        swan_object.fail = function(swan_res) {
          if (quick_fail) {
            quick_fail(swan_res);
          }
        };
        swan.onLocationChange(function(swan_res){
             console.log(swan_res)
    })
    swan.onLocationChange(function(res){
    console.log("onLocationChange",res)
    })
  }

  /**swan.offLocationChange */
  ,unsubscribe(){
    swan.offLocationChange(function (res){
    console.log(res)
    })
  }
  /**geolocation.getSupportedCoordTypes() */
  ,getSupportedCoordTypes(){
    console.log("暂不支持！")
  }

}