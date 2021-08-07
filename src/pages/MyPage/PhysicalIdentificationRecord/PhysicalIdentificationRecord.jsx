import { Component } from 'react'
import {Image, View} from '@tarojs/components'
import {AtButton, AtSearchBar} from 'taro-ui'
import Taro　from '@tarojs/taro';

import './PhysicalIdentificationRecord.less'

class InformationOfData extends Component{
  render() {
    return(
      <view className="MeachInformation">


        <view className="MeachInformation-data">
          <text>data</text>
        </view>


        <view className="MeachInformation-data">
          <text>body</text>
        </view>


        <view className="MeachInformation-data">
          <navigator className="TaroButtonToNext" onClick={()=>{Taro.navigateTo({url:'/pages/constitutionDiscrimina/discriminaResult'})}}>🔍查看</navigator>
        </view>
      </view>
    )
  }
}

class PhysicalIdentificationRecord extends Component {

  render () {
    let itmes=[];
    for (let i=0;i<21;i++){
      itmes.push(<InformationOfData/>);
    }
    return (
      <view className='MainCentre'>
        <view className='TopNavigation-data'>
          <text>日期</text>
        </view >
        <view className='TopNavigation-data'>
          <text>体质</text>
        </view>
        <view className='TopNavigation-data'>
          <text>操作</text>
        </view>

        {itmes}
      </view>
    )
  }
}


export default PhysicalIdentificationRecord


