import {OnekitPage} from '../weixin2baidu/index';
import {swan} from '../weixin2baidu/index'
// import {STRING} from 'oneutil'

global = {};
OnekitPage({
  data: {},
  onLoad() {
    swan.chooseMedia({
        mediaType: 'image',
        success:res=>{
          console.log(res)
        }
      })
  }
});
