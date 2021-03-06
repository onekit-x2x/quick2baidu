/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {

  // 获取图片信息
  getImageInfo(quick_object) {
    const quick_uri = quick_object.uri
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.getImageInfo({
        src: quick_uri,
        success: swan_res => {
          const quick_res = {
            uri: swan_res.path,
            width: swan_res.width,
            height: swan_res.height,
            orientation: swan_res.orientation,
            type: swan_res.type,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  compressImage(quick_object) {
    const quick_uri = quick_object.uri
    const quick_quality = quick_object.quality || 75
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.compressImage({
        src: quick_uri,
        quality: quick_quality,
        success: swan_res => {
          const quick_res = {
            uri: swan_res.tempFilePath
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  applyOperations() {
    console.warn('applyOperations is not support')
  },

  editImage() {
    console.warn('editImage is not support')
  },

  getExifAttributes() {
    console.warn('getExifAttributes is not support')
  },

  setExifAttributes() {
    console.warn('setExifAttributes is not support')
  },


}
