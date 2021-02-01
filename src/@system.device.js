/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** device.getInfo */
  getInfo(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.getSystemInfo({
        success: swan_res => {
          const quick_res = {
            brand: swan_res.brand,
            model: swan_res.model,
            osVersionName: swan_res.system.split(' ')[0],
            osVersionCode: swan_res.system.split(' ')[1],
            pixelRatio: swan_res.pixelRatio,
            language: swan_res.language,
            screenWidth: swan_res.screenWidth,
            screenHeight: swan_res.screenHeight,
            windowWidth: swan_res.windowWidth,
            windowHeight: swan_res.windowHeight,
            statusBarHeight: swan_res.statusBarHeight,
            vendorOsVersion: swan_res.version,
            theme: swan_res.theme,
            locationReducedAccuracy: swan_res.locationReducedAccuracy,
            safeArea: swan_res.safeArea,
            wifiEnabled: swan_res.wifiEnabled,
            locationEnabled: swan_res.locationEnabled,
            bluetoothEnabled: swan_res.bluetoothEnabled,
            notificationSoundAuthorized: swan_res.notificationSoundAuthorized,
            notificationBadgeAuthorized: swan_res.notificationBadgeAuthorized,
            notificationAlertAuthorized: swan_res.notificationAlertAuthorized,
            notificationAuthorized: swan_res.notificationAuthorized,
            microphoneAuthorized: swan_res.microphoneAuthorized,
            locationAuthorized: swan_res.locationAuthorized,
            cameraAuthorized: swan_res.cameraAuthorized,
            albumAuthorized: swan_res.albumAuthorized,
            benchmarkLevel: swan_res.benchmarkLevel,
            SDKVersion: swan_res.SDKVersion,
            fontSizeSetting: swan_res.fontSizeSetting,
            platform: swan_res.platform,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** device.getId */
  getId() {
    return console.warn('getId is not support')
  },

  /** device.getDeviceId */
  getDeviceId() {
    return console.warn('getDeviceId is not support')
  },

  /** device.getUserId */
  getUserId() {
    return console.warn('getUserId is not support')
  },

  /** device.getAdvertisingId */
  getAdvertisingId() {
    return console.warn('getAdvertisingId is not support')
  },

  /** device.getSerial */
  getSerial() {
    return console.warn('getSerial is not support')
  },

  /** device.getTotalStorage */
  getTotalStorage() {
    return console.warn('getTotalStorage is not support')
  },

  /** device.getAvailableStorage */
  getAvailableStorage() {
    return console.warn('getAvailableStorage is not support')
  },

  /** device.getCpuInfo */
  getCpuInfo() {
    return console.warn('getCpuInfo is not support')
  },

  /** device.getOAID */
  getOAID() {
    return console.warn('getOAID is not support')
  },

  /** device.platform */
  platform() {
    return console.warn('platform is not support')
  },

  /** device.host */
  host() {
    return console.warn('host is not support')
  },

}
