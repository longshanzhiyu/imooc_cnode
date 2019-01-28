import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Text, View, Image } from '@tarojs/components';
import './panel.less';
import { myTimeToLocal } from '../../utils/date';

class Panel extends Component {

  toDetail(item) {
    Taro.navigateTo({ url: '/pages/detail/index?topicid=' + item.id });
  }

  render() {
    let { listData, title } = this.props;
    return <View className="topic-panel">
				<View className="topic-panel-title">{title}</View>
				{listData.map(item => {
        return <View onClick={this.toDetail.bind(this, item)} className="topic-panel-list" key={item.id}>
							<Image className="topic-panne-list-img" src={item.author.avatar_url} />
							<Text className="topic-panne-list-title">{item.title}</Text>
							<Text className="topic-panne-list-date">{myTimeToLocal(item.last_reply_at)}</Text>
						</View>;
      })}

			</View>;
  }
}

export default Panel;