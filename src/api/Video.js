/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from 'oneutil/PROMISE'

export default class Video {
  constructor(object) {
    this.object = object
  }

  compressVideo(quick_object) {
    const quick_uri = this.object.uri
    const quick_bitrate = this.object.bitrate || 0.5
    const quick_framerate = this.object.framerate || 30
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.compressVideo({
        src: quick_uri,
        quality: 'medium',
        bitrate: quick_bitrate,
        fps: quick_framerate,
        resolution: 0.5,
        success: swan_res => {
          const quick_res = {
            uri: swan_res.tempFilePath,
            size: swan_res.size
          }
          SUCCESS(quick_res)
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }

  getVideoInfo(quick_object) {
    const quick_uri = quick_object.uri
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
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
