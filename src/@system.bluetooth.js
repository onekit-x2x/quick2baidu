/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* bluetooth.openAdapter */
  openAdapter(quick_object) {
    return swan.openBluetoothAdapter(quick_object)
  },
  /**
     bluetooth.closeAdapter({
    *
    */

  closeAdapter(quick_object) {
    return swan.closeBluetoothAdapter(quick_object)
  },
  /** bluetooth.getAdapterState */

  getAdapterState(quick_object) {
    return swan.getBluetoothAdapterState(quick_object)
  },
  /** bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */

  set onadapterstatechange(callback) {
    return swan.onBluetoothAdapterStateChange(callback)
  },
  /** bluetooth.startDevicesDiscovery */

  startDevicesDiscovery(quick_object) {
    return swan.startBluetoothDevicesDiscovery(quick_object)
  },
  /** bluetooth.stopDevicesDiscovery */

  stopDevicesDiscovery(quick_object) {
    return swan.stopBluetoothDevicesDiscovery(quick_object)
  },
  /** bluetooth.getDevices */

  getDevices(quick_object) {
    return swan.getBluetoothDevices(quick_object)
  },
  /** bluetooth.ondevicefound */

  set ondevicefound(callback) {
    return swan.onBluetoothDeviceFound(callback)
  },
  /** bluetooth.getConnectedDevices */

  getConnectedDevices(quick_object) {
    return swan.getConnectedBluetoothDevices(quick_object)
  },
  /** bluetooth.createBLEConnection */

  createBLEConnection(quick_object) {
    return swan.createBLEConnection(quick_object)
  },
  /** bluetooth.closeBLEConnection */

  closeBLEConnection(quick_object) {
    return swan.closeBLEConnection(quick_object)
  },
  /** bluetooth.getBLEDeviceServices */

  getBLEDeviceServices(quick_object) {
    return swan.getBLEDeviceServices(quick_object)
  },
  /** bluetooth.getBLEDeviceCharacteristics */

  getBLEDeviceCharacteristics(quick_object) {
    return swan.getBLEDeviceCharacteristics(quick_object)
  },
  /** bluetooth.readBLECharacteristicValue */

  readBLECharacteristicValue(quick_object) {
    return swan.readBLECharacteristicValue(quick_object)
  },
  /** bluetooth.writeBLECharacteristicValue */

  writeBLECharacteristicValue(quick_object) {
    return swan.writeBLECharacteristicValue(quick_object)
  },
  /** bluetooth.notifyBLECharacteristicValueChange */

  notifyBLECharacteristicValueChange(quick_object) {
    return swan.notifyBLECharacteristicValueChange(quick_object)
  },
  /** bluetooth.onblecharacteristicvaluechange */

  set onblecharacteristicvaluechange(callback) {
    return swan.onBLECharacteristicValueChange(callback)
  },
  /** bluetooth.onbleconnectionstatechange  */

  set onbleconnectionstatechange(callback) {
    return swan.onBLEConnectionStateChange(callback)
  }
}
