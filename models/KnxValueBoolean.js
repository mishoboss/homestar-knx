/*
 *  KnxValueBoolean.js
 *
 *  David Janes
 *  IOTDB
 *  2015-11-29
 */

var iotdb = require("iotdb");

exports.binding = {
    bridge: require('../KNXBridge').Bridge,
    model: require('./knx-value-boolean.json'),
    discover: false,
};
