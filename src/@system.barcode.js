/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */
  scan(quick_object) {
    if (!quick_object) {
      return null
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    //  const quick_cancel = quick_object.cancel
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.scanCode({
        success: swan_res => {
          const quick_res = {
            result: swan_res.result,
            scanType: swan_res.scanType,
            charSet: swan_res.charSet,
            path: swan_res.path,
            rawData: swan_res.rawData,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
