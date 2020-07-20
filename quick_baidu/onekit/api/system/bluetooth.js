module.exports = {
  /* bluetooth.openAdapter*/
  openAdapter(quick_object) {
    return console.log("bluetooth.openAdapter暂不支持！")
  }
  /**
    bluetooth.closeAdapter({
   *
   */
  ,
  closeAdapter(quick_object) {
    return console.log("bluetooth.closeAdapter暂不支持！")
  }
  /**bluetooth.getAdapterState */
  ,
  getAdapterState(quick_object) {
    return console.log("bluetooth.getAdapterState暂不支持！")
  }

  /**bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */
  ,
  onadapterstatechange() {
    return swan.onBluetoothAdapterStateChange()
  }
  /**bluetooth.startDevicesDiscovery */
  ,
  startDevicesDiscovery(quick_object) {
    return console.log("bluetooth.startDevicesDiscovery暂不支持！")
  }

  /** bluetooth.stopDevicesDiscovery */
  ,
  stopDevicesDiscovery(quick_object) {
    return console.log("bluetooth.stopDevicesDiscovery暂不支持！")
  }

  /**bluetooth.getDevices */
  ,
  getDevices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    //////////////////////////////////
    var swan_object = {};
    swan_object.success = function(swan_res) {
      var quick_res = {
        devices: swan_res.devices
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    return swan.getBluetoothDevices(swan_object)
  }

  /**bluetooth.ondevicefound */
  ,
  ondevicefound(quick_object) {
    return swan.onBluetoothDeviceFound(function(res) {})
  }

  /**bluetooth.getConnectedDevices */
  ,
  getConnectedDevices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_services = quick_object.services;
    //////////////////////////////////
    return swan.onBluetoothDeviceFound(function(callback) {
      quick_services.devices = callback.devices;
    })
  }

  /**bluetooth.createBLEConnection */
  ,
  createBLEConnection(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_timeout = quick_object.timeout;
    ////////////////////////////////////
    var swan_object = {};
    if (quick_deviceId) {
      swan_object.deviceId = quick_deviceId;
    };
    if (quick_timeout) {
      swan_object.timeout = quick_timeout;
    };

    swan_object.success = function(swan_res) {
      if (quick_success) {
        quick_success(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    return swan.createBLEConnection(swan_object)
  }

  /**bluetooth.closeBLEConnection */
  ,
  closeBLEConnection(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    ////////////////////////////////////
    var swan_object = {};
    if (quick_deviceId) {
      swan_object.deviceId = quick_deviceId;
    };
    swan_object.success = function(swan_res) {
      if (quick_success) {
        quick_success(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    return swan.closeBLEConnection(swan_object)
  }

  /**bluetooth.getBLEDeviceServices */
  ,
  getBLEDeviceServices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    ////////////////////////////////////
    var swan_object = {};
    if (quick_deviceId) {
      swan_object.deviceId = quick_deviceId;
    };
    swan_object.success = function(swan_res) {
      var quick_res = {
        services: swan_res.services
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    return swan.getBLEDeviceServices(swan_object)
  }

  /**bluetooth.getBLEDeviceCharacteristics */
  ,
  getBLEDeviceCharacteristics(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    ////////////////////////////////////
    var swan_object = {};
    if (quick_deviceId) {
      swan_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      swan_object.serviceId = quick_serviceId
    };
    swan_object.success = function(swan_res) {
      var quick_res = {
        characteristics: swan_res.characteristics
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    return swan.getBLEDeviceCharacteristics(swan_object)
  }

  /**bluetooth.readBLECharacteristicValue */
  ,
  readBLECharacteristicValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    ////////////////////////////////////
    var swan_object = {};
    if (quick_deviceId) {
      swan_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      swan_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      swan_object.characteristicId = quick_characteristicId
    }
    swan_object.success = function(swan_res) {
      if (quick_success) {
        quick_success(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    return swan.readBLECharacteristicValue(swan_object)
  }

  /**bluetooth.writeBLECharacteristicValue */
  ,
  writeBLECharacteristicValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_value = quick_object.value;
    ////////////////////////////////////
    var swan_object = {};
    if (quick_deviceId) {
      swan_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      swan_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      swan_object.characteristicId = quick_characteristicId
    }
    if (quick_value) {
      swan_object.value = quick_value
    }
    swan_object.success = function(swan_res) {
      if (quick_success) {
        quick_success(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    return swan.writeBLECharacteristicValue(swan_object)
  }
  /**bluetooth.notifyBLECharacteristicValueChange */
  ,
  notifyBLECharacteristicValueChange(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_state = quick_object.state;
    ////////////////////////////////////////
    var swan_object = {};
    if (quick_deviceId) {
      swan_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      swan_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      swan_object.characteristicId = quick_characteristicId
    }
    if (quick_state) {
      swan_object.state = quick_state
    }
    swan_object.success = function(swan_res) {
      if (quick_success) {
        quick_success(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    swan_object.fail = function(swan_res) {
      if (quick_fail) {
        quick_fail(swan_res);
      }
      if (quick_complete) {
        quick_complete(swan_res);
      }
    };
    return swan.notifyBLECharacteristicValueChange(swan_object)
  }

  /**bluetooth.onblecharacteristicvaluechange */
  ,
  onblecharacteristicvaluechange() {
    return console.log("onblecharacteristicvaluechange暂不支持！")
  }
  /**bluetooth.onbleconnectionstatechange  */
  ,
  onbleconnectionstatechange() {
    return swan.onBLEConnectionStateChange(function(callback) {})
  }
}