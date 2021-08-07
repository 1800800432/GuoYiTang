import { Component } from 'react'
import Taro　from '@tarojs/taro';
import { View, Button, Text ,Image} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import "./DetailsInformation.less"
import images1 from "/src/images/myPage/u559.svg"
import images2 from "/src/images/myPage/u558.svg"
import images3 from "/src/images/myPage/u563.svg"
import images4 from "/src/images/myPage/u562.svg"
import images5 from "/src/images/myPage/u560.svg"

class Title extends Component{
  render() {

    return(
      <view>
        <AtButton className="TitleTemplate">
          <Image style="width:60rpx;height:60rpx" src={images1} className="Images"></Image>
          情志调摄

        </AtButton >
        <view className="TitleData">
        </view>

        <AtButton className="TitleTemplate">
          <Image style="width:60rpx;height:60rpx" src={images2} className="Images"></Image>
          饮食调养
        </AtButton>
        <view className="TitleData">
        </view>

        <AtButton className="TitleTemplate">
          <Image style="width:60rpx;height:60rpx" src={images3} className="Images"></Image>
          起居调摄
        </AtButton>
        <view className="TitleData">
        </view>


        <AtButton className="TitleTemplate">
          <Image style="width:60rpx;height:60rpx" src={images4} className="Images"></Image>
          运动保健
        </AtButton>
        <view className="TitleData">
        </view>

        <AtButton className="TitleTemplate">
          <Image style="width:60rpx;height:60rpx" src={images5} className="Images"></Image>
          穴位保健
        </AtButton>
        <view className="TitleData">
        </view>


      </view>

    )
  }
}
class DetailsInformation extends Component{
  render() {
    let items=[];
    for(let i=0;i<5;i++){
      items.push(<Title/>);
    }
    return(
      <view>This DetailsInformation Page!!!
        <view className="TopInformation">

        </view>
        <view className="ZhiDaoYiJian">指导意见：</view>
        <view className="MainInformation">

          <Title></Title>
        </view>
      </view>
    )
  }
}
export default DetailsInformation;
