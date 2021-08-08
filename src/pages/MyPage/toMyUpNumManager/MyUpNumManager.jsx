import React,{Component} from 'react'
import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import {View,Text,Radio} from '@tarojs/components'
import {AtButton, AtDivider,AtIcon,AtTag} from "taro-ui";
import './MyUpNumManager.less'

class MyUpNumManager extends Component{
  constructor(props){
    super(props)
    this.state={
      MyUpNumManagerList:[{
        patient_name:'张晓萌',
        patient_age:24+'岁',
        patient_idnumber:'140724199608070233',
        patient_address:'河北省石家庄市桥西区'
      },{
        patient_name:'张晓萌',
        patient_age:24+'岁',
        patient_idnumber:'140724199608070233',
        patient_address:'河北省石家庄市桥西区'
      },{
        patient_name:'张晓萌',
        patient_age:24+'岁',
        patient_idnumber:'140724199608070233',
        patient_address:'河北省石家庄市桥西区'
      },{
        patient_name:'张晓萌',
        patient_age:24+'岁',
        patient_idnumber:'140724199608070233',
        patient_address:'河北省石家庄市桥西区'
      },{
        patient_name:'张晓萌',
        patient_age:24+'岁',
        patient_idnumber:'140724199608070233',
        patient_address:'河北省石家庄市桥西区'
      }]
    }
  }


  render() {
    const {MyUpNumManagerList} = this.state;
    return(
      <View className='MyUpNumManager'>
        {
          MyUpNumManagerList.map(e=> {
            return(
              <View className='MyUpNumManager-card'>
                <View className='patient_msg'>
                  <Text className='patient_name'>{e.patient_name}</Text>
                  <Text className='patient_age'>{e.patient_age}</Text>
                </View>
                <View className='patient_msg'>
                  <label className='Pmessage'>身份证号：</label>
                  <Text className='PmessageB'>{e.patient_idnumber}</Text>
                </View>
                <View className='patient_msg'>
                  <label className='Pmessage'>地址：</label>
                  <Text className='PmessageB'>{e.patient_address}</Text>
                </View>
                <AtDivider height='20' />
                <View  className='underline'>
                    <Radio className='default_patient'>默认就诊人</Radio>
                    <AtIcon className='edit' value='edit' size='20' ></AtIcon>
                    <AtTag className='tag1' size='normal'>编辑</AtTag>
                    <AtIcon className='trash' value='trash' size='20' ></AtIcon>
                    <AtTag className='tag2' size='normal'>删除</AtTag>
                </View>
              </View>
            )
          })
        }
        <View>
          <AtButton className='add_patient' >添加就诊人</AtButton>
          {/*<AtTabBar*/}
          {/*  fixed*/}
          {/*  fontSize='18'*/}
          {/*  className='add_patient'*/}
          {/*  tabList={[*/}
          {/*    { title: '添加就诊人'},*/}
          {/*  ]}*/}
          {/*  // onClick={this.handleClick.bind(this)}*/}
          {/*  // current={this.state.current}*/}
          {/*/>*/}

        </View>
      </View>

    )
  }

}

export default MyUpNumManager
