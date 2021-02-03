/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** media.takePhoto */

  takePhoto(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    const CameraContext = swan.createCameraContext()
    PROMISE((SUCCESS) => {
      CameraContext.takePhoto({
        success: swan_res => {
          const quick_res = {
            uri: swan_res.tempImagePath
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** media.takeVideo */
  takeVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      swan.chooseVideo({
        sourceType: ['album'],
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
  },

  /** media.pickImage */
  pickImage(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      swan.chooseImage({
        count: 1,
        success: swan_res => {
          const quick_res = {
            tempFilePaths: swan_res.tempFilePaths,
            uri: swan_res.tempFiles[0].path,
            size: swan_res.tempFiles[0].size
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickImages */
  pickImages(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      swan.chooseImage({
        success: swan_res => {
          const quick_files = swan_res.tempFiles.map(file => ({
            uri: file.path,
            size: file.size
          }))
          const quick_res = {
            uris: swan_res.tempFilePaths,
            files: quick_files
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /** media.pickVideo */
  pickVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      swan.chooseVideo({
        sourceType: ['camera'],
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
  },

  /** media.pickVideos */
  pickVideos(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      swan.chooseVideo({
        sourceType: ['album'],
        success: swan_res => {
          const quick_res = {
            uris: [swan_res.tempFilePath],
            files: [{
              size: swan_res.size,
              uri: swan_res.tempFilePath
            }],
            duration: swan_res.duration,
            height: swan_res.height,
            width: swan_res.width,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /** media.pickFile */
  pickFile(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      swan.chooseMessageFile({
        count: 1,
        success: swan_res => {
          const quick_res = {
            tempFiles: swan_res.tempFiles,
            uri: swan_res.tempFiles[0].path,
            size: swan_res.tempFiles[0].size,
            name: swan_res.tempFiles[0].name,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.saveToPhotosAlbum */
  saveToPhotosAlbum(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    quick_object = null
    const swan_object = {
      filePath: quick_uri,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    swan.saveImageToPhotosAlbum(swan_object)
  },

  /** media.previewImage */
  previewImage(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uris = quick_object.uris
    const quick_current = quick_object.current || quick_uris[0]
    // const quick_cancel = quick_object.cancel
    quick_object = null
    const swan_object = {
      urls: quick_uris,
      current: quick_current,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    swan.previewImage(swan_object)
  },
  /** media.getRingtone */
  getRingtone() {
    console.warn('getRingtone is not support')
  },
  /** setRingtone */
  setRingtone() {
    console.warn('setRingtone is not support')
  }

}
