/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../../node_modules/oneutil/PROMISE'

export default class Video {
  constructor(object) {
    this.object = object
  }

  compressVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.chooseVideo({
        sourceType: ['album'],
        compressed: true,
        success: swan_res => {
          const quick_res = {
            uri: swan_res.tempFilePath,
            size: swan_res.size,
            duration: swan_res.duration,
            height: swan_res.height,
            width: swan_res.width,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }

  getVideoInfo() {
    return console.warn('getVideoInfo is not support')
  }
}
