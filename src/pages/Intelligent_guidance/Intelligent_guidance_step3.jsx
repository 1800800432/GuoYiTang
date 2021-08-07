import React, {Component} from "react";
import {Image,View} from "@tarojs/components";
import {AtButton, AtSteps, AtRate} from 'taro-ui'
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {storeInteTreatStep2} from "../../actions/inte-treat";
import './Intelligent_guidance_step3.less'

@connect(({inteTreatInfo}) => ({
  inteTreatInfo
}), (dispatch) => ({
  storeInteTreatStep2(uncomfotable) {
    dispatch(storeInteTreatStep2(uncomfotable))
  }
}))
class Intelligent_guidance_step3 extends Component{

 

  /*点击完成*/
  toStep5(){
    Taro.reLaunch({url: '/pages/index/index'});
  }

  /*点击重新测试*/
  toStep1(){
    Taro.reLaunch({url: '/pages/Intelligent_guidance/Intelligent_guidance'});
  }

  render(){
    const items = [
      {
        title: '已完成',
        status: 'success'
      },
      {
        title: '已完成',
        status: 'success'
      },
      {
        title: '进行中',
        status: 'success'
      }
    ]
    return(
      <View>
        <view className='header'>
          <view className='header-text'>智能导诊</view>
        </view>
        <View className='mar-step'>
          <AtSteps
          items={items}
         />
        </View>
        <View className='at-row h'>
          <AtButton className='again-btn' onClick={this.toStep1.bind(this)}>重新测试</AtButton>
          <AtButton type='primary' className='dia-btn' onClick={this.toStep5.bind(this)}>完成</AtButton>
        </View>
      </View>
    )
  }
}
export default Intelligent_guidance_step3
