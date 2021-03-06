/* eslint-disable camelcase */
import WebSocket from './api/WebSocket'

module.exports = {
  create(quick_object) {
    if (!quick_object) {
      return null
    }
    // const url = quick_object.url
    // const header = quick_object.header
    // const protocols = quick_object.protocols
    // // /////////////////////////////////////////
    // const DATA = ['HTTPS', 'HTTP']
    // const swan_object = {
    //   url,
    //   header,
    //   protocols: []
    // }
    // for (const protocol of protocols) {
    //   if (DATA.indexOf(protocol.toLowerCase()) >= 0) {
    //     swan_object.protocols.push(protocol)
    //   }
    // }
    const socket = swan.connectSocket(quick_object)
    return new WebSocket(socket)
  }


}
