'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = topiclist;

var TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: [],
  topicinfo: {},
  replies: [],
  admireState: false //点赞状态
};

function topiclist() {
  var prestate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TOPIC_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'admireSuccess':
      return _extends({}, prestate, { admireState: !prestate.admireState });
    case 'getTopicInfo':
      return _extends({}, prestate, { replies: action.infoData.replies, topicinfo: _extends({}, action.infoData, { replies: null }) });
    case 'getTopicList':
      return _extends({}, prestate, { list: action.list, page: 1 });
    case 'appendTopicList':
      return _extends({}, prestate, { list: prestate.list.concat(action.list), page: action.page });
    default:
      return _extends({}, prestate);
  }
}