'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showDrawer = showDrawer;
exports.hideDrawer = hideDrawer;
exports.changeCata = changeCata;

var _topiclist = require('./topiclist.js');

//显示抽屉
function showDrawer() {
  return function (dispatch) {
    dispatch({ type: 'showDrawer' });
  };
}

//隐藏抽屉
function hideDrawer() {
  return function (dispatch) {
    dispatch({ type: 'hideDrawer' });
  };
}

//切换当前分类
function changeCata(cata) {
  return function (dispatch) {
    dispatch({ type: 'changeCata', currentCata: cata });
    dispatch((0, _topiclist.getTopicList)({ tab: cata.key, page: 1, limit: 20 }));
  };
}