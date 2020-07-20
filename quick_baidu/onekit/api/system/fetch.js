module.exports = {
  fetch(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_url = quick_object.url;
    var quick_data = quick_object.data;
    var quick_header	= quick_object.header;
    var quick_method  = quick_object.method;
    var quick_responseType = quick_object.responseType;
    quick_object =null;
    //////////////////////////////////
    var swan_object = {};
    if(quick_url){
      swan_object.url = quick_url
    }
    if(quick_data){
      swan_object.data=quick_data
    }
    if(quick_header){
      swan_object.header= quick_header
    }
    if(quick_method){
      swan_object.method=quick_method
    }
    if(quick_responseType){
      swan_object.responseType=quick_responseType
    }
      swan_object.success = function(swan_res) {
        var quick_res = {};
        for (var swan_res_key in swan_res) {
          var swan_res_value = swan_res[swan_res_key];
          switch (swan_res_key) {
            case "statusCode": //百度
              quick_res.code = swan_res_value //快应用
              break;
            case "header":
              var swan_res_headers = swan_res_value;
              var quick_res_headers = {};
              for (var swan_res_headers_key in swan_res_headers) { // 循环header里面的属性 对cookies做处理
                var swan_res_headers_value = swan_res_headers[swan_res_headers_key];
                //console.log(swan_res_headers_key, swan_res_headers_value);
                switch (swan_res_headers_key) {
                  case "Set-Cookie":
                    var swan_res_headers_cookies;
                    if (swan_res_headers_value) {
                      swan_res_headers_cookies = swan_res_headers_value.split(",");
                    } else {
                      swan_res_headers_cookies = "";
                    }
                    quick_res_headers[swan_res_headers_key] = swan_res_headers_cookies
                    break
                  default:
                    quick_res_headers[swan_res_headers_key] = swan_res_headers_value;
                    break;
                }
              };
              quick_res.header = quick_res_headers;
              break;
            case "cookies":
              break;
            case "errMsg":
              break;
            default:
              quick_res[swan_res_key] = swan_res_value;
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
      swan.request(swan_object);
  }
}