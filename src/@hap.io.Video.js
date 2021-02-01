/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */

  getVideoInfo(quick_object) {
    const quick_uri = this.object.uri
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.getVideoInfo({
        src: quick_uri,
        success: swan_res => {
          const quick_res = {
            uri: quick_uri,
            size: swan_res.size,
            height: swan_res.height,
            width: swan_res.width,
            bitrate: swan_res.bitrate,
            framerate: swan_res.fps,
            orientation: swan_res.orientation,
            type: swan_res.type,
            duration: swan_res.duration,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
