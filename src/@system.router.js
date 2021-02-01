/* eslint-disable no-console */
/* eslint-disable camelcase */
import URL from '../node_modules/oneutil/URL'

module.exports = {
  /*  network.getType/// */
  push(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_uri = quick_object.uri
    //    const quick_params = quick_object.params
    if (quick_uri.startsWith('/')) {
      if (quick_uri === '/') {
        swan.reLaunch({
          url: `/quickapp2baidu/page/router.push/ie?url=${encodeURI(quick_uri)}`
        })
      } else {
        swan.navigateTo({
          url: quick_uri
        })
      }
      return
    }

    const url = new URL(quick_uri)
    if (url.host === null) {
      swan.navigateTo({
        url: quick_uri
      })
      return
    }
    switch (url.scheme) {
      case 'tel':
        swan.makePhoneCall({
          phoneNumber: url.host,
        })
        break
      case 'sms':
        swan.showModal({
          title: '不支持',
          content: '微信小程序暂不支持发短信',
        })
        break
      case 'http':
      case 'https':
        swan.navigateTo({
          url: `/quickapp2baidu/page/router.push/ie?url=${encodeURI(quick_uri)}`
        })
        break
      case 'internal':
        swan.showModal({
          title: '带配置',
          content: '微信小程序暂不支持打开文件',
        })
        break
      case 'hap':
        switch (url.host) {
          case 'app':
            swan.showModal({
              title: '带配置',
              content: '请配置要打开的小程序',
            })
            break
          case 'settings':
            swan.showModal({
              title: '带配置',
              content: '微信小程序暂不支持打开手机设置',
            })
            break
          default:
            throw new Error(url.host)
        }

        break
      default:
        throw new Error(url.scheme)
    }
  },


  /** router.replace */

  replace(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_uri = quick_object.uri
    if (quick_uri.startsWith('/')) {
      if (quick_uri === '/') {
        swan.reLaunch({
          url: `/quickapp2baidu/page/router.push/ie?url=${encodeURI(quick_uri)}`
        })
      } else {
        swan.navigateTo({
          url: quick_uri
        })
      }
    }
  },
  /** router.back */

  back(quick_object) {
    const quick_path = quick_object.path
    if (!quick_path) {
      swan.navigateBack({})
    } else if (quick_path.startsWith('/')) {
      if (quick_path === '/') {
        swan.navigateTo({
          url: `/quickapp2baidu/page/router.push/ie?url=${encodeURI(quick_path)}`
        })
      } else {
        swan.reLaunch({
          url: quick_path
        })
      }
    }
  },
  /** router.clear() */

  clear() {
    //  const swan_object = {}
  },
  /** router.getLength */

  getLength() {
    //  const swan_object = {}
  },
  /** router.getState */

  getState() {
    //  const swan_object = {}
  },
  /** router.getPages */

  getPages() {
    //  const swan_object = {}
  }
}
