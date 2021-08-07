import React, {Component} from 'react';
import { View } from '@tarojs/components'
import { AtActivityIndicator } from "taro-ui";
import Taro from "@tarojs/taro";
import Header from "./header"
import IndexSwiper from "./indexSwiper"
import IndexNav from "./indexNav"
import IndexMid from "./indexMid"
import HotPointHeader from "./hotPointHeader"
import HotPointList from "./hotPointList"
import TabBar from "./tabBar"

import './index.less'

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
    // 控制活动指示器，也就是加载的小圆圈的显示隐藏，默认隐藏，上拉加载的
    //时候显示出来设置为true，加载完成后隐藏设置为false
      showActivity: false 
    };
  }
  // getData() {
  //   const { dispatchLoadList } = this.props;
  //   let newBoy = [
  //     "pageindex=" + page,
  //     "pagesize=" + i * 10 // 通过i计算出pagesize大小
  //   ];
  //   dispatchLoadList(newBoy).then(json => {
  //      if (requestSuccessNoT(json)) {
  //        // 这里是成功的业务逻辑
  //        // ......
  //        // 加载成功 设置showActivity为false
  //        this.setState({ showActivity: false });
  //      } else {
  //        // 这里是失败的业务逻辑
  //      }
  //   })
  // }
  componentWillMount () {
    let newBoy = [
      "pageindex=" + Page,
    ];
    console.log(newBoy)
  }
  // 监听下拉刷新
  onPullDownRefresh() {
    console.log("kkkkkk")
  }
  // 监听上拉触底
  onReachBottom() {
    console.log("ggggggg")
    this.setState({
      showActivity:true
    })
  }
  ActivityIndicator() {
    return (
      <View style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
        <AtActivityIndicator></AtActivityIndicator>
        正在获取更多内容
      </View>
    );
  }
  render () {
    const showActivity=this.state
    return (
      <View className='index'>
        <Header/>
        <IndexSwiper/>
        <IndexNav/>
        <IndexMid/>
        <HotPointHeader/>
        <HotPointList/>
        {showActivity && this.ActivityIndicator()}
      </View>
    )
  }
}

export default Index

