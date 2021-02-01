/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /*  network.getType/// */
  getType(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.getNetworkType({
        success: swan_res => {
          let quick_res_type
          switch (swan_res.networkType) {
            case 'unknown':
              quick_res_type = 'others'
              break
            default:
              quick_res_type = swan_res.networkType
              break
          }
          const quick_res = {
            type: quick_res_type,
            metered: false
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /*  network.subscribe/// */
  subscribe(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_callback = quick_object.callback
    quick_object = null
    swan.onNetworkStatusChange(function (swan_res) {
      let quick_res_type
      switch (swan_res.networkType) {
        case 'unknown':
          quick_res_type = 'others'
          break
        default:
          quick_res_type = swan_res.networkType
          break
      }
      const quick_res = {
        type: quick_res_type,
        metered: false,
        isConnected: swan_res.isConnected
      }
      quick_callback(quick_res)
    })
  },
  // ///////
  unsubscribe() {
    swan.offNetworkStatusChange()
  },
  /** getSimOperator */
  getSimOperator() {
    console.log('getSimOperator is not support')
  }
}
