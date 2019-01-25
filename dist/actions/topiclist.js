"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTopic = exports.submitTopic = exports.replyContent = exports.admireTopic = undefined;

//点赞话题回复
// export function admireTopic(params){
// 	return async (dispatch)=>{
// 		let result = await postJSON(api.upreply+params.replyid+'/ups', params);
// 		if (result&&result.data&&result.data.success) {
// 			//成功点赞
// 			dispatch({type:'admireSuccess'}); //点赞成功
// 		}
// 		else {
// 			//点赞失败
// 			Taro.showToast({title:'点赞失败!',icon:'none'});
// 		}
// 	}
// }

var admireTopic = exports.admireTopic = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
    var result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _request.postJSON)(_api2.default.upreply + params.replyid + '/ups', params);

          case 2:
            result = _context4.sent;

            if (!(result && result.data && result.data.success)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", result.data);

          case 7:
            //点赞失败
            _index2.default.showToast({ title: '点赞失败!', icon: 'none' });

          case 8:
            return _context4.abrupt("return", false);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function admireTopic(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var replyContent = exports.replyContent = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
    var result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _request.postJSON)(_api2.default.replytopic + params.topicid + '/replies', params);

          case 2:
            result = _context5.sent;

            if (!(result && result.data && result.data.success)) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", result.data);

          case 7:
            //评论失败
            _index2.default.showToast({ title: '评论失败!', icon: 'none' });

          case 8:
            return _context5.abrupt("return", false);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function replyContent(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
//发布话题


var submitTopic = exports.submitTopic = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params) {
    var result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _request.postJSON)(_api2.default.createtopic, params);

          case 2:
            result = _context6.sent;

            if (!(result && result.data && result.data.success)) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", result.data);

          case 7:
            _index2.default.showToast({ title: '发布话题失败!', icon: 'none' });

          case 8:
            return _context6.abrupt("return", false);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function submitTopic(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
//更新话题


var updateTopic = exports.updateTopic = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(params) {
    var result;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _request.postJSON)(_api2.default.updatetopic, params);

          case 2:
            result = _context7.sent;

            if (!(result && result.data && result.data.success)) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", result.data);

          case 7:
            _index2.default.showToast({ title: '更新话题失败!', icon: 'none' });

          case 8:
            return _context7.abrupt("return", false);

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function updateTopic(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getTopicList = getTopicList;
exports.getNextList = getNextList;
exports.getTopicInfo = getTopicInfo;

var _request = require("../utils/request.js");

var _api = require("../constants/api.js");

var _api2 = _interopRequireDefault(_api);

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//请求首页数据
function getTopicList(params) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _request.getJSON)(_api2.default.gettopics, params);

            case 2:
              result = _context.sent;

              if (result && result.data) {
                if (result.data.success) {
                  dispatch({ type: 'getTopicList', list: result.data.data });
                }
              }

            case 4:
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
//请求下页数据
function getNextList(params) {
  var _this2 = this;

  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _request.getJSON)(_api2.default.gettopics, params);

            case 2:
              result = _context2.sent;

              if (result && result.data) {
                if (result.data.success) {
                  if (result.data.data.length > 0) {
                    dispatch({ type: 'appendTopicList', list: result.data.data, page: params.page });
                  }
                }
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
}

//请求话题详情
function getTopicInfo(params) {
  var _this3 = this;

  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _request.getJSON)(_api2.default.gettopicinfo + params.id, params);

            case 2:
              result = _context3.sent;

              if (result && result.data && result.data.success) {
                dispatch({ type: 'getTopicInfo', infoData: result.data.data });
              } else {
                console.log('请求话题详情失败！');
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}