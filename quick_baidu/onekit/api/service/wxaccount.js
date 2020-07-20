module.exports = {
  getType() {
    return "APP";
  },
  authorize(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_cancel = quick_object.cancel;
    //////////////////////////////////////////
    swan.login({
      success : function(res){
        console.log("授权成功 ：",res);
        swan.request({
          url : "http://192.168.23.234/quick2weixin/wxaccount/authorize",
          data : {
            code : res.code,
            success: function(res){
              console.log("登录成功：", res);
            },
            fail : function(res){
              console.log("登录失败：", res);
            }
          }
        });

      },
      fail: function(res){
        console.log("授权失败：", res);
      }
    });



  }

}