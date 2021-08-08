import React,{Component} from 'react'
import Taro from '@tarojs/taro'
import {View, Text, Label} from "@tarojs/components";
import './MyUpNumindex.less'




class MyUpNum extends Component{
  constructor(props){
    super(props)
    this.state={
      MyUpNumList:[{
        patient:'张晓萌',
        institutions:'东里社区卫生服务中心国医堂',
        department:'中医科',
        physicians:'张大山',
        appointment_time:'2020-09-21 周一 上午',
        Experts_num:39
      },{
        patient:'张晓萌',
        institutions:'东里社区卫生服务中心国医堂',
        department:'中医科',
        physicians:'张大山',
        appointment_time:'2020-09-21 周一 上午',
        Experts_num:39
      },{
        patient:'张晓萌',
        institutions:'东里社区卫生服务中心国医堂',
        department:'中医科',
        physicians:'张大山',
        appointment_time:'2020-09-21 周一 上午',
        Experts_num:39
      }]
    }
  }






  render() {
    const {MyUpNumList} = this.state;
    return(
      <View className='MyUpNum'>
        {
            MyUpNumList.map(e=> {
            return(
              <View className='MyUpNum-card'>
              <View className='patient'>
              <label className='Registration-info'>就诊人：</label>
              <Text className='Registration-infomation'>{e.patient}</Text>
              </View>
              <View className='Medical-institutions'>
              <label className='Registration-info'>就诊机构：</label>
              <Text className='Registration-infomation'>{e.institutions}</Text>
              </View>
              <View className='Clinic-department'>
              <label className='Registration-info'>就诊科室：</label>
              <Text className='Registration-infomation'>{e.department}</Text></View>
              <View className='Clinic-physicians'>
              <label className='Registration-info'>就诊医师：</label>
              <Text className='Registration-infomation'>{e.physicians}</Text>
              </View>
              <View className='appointment-time'>
              <label className='Registration-info'>预约时间：</label>
              <Text className='Registration-infomation'>{e.appointment_time}</Text>
              </View>
              <View className='Experts'>
              <label className='Experts-info' >专家号</label>
              <Text className='Experts-num'>{e.Experts_num}</Text>
              </View>
              </View>
            )
          })
        }

      </View>
    )
  }
}
 export default MyUpNum
