import Taro, {Component} from '@tarojs/taro';
import {Text, Button, View, ScrollView} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopicList,getNextList} from '../../actions/topiclist';
import Topic from './topic';

@connect(function(store){
   return {...store.topiclist,currentCata:store.menu.currentCata}
},function(dispatch){
   return {getTopicList(params){
       dispatch(getTopicList(params))
   },
   getNextList(params){
    dispatch(getNextList(params))
   }
 }
})
class TopicList extends Component {
	componentWillMount(){
      let  {page,limit,currentCata}=this.props;
      this.props.getTopicList&&this.props.getTopicList({page,limit,tab:currentCata.key})
    }
    //触发分页请求
  onScrollToLower(){
    let  {page,limit,currentCata}=this.props;
    this.props.getNextList&&this.props.getNextList({page:(page+1),limit,tab:currentCata.key})
   }

	render(){
		let {list} = this.props;
		return (<ScrollView style={{height:'650PX'}} scrollY={true} onScrollToLower={this.onScrollToLower.bind(this)}>{
			list.map((item)=><Topic item={item} />)
		}</ScrollView>)
	}
} 

export default TopicList; 
