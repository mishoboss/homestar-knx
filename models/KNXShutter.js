/*
 *  KNXShutter.js
 *
 *  David Janes
 *  IOTDB
 *  2015-11-30
 */

var iotdb = require("iotdb");

exports.binding = {
    bridge: require('../KNXBridge').Bridge,
    model: require('./KnxShutter.json'),
    discover: false,
    connectd: {
        pre_out: function (paramd) {
            var cookd = {};
            var max = 255;  // this should be soft

            if (paramd.cookd.position !== undefined) {
                cookd.position = max - Math.round(paramd.cookd.position * max / 100);
            } else if (paramd.cookd.open !== undefined) {
                cookd.position = 0;
            } else if (paramd.cookd.close !== undefined) {
                cookd.position = max;
            }

            return cookd;
        },
    },
};
