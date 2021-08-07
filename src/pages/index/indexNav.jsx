import { Component } from 'react'
import { View, Button, Text,Image } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtGrid } from "taro-ui"

import './indexNav.less'

class indexNav extends Component {

  itemClick(item,index){
    switch(index){
      case 0:
        console.log("国医堂")
        Taro.navigateTo({
          url: '/pages/hospital/hospital'
        })
        break;
      case 1:
        console.log("预约挂号")
        Taro.navigateTo({
          url: '/pages/yygh/yygh'
        })
        break;
      case 2:
        console.log("智能导诊")
        Taro.navigateTo({
          url: '/pages/Intelligent_guidance/Intelligent_guidance'
        })
        break;
    }

  }
  render () {
    return (
      <View>
        <AtGrid hasBorder={false} onClick={this.itemClick.bind(this)}  data={
    [
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '国医堂'
      },
      {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '预约挂号'
      },
      {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '智能导诊'
      }
    ]
  } />
      </View>
    )
  }
}
export default indexNav

