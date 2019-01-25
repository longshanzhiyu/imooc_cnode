"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJSON = getJSON;
exports.postJSON = postJSON;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("../npm/@tarojs/async-await/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getJSON(url, data) {
  _index2.default.showLoading();
  return _index2.default.request({ url: url, data: data, method: 'GET' }).then(function (result) {
    _index2.default.hideLoading();
    return result;
  });
}

function postJSON(url, data) {
  _index2.default.showLoading();
  return _index2.default.request({ url: url, data: data, method: 'POST' }).then(function (result) {
    _index2.default.hideLoading();
    return result;
  });
}