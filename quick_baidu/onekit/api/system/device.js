module.exports = {
  getInfo(quick_object) {
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
        var quick_res = {
          osVersionCode: 29,
          platformVersionCode: 1062,
          platformVersionName: "1.0.6.2",
          product: "OnePlus7_CH",
          vendorOsName: "H2OS",
          vendorOsVersion: "Hydrogen OS 10.0.4.GM57",
        };
        for (var swan_res_key in swan_res) {
          var swan_res_value = swan_res[swan_res_key];
          switch (swan_res_key) {
            case "brand": //百度
              quick_res.brand = swan_res_value //快应用
              quick_res.manufacturer = swan_res_value
              break;
            case "language":
              quick_res.language = swan_res_value.split("_")[0];
              quick_res.region = swan_res_value.split("_")[1];
              break;
            case "safeArea":
              break;
            case "model":
              quick_res.model = swan_res_value
              break;
            case "pixelRatio":
              quick_res.screenDensity = swan_res_value
              break;
            case "platform":
              quick_res.osType = swan_res_value
              break;
            case "system":
              quick_res.osVersionName = swan_res_value.split(" ")[1]
              break;
            case "screenHeight":
              quick_res.screenHeight = swan_res_value
              break;
            case "screenWidth":
              quick_res.screenWidth = swan_res_value
              break;
            case "screenTop":
              quick_res.statusBarHeight = swan_res_value
              break;
            case "windowHeight":
              quick_res.windowHeight = swan_res_value
              break;
            case "windowWidth":
              quick_res.windowWidth = swan_res_value
              break;
            case "SDKVersion":
            case "benchmarkLevel":
            case "bluetoothEnabled":
            case "cameraAuthorized":
            case "version":
            case "notificationAuthorized":
            case "microphoneAuthorized":
            case "locationEnabled":
            case "locationAuthorized":
            case "errMsg":
            case "deviceOrientation":
            case "devicePixelRatio":
            case "fontSizeSetting":
              break;
            default:
              quick_res[swan_res_key] = swan_res_value
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
      swan.getSystemInfo(swan_object)
  }
  /**device.getId */
  ,
  getId(quick_object) {
    return console.log("getId暂不支持！")
  }
   /**device.getId */
  ,
  getDeviceId(quick_object) {
    return console.log("getDeviceId暂不支持！")
  }
}