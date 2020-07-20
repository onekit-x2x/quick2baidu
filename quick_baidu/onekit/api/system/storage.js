module.exports = {
  /* storage.set/// */
  set(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_value = quick_object.value;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var swan_object = {};
    swan_object.key = quick_key;
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
      swan.setStorage(swan_object)
    }
    /* storage.get */
    ,
  get(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var swan_object = {}; 
    swan_object.key = quick_key;

    swan_object.success = function(swan_res) {
      var quick_res = {};
      for (var swan_res_key in swan_res) {
        var swan_res_value = swan_res[swan_res_key];
        switch (swan_res_key) {
          case "data":
            quick_res = swan_res_value
            break;
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
        quick_fail("");

      }
      if (quick_complete) {
        quick_complete("");
      }

    };
      swan.getStorage(swan_object)
    }
    /*Storage.clear*/
    ,
  clear(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var swan_object = {};

    swan_object.success = function(swan_res) {
      var quick_res = {};
      if (swan_res) {
        for (var swan_res_key in swan_res) {
          var swan_res_value = swan_res[swan_res_key];
          switch (swan_res_key) {
            case "errMsg":
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
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    swan.clearStorage(swan_object)
  }
  /*Storage.delete*/
  ,
  delete(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var swan_object = {};
    swan_object.key = quick_key;

    swan_object.success = function(swan_res) {
      var quick_res = {};
      if (swan_res) {
        for (var swan_res_key in swan_res) {
          var swan_res_value = swan_res[swan_res_key];
          switch (swan_res_key) {
            case "errMsg":
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
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    swan.removeStorage(swan_object)
  }
  /*storage.key*/
  ,
  key(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_index = quick_object.index;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var swan_object = {}
    var index = quick_object.index;
    swan_object.success = function(swan_res) {
      var quick_res = swan_res.keys[index];
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
      swan.getStorageInfo(swan_object)
  }
}