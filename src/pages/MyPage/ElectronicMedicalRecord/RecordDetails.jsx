import React, {Component} from 'react';
import { View, Button, Text,Image } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui'
import { AtDivider } from 'taro-ui'
import './RecordDetails.less'

class RecordDetails extends Component {
  constructor(){
    super()
    this.state={
      name:'赵韵流',
      institution:'东里社区卫生服务中心国医堂',//机构
      department:'中医科',//科室
      doctor:'张大山',//医师
      time:'2020-09-21   周一   上午',//时间
      diagnosis1:'感冒病',//诊断
      diagnosis2:'1.以卫表及鼻咽症状为主，可见恶风或恶寒、发热、鼻塞、流涕、喷嚏、咽痛、咽痒、周身酸楚不适等。若风邪兼夹暑湿等其他病邪，还可见胸闷、脘痞、纳呆、便溏等其他症状。 2.时行感冒多呈流行性，在同一时期发病人数暴增，且病证相似，常表现为突然起病、恶寒、发热（高热多见）、周身酸痛、疲乏无力。病情一般较普通感冒重。',//诊断
      advice:'当归10克,吴茱萸10克,桂枝10克,白芍10克,川芎10克,生姜10克,牡丹皮10克,半夏10克,麦冬10克,人参10克,阿胶10克,甘草10克,付数 :7每日1次水煎服生活上应起居有常，加强体育锻炼，气候突变时适时增减衣服，防寒保暖。',//医嘱
    }
  }
  backClick(){
    Taro.navigateTo({
      url:'/pages/MyPage/ElectronicMedicalRecord/ElectronicRecord',
    })
  }

  render () {
    const name=this.state.name
    const institution=this.state.institution
    const department=this.state.department
    const doctor=this.state.doctor
    const time=this.state.time
    const diagnosis1=this.state.diagnosis1
    const diagnosis2=this.state.diagnosis2
    const advice=this.state.advice
    return (
      <View className="RecordDetails">
        <View className="detailTitle">
          <Text className="title">{name}</Text>
          <Text className="title">-电子病历</Text>
        </View>
        <AtDivider/>
        <View className="details">
          <View className="detail1" style="width:70%">
            <View className="detail1-items">就诊机构：<Text className="contentText">{institution}</Text></View>
            <View className="detail1-items">就诊科室：<Text className="contentText">{department}</Text></View>
            <View className="detail1-items">就诊医师：<Text className="contentText">{doctor}</Text></View>
            <View className="detail1-items">就诊时间：<Text className="contentText">{time}</Text></View>
          </View>
          <AtDivider/>
          <View className="detail1" style="width:70%">
            <View className="detail1-items" style="margin-bottom: 2%;">诊断：</View>
            <View className="contentText">{diagnosis1}</View>
          </View>
          <AtDivider/>
          <View className="detail1" style="width:70%">
           <View className="detail1-items" style="margin-bottom: 2%;">诊断：</View>
           <View className="contentText">{diagnosis2}</View>
          </View>
          <AtDivider/>
          <View className="detail1" style="width:70%">
            <View className="detail1-items" style="margin-bottom: 2%;">医嘱：</View>
            <View className="contentText">{advice}</View>
          </View>
          <View className="GoBack">
             <AtButton className="backBtn" type='primary' onClick={this.backClick}>返回</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
export default RecordDetails

