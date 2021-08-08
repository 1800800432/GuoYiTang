import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui'
import { AtIcon } from 'taro-ui'
import './discrimina.less'


import images1 from "/src/images/myPage/u559.svg"
import images2 from "/src/images/myPage/u558.svg"
import images3 from "/src/images/myPage/u563.svg"
import images4 from "/src/images/myPage/u562.svg"
import images5 from "/src/images/myPage/u560.svg"


class Discrimina extends Component {
  starClick(){
    Taro.navigateTo({
      url: '/pages/constitutionDiscrimina/starDiscrimina'
    })
  }


  render () {
    return (
      <View className="back">
        <View className="discrimina">
          <View className="headContent">
            <text className="headTitle">中医治未病 辨质识养生</text>
            <View className="headText at-row at-row--wrap">
              <text className="headText at-col-6"><AtIcon value='check' size='18' color='#775637'></AtIcon>情志调摄</text>
              <text className="headText at-col-6"><AtIcon value='check' size='18' color='#775637'></AtIcon>饮食调养</text>
              <text className="headText at-col-6"><AtIcon value='check' size='18' color='#775637'></AtIcon>起居调摄</text>
              <text className="headText at-col-6"><AtIcon value='check' size='18' color='#775637'></AtIcon>运动保健</text>
              <text className="headText at-col-6"><AtIcon value='check' size='18' color='#775637'></AtIcon>穴位保健</text>
            </View>
          </View>
          <View className="midContent">
            <View className="midContentText">
              <Text className="count">20000</Text>
              <Text className="R">人</Text>
              <View className="countText">已经参与体质辨识判定评估</View>
              <Image></Image>
              <Image></Image>
            </View>
          </View>
          <View className="mainContent">
            <View className="mainContentText">
              <Text className="mainContentText1">中医体质辨识软件是判断中医体质分类的标准化工具，依据中华中医药学会《中医体质分类与判定》标准开发。软件是在中医体质理论指导下，根据量表设计原理，以问询录入的方式，采集居民健康信息；通过对9种体质分值的结果分析，来判断体质类型。</Text>
            </View>
            <View>
            <AtButton
            type='primary'
            size='normal'
            circle
            className="starButton"
            onClick={this.starClick}
            >开始评估</AtButton>
            </View>
          </View>
          <View className="footContent">
            <Text>
              由于测评题目比较多，按照正常语速完成测评需要至少5分钟时间，请您合理安排体质辨析测评时间；
            </Text>
          </View>
        </View>
      </View>

    )
  }
}
export default Discrimina

