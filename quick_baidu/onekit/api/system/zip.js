module.exports = {
  decompress(quick_object){
    if (!quick_object){
        return;
    }
    var quick_srcUri = quick_object.srcUri;
    var quick_dstUri = quick_object.dstUri;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    ////////////////////////////////////
    var path = swan.env.USER_DATA_PATH;
    var swan_object = {
      zipFilePath: quick_srcUri.indexOf("internal://") == 0 ? path + quick_srcUri.substring(10) : quick_srcUri,
      targetPath: quick_dstUri.indexOf("internal://") == 0 ? path + quick_dstUri.substring(10) : quick_dstUri,
    };
    console.log(swan_object);
    swan_object.success = function(swan_res){
      console.log(swan_res);
      if (quick_success) {
        quick_success("success");
      }
      if (quick_complete) {
        quick_complete("success");
      }
    };
    swan_object.fail=function(res,code){
      console.log(res, code);
      var quick_data;
      var code;
      if (res.errMsg.indexOf("Undefined") > 0){
        code = 202;
        if (!swan_object.zipFilePath){
          quick_data.data = "srcUri not define";
        }else{
          quick_data.data = "dstUri not define";
        }
      }else{
        //srcUri internal://mass/download/1-4.zips  is  not exists 300
        code = 300;
        quick_data = res.errMsg;
      }
      if (quick_fail) {
        quick_fail(quick_data, code);
      }
      if (quick_complete) {
        quick_complete(quick_data, code);
      }
    };

    swan.getFileSystemManager().unzip(swan_object);
  }

}