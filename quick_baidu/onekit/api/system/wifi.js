module.exports = {
/**wifi.connect */
connect(quick_object) {
  if(!quick_object){
    return;
  }
  var quick_SSID = quick_object.SSID;
  var quick_BSSID = quick_object.BSSID;
  var quick_password = quick_object.password;
  var quick_success = quick_object.success;
  var quick_fail = quick_object.fail;
  var quick_complete = quick_object.complete;
  //////////////////////////////////////////////
  var swan_object = {};
  swan_object.SSID = quick_SSID;
  swan_object.BSSID = quick_BSSID;
  if(quick_password){
    swan_object.password = quick_password;
  }

  swan_object.success = function (swan_res) {
    var quick_res = {};
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
    
    swan.connectWifi(swan_object)
  }
  /**
   * wifi.scan
   */
  , scan(quick_object) {
    if(!quick_object){
      return;
    }
    
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////////
    var swan_object = {};
    swan_object.success = function (swan_res) {
      var quick_res = {};
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
    swan.getWifiList(swan_object)
  }
  /**
   * wifi.getConnectedWifi */

  , getConnectedWifi(quick_object) {
    if(!quick_object){
      return;
    }
    
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////////
    var swan_object = {};
     
    swan_object.success = function (swan_res) {
      var quick_res = {};
      for (var swan_res_key in swan_res) {
        var swan_res_value = swan_res[swan_res_key];
        switch (swan_res_key) {
          case "wifi":
            quick_res.type = swan_res_value
            break;
          case "errCode":
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
    swan_object.fail = function (swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    swan.getConnectedWifi(swan_object)
  }
  /**
   * wifi.onscanned */
  , onscanned(data){
    swan.onGetWifiList(function (data){
      console.error("[quick2baidu] 暂不支持 onscanned");
    })
  }
  /**wifi.onstatechanged */
  , onstatechanged(data) {
    swan.offWifiConnected(function (data) {
      console.error("[quick2baidu] 暂不支持 onstatechanged");
    })
  }
}