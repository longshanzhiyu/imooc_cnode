import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Text, View, Image, RichText } from '@tarojs/components';

import { myTimeToLocal } from '../../utils/date';
import './replies.less';
import { validateUser } from '../../actions/user';

const isweapp = process.env.TARO_ENV == "weapp"; //小程序环境

class Replies extends Component {

  admire(reply) {
    let { user } = this.props;
    validateUser(user).then(result => {
      if (result) {
        this.props.onAdmire && this.props.onAdmire(reply);
      }
    });
  }

  replyToReply(reply) {
    let { user } = this.props;
    validateUser(user).then(result => {
      if (result) {
        this.props.onReplyToReply && this.props.onReplyToReply(reply);
      }
    });
  }

  render() {
    let { replies } = this.props;
    return <View className="topicinfo-replies">{replies.map((item, index) => {
        return <View key={item.id} className="topicinfo-reply">
					<Image className="topicinfo-reply-image" src={item.author ? item.author.avatar_url : ''} />
					<View className="topicinfo-reply-right">
						<View className="topicinfo-reply-right-body">
							<View className="topicinfo-reply-right-pie">
								<Text className="loginname">{item.author ? item.author.loginname : ''}</Text>
								<Text className="floor">{index + 1 + '楼'}</Text>
								<Text className="time">{myTimeToLocal(item.create_at)}</Text>
							</View>
							<View className="topicinfo-reply-right-content">
							{isweapp ? <RichText nodes={item.content} /> : <View dangerouslySetInnerHTML={{ __html: item.content }}></View>}
							</View>
						</View>
						<View className="topicinfo-reply-right-zan">
							<Image onClick={this.admire.bind(this, item)} className="topicinfo-reply-image" src={item.is_uped ? require('../../assets/img/myzan.png') : require('../../assets/img/zan.png')} />
							<Text>{item.ups.length}</Text>
							<Image onClick={this.replyToReply.bind(this, item)} className="topicinfo-reply-image" src={require('../../assets/img/zhuan.png')} />
						</View>
					</View>
				</View>;
      })}</View>;
  }
}

export default Replies;