"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("../npm/redux/lib/redux.js");

var _menu = require("./menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _topic = require("./topic.js");

var _topic2 = _interopRequireDefault(_topic);

var _user = require("./user.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  menu: _menu2.default, topiclist: _topic2.default, user: _user2.default
});