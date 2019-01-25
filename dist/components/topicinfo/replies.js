"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _date = require("../../utils/date.js");

var _user = require("../../actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isweapp = true; //小程序环境

var Replies = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Replies, _BaseComponent);

  function Replies() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Replies);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Replies.__proto__ || Object.getPrototypeOf(Replies)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "replies", "user"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Replies, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Replies.prototype.__proto__ || Object.getPrototypeOf(Replies.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "admire",
    value: function admire(reply) {
      var _this2 = this;

      var user = this.props.user;

      (0, _user.validateUser)(user).then(function (result) {
        if (result) {
          _this2.props.onAdmire && _this2.__triggerPropsFn("onAdmire", [null].concat([reply]));
        }
      });
    }
  }, {
    key: "replyToReply",
    value: function replyToReply(reply) {
      var _this3 = this;

      var user = this.props.user;

      (0, _user.validateUser)(user).then(function (result) {
        if (result) {
          _this3.props.onReplyToReply && _this3.__triggerPropsFn("onReplyToReply", [null].concat([reply]));
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var replies = this.__props.replies;

      var loopArray0 = replies.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp2 = (0, _date.myTimeToLocal)(item.$original.create_at);
        var $loopState__temp4 = item.$original.is_uped ? "/assets/img/myzan.png" : "/assets/img/zan.png";
        var $loopState__temp6 = "/assets/img/zhuan.png";
        return {
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $loopState__temp6: $loopState__temp6,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        replies: replies
      });
      return this.__state;
    }
  }]);

  return Replies;
}(_index.Component), _class.properties = {
  "user": {
    "type": null,
    "value": null
  },
  "onAdmire": {
    "type": null,
    "value": null
  },
  "__fn_onAdmire": {
    "type": null,
    "value": null
  },
  "onReplyToReply": {
    "type": null,
    "value": null
  },
  "__fn_onReplyToReply": {
    "type": null,
    "value": null
  },
  "replies": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["admire", "replyToReply"], _temp2);
exports.default = Replies;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Replies));