/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** wifi.connect */
  connect(quick_object) {
    swan.startWifi()
    return swan.connectWifi(quick_object)
  },
  /**
   * wifi.scan
   */
  scan(quick_object) {
    swan.startWifi()
    return swan.getWifiList(quick_object)
  },
  /**
   * wifi.getConnectedWifi */

  getConnectedWifi(quick_object) {
    if (!quick_object) {
      return
    }
    swan.startWifi()
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.getConnectedWifi({
        success: swan_res => {
          const quick_res = {
            SSID: swan_res.wifi.SSID,
            BSSID: swan_res.wifi.BSSID,
            secure: swan_res.wifi.secure,
            signalStrength: swan_res.wifi.signalStrength,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /**
   * wifi.onscanned */
  set onscanned(callback) {
    swan.startWifi()
    return swan.onGetWifiList(callback)
  },
  /** wifi.onstatechanged */
  set onstatechanged(callback) {
    swan.startWifi()
    swan.onWifiConnected(swan_res => {
      let state
      if (swan_res.wifi.secure) {
        state = 1
      } else {
        state = 0
      }
      const quick_res = {
        state,
        SSID: swan_res.wifi.SSID,
        BSSID: swan_res.wifi.BSSID,
        secure: swan_res.wifi.secure,
        signalStrength: swan_res.wifi.signalStrength,
      }
      callback(quick_res)
    })
  }
}
