"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = menu;
var MENU_STATE = {
  cataData: [{ key: "all", value: "全部" }, { key: "good", value: "精华" }, { key: "share", value: "分享" }, { key: "ask", value: "问答" }, { key: "job", value: "招聘" }, { key: "dev", value: "客户端测试" }],
  currentCata: { key: "all", value: "全部" },
  showDrawer: false
};

function menu() {
  var prestate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MENU_STATE;
  var action = arguments[1];

  switch (action.type) {
    //显示分类抽屉
    case 'showDrawer':
      return _extends({}, prestate, { showDrawer: true });
    //隐藏抽屉
    case 'hideDrawer':
      return _extends({}, prestate, { showDrawer: false });
    //点击抽屉 触发切换分类
    case 'changeCata':
      return _extends({}, prestate, { currentCata: action.currentCata });
    default:
      return _extends({}, prestate);
  }
}