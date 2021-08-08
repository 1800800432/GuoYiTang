import React, {Component} from 'react';
import { View, Button, Text,Image } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtAccordion,AtList, AtListItem } from 'taro-ui'
import './ElectronicRecord.less'

class ElectronicRecord extends Component {
  constructor(){
    super()
    this.state={
      open: false,
      nameT:'赵韵流',
      nameList:[{
        name:'赵惠心'
      },{
        name:'赵曼吟'
      },{
        name:'赵惋洁'
      },],
      patientList:[{
        contentName:'赵千雁',
        contentTime:'2020-10-01',
      },{
        contentName:'赵惠心',
        contentTime:'2019-10-02',
      },{
        contentName:'赵曼吟',
        contentTime:'2018-10-03',
      },{
        contentName:'赵惋洁',
        contentTime:'2017-10-04',
      },]
    }
  }
  handleClick (value) {
    this.setState({
      open: value
    })
  }
  opraClick(index){
    console.log(index)
    Taro.navigateTo({
      url:'/pages/MyPage/ElectronicMedicalRecord/RecordDetails'
    })


  }
  render () {
    const nameT=this.state.nameT
    return (
      <View className="ElectronicRecord">
        <View className="headText">
          <Text className="headTitle">患者姓名:</Text>
          <AtAccordion
            open={this.state.open}
            onClick={this.handleClick.bind(this)}
            title={nameT}
            className="hand"
          >
          <AtList hasBorder={false}>
            {
              this.state.nameList.map((value,key)=>{
                return(
                  <AtListItem
                    title={value.name}
                  />
                )
              })
            }
          </AtList>
          </AtAccordion>
        </View>
        <View className="contentList">
          <View className="contentTitle">
            <Text className="titleName">患者姓名</Text>
            <Text className="titleTime">就诊日期</Text>
            <Text className="titleOprate">操作</Text>
          </View>
          {
              this.state.patientList.map((value,key)=>{
                return(
                  <View className="content" key={key}>
                    <Text className="contentName">{value.contentName}</Text>
                    <Text className="contentTime">{value.contentTime}</Text>
                    <Text className="contentOprate" onClick={this.opraClick.bind(this,key)}>查看</Text>
                  </View>
                )
              })
          }
        </View>
      </View>
    )
  }
}
export default ElectronicRecord

