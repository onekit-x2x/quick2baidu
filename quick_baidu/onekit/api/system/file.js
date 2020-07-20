module.exports = {
  /**file.move */
  move(quick_object) {
    return console.log("move暂不支持！")
  }
  /**file.copy */
  ,
  copy(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_srcUri=quick_object.srcUri
    var quick_dstUri=quick_object.dstUri
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////
    var swan_object = {};
    if(quick_srcUri){
      swan_object.srcPath = quick_srcUri
    }
    if(quick_dstUri){
      swan_object.destPath = quick_dstUri
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
        var quick_res = {
          fail: 202
        };
        for (var swan_res_key in swan_res) {
          var swan_res_value = swan_res[swan_res_key];
          switch (swan_res_key) {
            case "errMsg":
              break;
          }
        }
        if (quick_fail) {
          quick_fail(swan_res);
        }
        if (quick_complete) {
          quick_complete(swan_res);
        }
      };
      swan.getFileSystemManager().copyFile(swan_object)
  }

  /**file.list */
  ,
  list(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri
    ///////////////////////////////////////////////
    var swan_object = {};
    if(quick_uri){
      swan_object.dirPath=quick_uri
    }
      swan_object.success = function(swan_res) {
        var quick_res = {};
        quick_res.fileList = swan_res.files
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
    //   swan.getFileSystemManager().
  }

  /**file.get */
  ,
  get(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri;
    var quick_recursive=quick_object.recursive||false 
    ///////////////////////////////////////////////
      var swan_object = {};
      if(quick_uri){
        swan_object.filePath=quick_uri
      }
        swan_object.success = function(swan_res) {
          var quick_res = {
            uri:swan_object.filePath,
            lastModifiedTime,
            type,
            subFiles
          };
          quick_res.length = swan_res.size
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
        swan.getFileSystemManager().getFileInfo(swan_object)
    }

    /**file.delete */
    ,
  delete(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri;
    var swan_object = {};
    if(quick_uri){
     swan_object.filePath=quick_uri
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
      swan.getFileSystemManager().unlink(swan_object)
  }

  /**file.writeText */
  ,
  writeText(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_text=quick_object.text;
    var quick_encoding=quick_object.encoding||"UTF-8";
    var quick_append=quick_object.append||false;
    var swan_object = {};
    if(quick_uri){
      swan_object.filePath=quick_uri
    }
    if(quick_text){
      swan_object.data=quick_text
    }
    if(quick_encoding){
      swan_object.encoding =quick_encoding
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
      swan.getFileSystemManager().writeFile(swan_object)
  }

  /**file.writeArrayBuffer */
  ,
  writeArrayBuffer(quick_object) {
    return console.log("暂不支持！")
  }

  /**file.readText */
  ,
  readText(quick_object) {}

  /**file.readArrayBuffer */
  ,
  readArrayBuffer(quick_object) {}

  /**file.access */
  ,
  access(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri
    //////////////////////////////////////
    var swan_object = {};
    if(quick_uri){
      swan_object.path=quick_uri
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
      swan.getFileSystemManager().access(swan_object)
  }

  /**file.mkdir */
  ,
  mkdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_recursive =quick_object.recursive||false;
    quick_object =null;
    ///////////////////////////////////////////////
    var swan_object = {};
    if(quick_uri){
      swan_object.dirPath=quick_uri
    }
    if(quick_recursive){
      swan_object.recursive=quick_recursive
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
      swan.getFileSystemManager().mkdir(swan_object)
  }

  /**file.rmdir */
  ,
  rmdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_recursive =quick_object.recursive||false;
    quick_object =null;
    ///////////////////////////////////////////////
    var swan_object = {};
    if(quick_uri){
      swan_object.dirPath=quick_uri
    }
    if(quick_recursive){
      swan_object.recursive=quick_recursive
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
      swan.getFileSystemManager().rmdir(swan_object)
  }
}