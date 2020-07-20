module.exports = {
  /*
 brightness.setValue
 * */
  setValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_value=quick_object.value;
    quick_object =null;
    ///////////////////////////
    var swan_object = {};
    if(quick_value){
      swan_object.value = quick_value;
    }
      swan_object.success = function(swan_res) {
        var quick_res = {};
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
    return swan.setScreenBrightness(swan_object)
  }
  /*
 brightness.getValue
 * */
  ,
  getValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    ///////////////////////////
    var swan_object = {};
      swan_object.success = function(swan_res) {
        var quick_res = {};
        for (var swan_res_key in swan_res) {
          var swan_res_value = swan_res[swan_res_key];
          switch (swan_res_key) {
            case "value":
              quick_res.value = swan_res_value
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
      swan.getScreenBrightness(swan_object)
  }
  /**
   * brightness.setKeepScreenOn
   */
  ,
  setKeepScreenOn(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_keepScreenOn= quick_object.keepScreenOn;
    quick_object =null;
    ///////////////////////////
    var swan_object = {};
    if(quick_keepScreenOn){
      swan_object.keepScreenOn = quick_keepScreenOn
    }
      swan_object.success = function(swan_res) {
        var quick_res = {};
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
      swan.setKeepScreenOn(swan_object)
  }

  /**
     brightness.setMode
     */
  ,
  setMode(quick_object) {
     console.log("brightness.getMode暂不支持！")
  }

  /**
   brightness.getMode
   */
  ,
  getMode(quick_object) {
     console.log("brightness.getMode暂不支持！")
  }
}