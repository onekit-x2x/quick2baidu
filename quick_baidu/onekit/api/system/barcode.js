module.exports = {
  /* storage.set/// */
  scan(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_cancel = quick_object.cancel;
    var quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////////////////////
    var swan_object = {};
    swan_object.success = function(swan_res) {
      var quick_res = {};
      for (var swan_res_key in swan_res) {
        switch (swan_res_key) {
          case "result":
            quick_res.result = swan_res.result
            break
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
    return swan.scanCode(swan_object)
  }
}