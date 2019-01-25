"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _topiclist = require("../../actions/topiclist.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopicList = (_dec = (0, _index3.connect)(function (store) {
  return _extends({}, store.topiclist, { currentCata: store.menu.currentCata });
}, function (dispatch) {
  return {
    getTopicList: function getTopicList(params) {
      dispatch((0, _topiclist.getTopicList)(params));
    },
    getNextList: function getNextList(params) {
      dispatch((0, _topiclist.getNextList)(params));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(TopicList, _BaseComponent);

  function TopicList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopicList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopicList.__proto__ || Object.getPrototypeOf(TopicList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "list", "page", "limit", "currentCata", "getTopicList", "getNextList"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopicList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(TopicList.prototype.__proto__ || Object.getPrototypeOf(TopicList.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          page = _props.page,
          limit = _props.limit,
          currentCata = _props.currentCata;

      this.props.getTopicList && this.props.getTopicList({ page: page, limit: limit, tab: currentCata.key });
    }
    //触发分页请求

  }, {
    key: "onScrollToLower",
    value: function onScrollToLower() {
      var _props2 = this.props,
          page = _props2.page,
          limit = _props2.limit,
          currentCata = _props2.currentCata;

      this.props.getNextList && this.props.getNextList({ page: page + 1, limit: limit, tab: currentCata.key });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var list = this.__props.list;

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: '650PX' });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        list: list
      });
      return this.__state;
    }
  }]);

  return TopicList;
}(_index.Component), _class2.properties = {
  "page": {
    "type": null,
    "value": null
  },
  "limit": {
    "type": null,
    "value": null
  },
  "currentCata": {
    "type": null,
    "value": null
  },
  "getTopicList": {
    "type": null,
    "value": null
  },
  "getNextList": {
    "type": null,
    "value": null
  },
  "list": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["onScrollToLower"], _temp2)) || _class);
exports.default = TopicList;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(TopicList));