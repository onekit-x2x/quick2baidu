  function _pickImageHandler(quick_object, count){
  if (!quick_object) {
    return;
  }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_cancel = quick_object.cancel;
  ////////////////////////////////
  var swan_object = {
    count,
  };

  swan_object.success = function (res) {
    console.log(res);
    var quick_res = {};
    if (count == 1) {
      //单图片
      for (var swan_key of Object.keys(res)) {
        var swan_value = res[swan_key];
        switch (swan_key) {
          case "tempFilePaths":
            break;
          case "tempFiles":
            var file = swan_value[0];
            for (var file_key of Object.keys(file)) {
              var file_value = file[file_key];
              switch (file_key) {
                case "path":
                  quick_res["uri"] = file_value;
                  break;
                case "size":
                  quick_res["size"] = file_value;
                  break;
              }
            }

            console.log(quick_res.uri);
            quick_res["name"] = quick_res.uri.substring(quick_res.uri.lastIndexOf("/") + 1);

            break;
        }
      }
    } else {
      //多图片
      quick_res = {
        uris: [],
        files: [],
      };
      for (var swan_key of Object.keys(res)) {
        var swan_value = res[swan_key];
        switch (swan_key) {
          case "tempFilePaths":
            quick_res["uris"] = swan_value;
            break;
          case "tempFiles":
            for (var file of swan_value) {
              var file_data = {};
              for (var file_key of Object.keys(file)) {
                var file_value = file[file_key];
                switch (file_key) {
                  case "path":
                    file_data["uri"] = file_value;
                    break;
                  case "size":
                    file_data["size"] = file_value;
                    break;
                }
              }
              file_data.name = file_data.uri.substring(file_data.uri.lastIndexOf("/") + 1);
              quick_res.files.push(file_data);
            }
            break;
        }
      }
    }
    if (quick_success) {
      quick_success(quick_res);
    }
    if (quick_complete) {
      quick_complete(quick_res);
    }
  }

  swan_object.fail = function (res) {
    console.log(res);
    if (res.errMsg.indexOf("cancel") > 0) {
      if (quick_cancel) {
        quick_cancel();
      }
    } else {
      if (quick_fail) {
        quick_fail(res);
      }
    }

    if (quick_complete) {
      quick_complete(res);
    }
  }

  swan.chooseImage(swan_object);
}
module.exports =  {
  /**media.takePhoto */
   takePhoto:function(quick_object) {
     if(!quick_object){
       return;
     }
     swan.navigateTo({
       url: '/onekit/page/media.takePhoto/media.takePhoto?type=0',
       events:quick_object
     })
  },
  /** media.takeVideo */
   takeVideo:function(quick_object) {
      if(!quick_object){
        return;
      }
      swan.navigateTo({
        url: '/onekit/page/media.takePhoto/media.takePhoto?type=1',
        events:quick_object
      })
  },

  /**media.pickImage */
  pickImage(quick_object) {
    _pickImageHandler(quick_object, 1);
  },

  /**media.pickImages */
   pickImages(quick_object) {
    _pickImageHandler(quick_object, 9);
  }


   
  /**media.pickVideo */
  , pickVideo(quick_object) {
    this._pickVideoHandler(quick_object, 1);
  }

  /**media.pickVideos */
  , pickVideos(quick_object) {
    this._pickVideoHandler(quick_object, 9);
  }
  , _pickVideoHandler(quick_object, count) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_cancel = quick_object.cancel;
    quick_object =null;
    ////////////////////////////////
    var swan_object = {
      maxDuration : 60, //快应用拍摄视频时长为10分钟
    };

    swan_object.success = function (res) {
      console.log(res);
      var quick_res = {};
      if (count == 1) {
        //单视频
        for (var swan_key of Object.keys(res)) {
          var swan_value = res[swan_key];
          switch (swan_key) {
            case "tempFilePath":
              quick_res["uri"] = swan_value;
              quick_res["name"] = swan_value.substring(swan_value.lastIndexOf("/") + 1);
              break;
            case "size":
              quick_res["size"] = swan_value;
          }
        }
      } else {
        //多视频
        quick_res = {
          uris: [],
          files: [],
        };
        var file = {};
        for (var swan_key of Object.keys(res)) {
          var swan_value = res[swan_key];
          switch (swan_key) {
            case "tempFilePath":
              quick_res.uris.push(swan_value);
              file["uri"] = swan_value;
              file["name"] = swan_value.substring(swan_value.lastIndexOf("/") + 1);
              break;
            case "size":
              file["size"] = swan_value;
          }
        }
        quick_res.files.push(file);
      }
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    }

    swan_object.fail = function (res) {
      console.log(res);
      if (res.errMsg.indexOf("cancel") > 0) {
        if (quick_cancel) {
          quick_cancel();
        }
      } else {
        if (quick_fail) {
          quick_fail(res);
        }
      }

      if (quick_complete) {
        quick_complete(res);
      }
    }

    swan.chooseVideo(swan_object);
  }

  /**media.pickFile */
  , pickFile(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_cancel = quick_object.cancel;
    let quick_uri =quick_object.uri;
    quick_object =null;
    ////////////////////////////////
    var swan_object = {
      type: "file"
    };
    swan_object.success = function (res) {
      console.log(res);
      var quick_res = {};
      var file = res.tempFiles[0];
      for (var swan_key of Object.keys(file)){
        var swan_value = file[swan_key];
        switch (swan_key) {
          case "path":
            quick_res["uri"] = swan_value;
            break;
          case "name":
            quick_res["name"] = swan_value;
            break;
          case "size":
            quick_res["size"] = swan_value;
            break;
        }
      }
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    }

    swan_object.fail = function (res) {
      console.log(res);
      if (res.errMsg.indexOf("cancel") > 0) {
        if (quick_cancel) {
          quick_cancel();
        }
      } else {
        if (quick_fail) {
          quick_fail(res);
        }
      }

      if (quick_complete) {
        quick_complete(res);
      }
    }

    swan.chooseMessageFile(swan_object);
  }

  /**media.saveToPhotosAlbum */
  , saveToPhotosAlbum(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_uri =quick_object.uri;
    quick_object =null;
    ////////////////////////////////
    var swan_object = {};
    if(quick_uri){
      swan_object.filePath =quick_uri
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
      swan.saveVideoToPhotosAlbum(swan_object)
  }
  /**media.previewImage */
  , previewImage(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_current =quick_object.current;
    let quick_uris =quick_object.uris;
    quick_object =null;
    ////////////////////////////////
    var swan_object = {};
    if(quick_uris){
    swan_object.urls=quick_uris
    }
    if(quick_current){
      swan_object.current =quick_current
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
      swan.previewImage(swan_object)
  }
  /**media.getRingtone */
  , getRingtone(quick_object) {
    console.error("[quick2weixin] 暂不支持 media.getRingtone");
  }
  /**setRingtone */
  ,setRingtone(quick_object){
    console.error("[quick2weixin] 暂不支持 media.setRingtone");
  }

}