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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicInfo = (_temp2 = _class = function (_BaseComponent) {
  _inherits(TopicInfo, _BaseComponent);

  function TopicInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopicInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopicInfo.__proto__ || Object.getPrototypeOf(TopicInfo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "topicinfo", "selfPublish"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicInfo, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(TopicInfo.prototype.__proto__ || Object.getPrototypeOf(TopicInfo.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "getTitle",
    value: function getTitle(title) {
      return title;
    }
  }, {
    key: "delTopic",
    value: function delTopic(topicinfo) {
      this.props.onDelTopic && this.__triggerPropsFn("onDelTopic", [null].concat([topicinfo]));
    }
    //编辑话题

  }, {
    key: "editTopic",
    value: function editTopic(topicinfo) {
      _index2.default.redirectTo({ url: '/pages/publish/publish?edit=1' });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          topicinfo = _props.topicinfo,
          selfPublish = _props.selfPublish;

      var anonymousState__temp = (0, _date.myTimeToLocal)(topicinfo.create_at);
      var anonymousState__temp2 = selfPublish ? "/assets/img/del.png" : null;
      var anonymousState__temp3 = selfPublish ? "/assets/img/edit.png" : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        topicinfo: topicinfo,
        selfPublish: selfPublish
      });
      return this.__state;
    }
  }]);

  return TopicInfo;
}(_index.Component), _class.properties = {
  "onDelTopic": {
    "type": null,
    "value": null
  },
  "__fn_onDelTopic": {
    "type": null,
    "value": null
  },
  "topicinfo": {
    "type": null,
    "value": null
  },
  "selfPublish": {
    "type": null,
    "value": null
  }
}, _class.$$events = ["delTopic", "editTopic"], _temp2);


TopicInfo.defalutProps = {
  topicinfo: {}
};

exports.default = TopicInfo;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(TopicInfo));