import { Component } from 'react'
import { View, Button, Text,Image } from '@tarojs/components'
import Taro from "@tarojs/taro";

import './indexMid.less'

class indexMid extends Component {
  midClick1(){
    console.log("知识宣传")
    Taro.navigateTo({
      url: '/pages/knowledgePublicity/knowledge'
    })
  }
  midClick2(){
    console.log("体质辨识")
    Taro.navigateTo({
      url: '/pages/constitutionDiscrimina/discrimina'
    })
  }
  render () {
    return (
      <View className="at-row midContent">
        <View className="at-col rightImg" onClick={this.midClick1}>
          <View className="contentRight">
            <text className="midContent1 at-col-8 at-col--wrap">中医健康管理知识宣传</text>
          </View>
        </View>
        
        <View className="at-col leftImg" onClick={this.midClick2}>
          <View className="contentLeft">
            <text className="midContent2 at-col--wrap">【体质辨识】</text>
            <text className="midContent3 at-col--wrap">判定量表</text>
          </View>
        </View>
        
      </View>
    )
  }
}
export default indexMid

