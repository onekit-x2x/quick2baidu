module.exports = {
/*** record.start */
start(quick_object) {
  if (!quick_object) {
    return;
  }
  let quick_success = quick_object.success;
  let quick_fail = quick_object.fail;
  let quick_complete = quick_object.complete;
  let quick_duration = quick_object.duration;
  let quick_sampleRate = quick_object.sampleRate||8000;
  let quick_numberOfChannels = quick_object.numberOfChannels;
  let quick_encodeBitRate = quick_object.encodeBitRate;
  let quick_format = quick_object.format;
  quick_object = null;
////////////////////////////////////////////////
    var swan_object = {};
    if(quick_duration){
      swan_object.duration=quick_duration
    }
    if(quick_sampleRate){
       swan_object.quick_sampleRate = quick_sampleRate
    }
    if(quick_numberOfChannels){
     swan_object.numberOfChannels= quick_numberOfChannels
    }
    if(quick_encodeBitRate){
      swan_object.encodeBitRate = quick_encodeBitRate
    }
    if(quick_format){
      swan_object.format=quick_format
    }

      swan_object.success = function (swan_res) {
        var quick_res = {};
        quick_res.uri = swan_res.tempFilePath
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
    const recorderManager = swan.getRecorderManager()
    recorderManager.start(swan_object)
  }
  /**record.stop */
  , stop(object) {
    const recorderManager = swan.getRecorderManager()
    recorderManager.start()
  }
}
