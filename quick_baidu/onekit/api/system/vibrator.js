module.exports = {
  vibrate(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_mode = quick_object.mode;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var swan_object = {}
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
    if (quick_mode == 'long' || quick_mode == null) {
      swan.vibrateLong(swan_object, console.log('vibrateLong'))
    } else if (quick_mode == 'short') {
      swan.vibrateShort(swan_object, console.log('vibrateShort'))
    }
  }
}