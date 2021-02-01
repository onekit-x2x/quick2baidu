/* eslint-disable camelcase */

import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  fetch(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_url = quick_object.url
    const quick_data = quick_object.data || ''
    const quick_header = quick_object.header || {}
    const quick_method = quick_object.method || 'GET'
    const quick_responseType = quick_object.responseType || 'json'
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.request({
        url: quick_url,
        data: quick_data,
        header: quick_header,
        method: quick_method,
        responseType: quick_responseType,
        success: swan_res => {
          const quick_res = {
            code: swan_res.statusCode,
            data: swan_res.data,
            headers: swan_res.header,
            cookies: swan_res.cookies,
            profile: swan_res.profile
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
