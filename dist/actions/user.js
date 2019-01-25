"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUser = exports.getUserInfo = undefined;

//获取用户信息
var getUserInfo = exports.getUserInfo = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _request.getJSON)(_api2.default.getuserinfo + params.loginname);

          case 2:
            result = _context2.sent;

            if (!(result && result.data && result.data.success)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", result.data);

          case 7:
            _index2.default.showToast({ title: '拉去用户信息失败', icon: 'none' });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUserInfo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//验证用户信息


var validateUser = exports.validateUser = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(params && params.accesstoken)) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", true);

          case 2:
            _index2.default.navigateTo({ url: '/pages/login/login' });
            return _context3.abrupt("return", false);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function validateUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.accessUserToken = accessUserToken;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../constants/api.js");

var _api2 = _interopRequireDefault(_api);

var _request = require("../utils/request.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//验证accesstoken
function accessUserToken(params) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _request.postJSON)(_api2.default.checkusertoken, params);

            case 2:
              result = _context.sent;

              if (!(result && result.data && result.data.success)) {
                _context.next = 8;
                break;
              }

              dispatch({ type: "loginSuccess", accesstoken: params.accesstoken, loginname: result.data.loginname, avatar_url: result.data.avatar_url });
              return _context.abrupt("return", result.data);

            case 8:
              dispatch({ type: "loginFail", accesstoken: null, loginname: null, avatar_url: null });

            case 9:
              return _context.abrupt("return", false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}