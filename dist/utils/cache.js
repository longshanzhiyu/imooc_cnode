"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.setCache = setCache;
exports.getCache = getCache;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//设置缓存
function setCache(key, value) {
  var params = value;
  if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
    params = JSON.stringify(value);
  }
  _index2.default.setStorageSync(key, params);
}
//读取缓存
function getCache(key) {
  var result = _index2.default.getStorageSync(key);
  if (result) {
    result = JSON.parse(result);
  } else {
    return null;
  }
  return result;
}