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

var _menu = require("../../actions/menu.js");

var _user = require("../../actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = "/assets/img/login.png";

var Menu = (_dec = (0, _index3.connect)(function (store) {
  return _extends({}, store.menu, { user: store.user });
}, function (dispatch) {
  return {
    showMenu: function showMenu() {
      dispatch((0, _menu.showDrawer)());
    },
    hideDrawer: function hideDrawer() {
      dispatch((0, _menu.hideDrawer)());
    },
    changeCata: function changeCata(cata) {
      dispatch((0, _menu.changeCata)(cata));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Menu, _BaseComponent);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "showDrawer", "items", "Login", "showMenu", "cataData", "currentCata", "changeCata", "hideDrawer", "user"], _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Menu.prototype.__proto__ || Object.getPrototypeOf(Menu.prototype), "_constructor", this).call(this, props);
    }

    //显示抽屉

  }, {
    key: "showDrawer",
    value: function showDrawer() {
      this.props.showMenu && this.props.showMenu();
    }
  }, {
    key: "getItems",
    value: function getItems(cataData) {
      return cataData.map(function (item) {
        return item.value;
      });
    }

    //点击分类时触发

  }, {
    key: "clickCata",
    value: function clickCata(index) {
      var cataData = this.props.cataData;

      var clickCata = cataData[index]; //获取点击项的数据
      if (clickCata.key !== this.props.currentCata.key) {
        this.props.changeCata && this.props.changeCata(clickCata); //点击分类 触发切换分类方法
      }
    }
    //关闭抽屉时触发

  }, {
    key: "closeDrawer",
    value: function closeDrawer() {
      this.props.hideDrawer && this.props.hideDrawer();
    }
  }, {
    key: "toUser",
    value: function toUser() {
      var user = this.props.user;

      (0, _user.validateUser)(user).then(function (result) {
        if (result) {
          //成功 用户详情
          _index2.default.navigateTo({ url: '/pages/user/user' });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          showDrawer = _props.showDrawer,
          cataData = _props.cataData;

      var items = this.getItems(cataData); //获取分类列表
      var anonymousState__temp = "/assets/img/cata.png";
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        items: items,
        Login: Login
      });
      return this.__state;
    }
  }]);

  return Menu;
}(_index.Component), _class2.properties = {
  "showMenu": {
    "type": null,
    "value": null
  },
  "cataData": {
    "type": null,
    "value": null
  },
  "currentCata": {
    "type": null,
    "value": null
  },
  "changeCata": {
    "type": null,
    "value": null
  },
  "hideDrawer": {
    "type": null,
    "value": null
  },
  "user": {
    "type": null,
    "value": null
  },
  "showDrawer": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["closeDrawer", "clickCata", "showDrawer", "toUser"], _temp2)) || _class);
exports.default = Menu;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Menu));