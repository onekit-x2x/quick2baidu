/* eslint-disable camelcase */
export default class WebSocket {
  constructor(socket) {
    this.socket = socket
  }

  close(quick_object) {
    this.socket.close(quick_object)
  }

  send(quick_object) {
    this.socket.send(quick_object)
  }

  onopen(callback) {
    this.socket.onOpen(callback)
  }

  onmessage(callback) {
    this.socket.onMessage(callback)
  }

  onclose(callback) {
    this.socket.onClose(function (swan_res) {
      const quick_res = {
        code: swan_res.code,
        reason: swan_res.reason,
        wasClean: 'normal closure',
      }
      callback(quick_res)
    })
  }

  onerror(callback) {
    this.socket.onError(callback)
  }
}
