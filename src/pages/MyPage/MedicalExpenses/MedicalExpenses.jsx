import React,{ Component } from 'react'
import {View,Text} from '@tarojs/components'
import {AtAccordion,AtList, AtListItem} from 'taro-ui'
import Taro　from '@tarojs/taro';
import './MedicalExpenses.less'

class MedicalExpenses extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      open: false,
      name:'赵韵流',
      patientList:[{
        contentName:'赵韵流',
        contentTime:'2020-10-01',
      },{
        contentName:'赵千雁',
        contentTime:'2019-10-02',
      },{
        contentName:'赵惠心',
        contentTime:'2018-10-03',
      },{
        contentName:'赵曼吟',
        contentTime:'2017-10-04',
      },{
        contentName:'赵惋洁',
        contentTime:'2016-10-05',
      },{
        contentName:'赵寄凡',
        contentTime:'2016-10-01',
      },{
        contentName:'赵冰洁',
        contentTime:'2015-10-02',
      },]
    }
  }
  handleClick (value) {
    this.setState({
      open: value
    })
  }

  opraClick(){
    Taro.navigateTo({
      url:'/pages/MyPage/MedicalExpenses/Cost_details/Cost_details'
    })
  }

  render () {
    return (
      <View className='MedicalExpenses'>
        <View className="tip1"><text className="top_set">患者姓名：</text>
          <View className="drop-down">
              <AtAccordion
              open={this.state.open}
              onClick={this.handleClick.bind(this)}
              title='赵韵流'
            >
              <AtList hasBorder={false}>
                <AtListItem
                  title='赵韵流'
                />
                <AtListItem
                  title='赵千雁'
                />
                <AtListItem
                  title='赵惋洁'
                />
                <AtListItem
                  title='赵曼吟'
                />
                <AtListItem
                  title='赵惠心'
                />
                <AtListItem
                  title='赵寄凡'
                />
                <AtListItem
                  title='赵冰洁'
                />
              </AtList>
            </AtAccordion>
          </View>
        </View>
        <View className="contentList">
          <View className="contentTitle">
            <Text className="titleName">患者姓名</Text>
            <Text className="titleTime">就诊日期</Text>
            <Text className="titleOprate">操作</Text>
          </View>
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
    )
  }
}

export default MedicalExpenses

