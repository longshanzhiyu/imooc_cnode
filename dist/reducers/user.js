'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = user;

var _cache = require('../utils/cache.js');

var cacheKey = 'cnode-user-key';
var user_cache = (0, _cache.getCache)(cacheKey) ? (0, _cache.getCache)(cacheKey) : {}; //读取缓存
var USER_STATE = _extends({}, user_cache);

function user() {
  var prestate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'loginSuccess':
      var successState = _extends({}, prestate, action);
      (0, _cache.setCache)(cacheKey, successState); //设置到缓存中
      return successState;
    case 'loginFail':
      var failState = _extends({}, prestate, { accesstoken: action.accesstoken, loginname: action.loginname });
      (0, _cache.setCache)(cacheKey, failState); //设置到缓存中
      return failState;
    default:
      return _extends({}, prestate);
  }
}