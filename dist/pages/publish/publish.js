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

var Publish = (_dec = (0, _index3.connect)(function (store) {
  return _extends({}, store.menu, store.user, { topicinfo: store.topiclist.topicinfo });
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Publish, _BaseComponent);

  function Publish() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Publish);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Publish.__proto__ || Object.getPrototypeOf(Publish)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["topicinfo", "cataData", "selectCata", "title", "content", "isEdit", "accesstoken"], _this.state = {
      selectCata: null,
      title: null,
      content: null,
      isEdit: false
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Publish, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Publish.prototype.__proto__ || Object.getPrototypeOf(Publish.prototype), "_constructor", this).call(this, props);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var edit = this.$router.params.edit;

      this.setState({ isEdit: edit == '1' }, function () {
        if (_this2.state.isEdit) {
          var topicinfo = _this2.props.topicinfo;

          _this2.setState({ topicinfo: topicinfo, title: topicinfo.title, content: topicinfo.content });
        }
      });
    }
  }, {
    key: "changeCata",
    value: function changeCata(event) {
      var cataData = this.props.cataData;

      this.setState({ selectCata: cataData[event.detail.value] });
    }
    //标题改变

  }, {
    key: "titleChange",
    value: function titleChange(event) {
      this.setState({ title: event.target.value });
    }
    //内容改变

  }, {
    key: "contentChange",
    value: function contentChange(event) {
      this.setState({ content: event.target.value });
    }
    //提交

  }, {
    key: "submitTopic",
    value: function submitTopic() {
      var _state = this.state,
          title = _state.title,
          content = _state.content,
          selectCata = _state.selectCata,
          isEdit = _state.isEdit;
      var _props = this.props,
          accesstoken = _props.accesstoken,
          topicinfo = _props.topicinfo;

      if (title && content && selectCata) {
        var params = { tab: 'dev', title: title, content: content, accesstoken: accesstoken, topic_id: topicinfo.id };
        if (isEdit) {
          (0, _topiclist.updateTopic)(params).then(function (result) {
            if (result) {
              _index2.default.navigateBack();
            }
          });
        } else {
          (0, _topiclist.submitTopic)(params).then(function (result) {
            if (result) {
              _index2.default.redirectTo({ url: '/pages/user/user' });
            }
          });
        }
      } else {
        _index2.default.showToast({ title: '分类或者标题内容都不能为空！', icon: 'none' });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var cataData = this.__props.cataData;
      var _state2 = this.__state,
          selectCata = _state2.selectCata,
          topicinfo = _state2.topicinfo;

      Object.assign(this.__state, {
        topicinfo: topicinfo,
        cataData: cataData
      });
      return this.__state;
    }
  }]);

  return Publish;
}(_index.Component), _class2.properties = {
  "topicinfo": {
    "type": null,
    "value": null
  },
  "cataData": {
    "type": null,
    "value": null
  },
  "accesstoken": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["titleChange", "contentChange", "changeCata", "submitTopic"], _temp2)) || _class);
exports.default = Publish;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Publish, true));