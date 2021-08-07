import React, {Component} from 'react';
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import Taro from "@tarojs/taro";
import './tabBar.less'
class TabBar extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    console.log(value)
    this.setState({
      current: value
    })
    switch(value){
      case 0:
        Taro.reLaunch({
          url:'/pages/index/index'
        })
        break;
      case 1: 
        Taro.reLaunch({
          url:'/pages/index/text'
        })
        break;
      case 2: 
        Taro.reLaunch({
          url:''
        })
        break;
      case 3: 
        Taro.reLaunch({
          url:''
        })
        break;
    }
  }
  render () {
    return (
      <View>
        <AtTabBar
          fixed
          className="tabBar"
          tabList={[
            { title: '首页', iconType: 'home',text: 8 },
            { title: '今日热点',iconType: 'message', },
            { title: '健康档案',iconType: 'heart', dot: true },
            { title: '文档', iconType: 'user',dot: true }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
      
    )
  }
}

export default TabBar
