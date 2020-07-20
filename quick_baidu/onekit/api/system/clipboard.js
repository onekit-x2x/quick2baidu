module.exports = {
  /*  clipboard.set/// */
  set(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_text=quick_object.text;
    quick_object =null;
    /////////////////
      var swan_object = {};
      if(quick_text){
        swan_object.data = quick_text
      }
        swan_object.success = function(swan_res) {
          var quick_res = {};
          for (var swan_res_key in swan_res) {
            var swan_res_value = swan_res[swan_res_key];
            switch (swan_res_key) {
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
        swan.setClipboardData(swan_object)
    }

    /* clipboard.get/// */
    ,
  get(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////
    var swan_object = {};
      swan_object.success = function(swan_res) {
        var quick_res = {};
        quick_res.text = swan_res.data
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
      swan.getClipboardData(swan_object)
  }
}