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
    return console.warn('setLocale is not support')
  },
  getThemeMode() {
    return console.warn('getThemeMode is not support')
  }

}
