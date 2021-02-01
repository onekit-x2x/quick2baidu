/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocale() {
    const swan_res = swan.getSystemInfoSync()
    const quick_res = {
      language: swan_res.language,
      countryOrRegion: 'CN'
    }
    return quick_res
  },
  setLocale() {

  },
  getThemeMode() {
    const swan_res = swan.getSystemInfoSync()
    if (swan_res.theme === 'light') {
      return 0
    } else {
      return 1
    }
  }

}
