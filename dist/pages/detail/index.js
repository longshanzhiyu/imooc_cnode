"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _topiclist = require("../../actions/topiclist.js");

var _user = require("../../actions/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iswebapp = false; //判断是否是小程序

var Detail = (_dec = (0, _index3.connect)(function (store) {
  return { admireState: store.topiclist.admireState, user: store.user, topicinfo: store.topiclist.topicinfo, replies: store.topiclist.replies };
}, function (dispatch) {
  return {
    getTopicInfo: function getTopicInfo(params) {
      dispatch((0, _topiclist.getTopicInfo)(params));
    }
    // ,admireTopic(params){
    // 	dispatch(admireTopic(params))
    // }

  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["showReplyContent", "selfPublish", "topicinfo", "user", "replies", "getTopicInfo"], _this.config = {
      navigationBarTitleText: '话题详情'
    }, _this.state = {
      showReplyContent: false //显示回复组件
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).call(this, props);
    }

    // constructor(){
    // 	super();
    // 	this.state={

    // 	}
    // }

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.getDetail();
    }
  }, {
    key: "admire",
    value: function admire(reply) {
      var _this2 = this;

      var user = this.props.user;

      var params = { replyid: reply.id, accesstoken: user.accesstoken };
      // this.props.admireTopic&&this.props.admireTopic(params);
      var result = (0, _topiclist.admireTopic)(params).then(function (data) {
        if (data && data.success) {
          //点赞成功或者取消点赞成功
          _this2.getDetail();
        }
      });
    }
  }, {
    key: "getDetail",
    value: function getDetail() {
      var user = this.props.user;

      var params = { id: this.$router.params.topicid, mdrender: true, accesstoken: user.accesstoken };
      this.props.getTopicInfo && this.props.getTopicInfo(params);
    }

    // componentWillReceiveProps(nextProps) {
    // 	if (this.props.admireState!=nextProps.admireState) {
    // 		//发生变化 请求数据
    // 		this.getDetail();
    // 	}
    // }

  }, {
    key: "onCancelReplyContent",
    value: function onCancelReplyContent() {}
  }, {
    key: "reply",
    value: function reply() {
      var _this3 = this;

      (0, _user.validateUser)(this.props.user).then(function (result) {
        if (result) {
          _this3.setState({ showReplyContent: true });
        }
      });
    }
  }, {
    key: "closeReplyContent",
    value: function closeReplyContent() {
      this.setState({ showReplyContent: false });
    }

    //评论
    // replyContent(){
    // 	let value = iswebapp?arguments[1]:arguments[0]; //此处会出现问题（参数移位） 当使用ReplyContent命名函数的时候，与包名重复，会产生参数问题，如果改为不与包名重复，此处不需要
    // 	let {user} = this.props;
    // 	let params = {content:value,accesstoken:user.accesstoken, topicid:this.$router.params.topicid};
    // 	replyContent(params).then(result=>{
    // 		if (result.success) {
    // 			this.getDetail();
    // 			this.closeReplyContent();
    // 		}
    // 	})
    // }

  }, {
    key: "replyContent",
    value: function replyContent(content) {
      var _this4 = this;

      // let value = iswebapp?arguments[1]:arguments[0]; //此处会出现问题 当使用ReplyContent命名函数的时候，与包名重复，会产生参数问题，如果改为不与包名重复，此处不需要
      var user = this.props.user;
      var currentReply = this.state.currentReply;

      var reply_id = currentReply ? currentReply.id : null;
      var preName = currentReply ? '@' + currentReply.author.loginname + '  ' : ''; //评论人的昵称
      var params = { reply_id: reply_id, content: preName + content, accesstoken: user.accesstoken, topicid: this.$router.params.topicid };
      (0, _topiclist.replyContent)(params).then(function (result) {
        if (result.success) {
          _this4.getDetail();
          _this4.closeReplyContent();
        }
      });
    }
    //提供给自组件使用的函数

  }, {
    key: "replyToReply",
    value: function replyToReply(reply) {
      this.setState({ currentReply: reply, showReplyContent: true });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      ;

      var _props = this.__props,
          topicinfo = _props.topicinfo,
          replies = _props.replies,
          user = _props.user;
      var showReplyContent = this.__state.showReplyContent;

      var selfPublish = topicinfo.author && user.loginname == topicinfo.author.loginname;
      Object.assign(this.__state, {
        selfPublish: selfPublish,
        topicinfo: topicinfo,
        user: user,
        replies: replies
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class2.properties = {
  "user": {
    "type": null,
    "value": null
  },
  "getTopicInfo": {
    "type": null,
    "value": null
  },
  "topicinfo": {
    "type": null,
    "value": null
  },
  "replies": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["replyContent", "closeReplyContent", "replyToReply", "admire", "reply"], _temp2)) || _class);
exports.default = Detail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));