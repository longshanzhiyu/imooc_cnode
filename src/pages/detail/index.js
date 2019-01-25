import Taro, {Component} from '@tarojs/taro';
import {Text, Button, View} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopicInfo, admireTopic, replyContent} from '../../actions/topiclist';
import TopicInfo from '../../components/topicinfo/topicinfo';
import Replies from '../../components/topicinfo/replies';
import ReplyContent from '../../components/topicinfo/replycontent';
import {validateUser} from '../../actions/user'
import './detail.less'; 

const iswebapp = process.env.TARO_ENV=='webapp';	//判断是否是小程序

@connect(function(store){
	return {admireState:store.topiclist.admireState,user:store.user,topicinfo:store.topiclist.topicinfo, replies:store.topiclist.replies}
},function(dispatch){
	return {getTopicInfo(params){
		dispatch(getTopicInfo(params))
	}
	// ,admireTopic(params){
	// 	dispatch(admireTopic(params))
	// }
  }
})
class Detail extends Component {

	// constructor(){
	// 	super();
	// 	this.state={

	// 	}
	// }

	config = {
    	navigationBarTitleText: '话题详情'
  	}

  	state={
  		showReplyContent:false //显示回复组件
  	}

	componentWillMount(){
		this.getDetail();
	}

	admire(reply){
		let {user} = this.props;
		let params = {replyid:reply.id, accesstoken:user.accesstoken};
		// this.props.admireTopic&&this.props.admireTopic(params);
		let result = admireTopic(params).then(data=>{
			if (data&&data.success) {
				//点赞成功或者取消点赞成功
				this.getDetail();
			}
		});
	}

	getDetail(){
		let {user} = this.props;
		let params = {id:this.$router.params.topicid,mdrender:true,accesstoken:user.accesstoken};
		this.props.getTopicInfo&&this.props.getTopicInfo(params);
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (this.props.admireState!=nextProps.admireState) {
	// 		//发生变化 请求数据
	// 		this.getDetail();
	// 	}
	// }

	onCancelReplyContent(){

	}

	reply(){
		validateUser(this.props.user).then(result=>{
			if (result) {
				this.setState({showReplyContent:true});
			}
		})
		
	}

	closeReplyContent(){
		this.setState({showReplyContent:false});
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

	replyContent(content){
		// let value = iswebapp?arguments[1]:arguments[0]; //此处会出现问题 当使用ReplyContent命名函数的时候，与包名重复，会产生参数问题，如果改为不与包名重复，此处不需要
		let {user} = this.props;
		let {currentReply} = this.state;
		let reply_id = currentReply?currentReply.id:null;
		let preName = currentReply?'@'+currentReply.author.loginname+'  ':'';//评论人的昵称
		let params = {reply_id:reply_id,content:preName+content,accesstoken:user.accesstoken, topicid:this.$router.params.topicid};
		replyContent(params).then(result=>{
			if (result.success) {
				this.getDetail();
				this.closeReplyContent();
			}
		})
	}
	//提供给自组件使用的函数
	replyToReply(reply) {
		this.setState({currentReply:reply, showReplyContent:true})
	}

	render(){
		let {topicinfo, replies,user} = this.props;
		let {showReplyContent} = this.state; 
		let  selfPublish=topicinfo.author&&user.loginname==topicinfo.author.loginname;
		return (<View className='detail'>
					{showReplyContent?<ReplyContent onOKReplyContent={this.replyContent.bind(this)} onCancelReplyContent={this.closeReplyContent.bind(this)}/>:null}
					<TopicInfo selfPublish={selfPublish} topicinfo={topicinfo} />
					<Replies user={user} onReplyToReply={this.replyToReply.bind(this)} replies={replies} onAdmire={this.admire.bind(this)} />
					<Button className='replyBtn' onClick={this.reply.bind(this)}>回复</Button>
				</View>)
	}
} 

export default Detail; 