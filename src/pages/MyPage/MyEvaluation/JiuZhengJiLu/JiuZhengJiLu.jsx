import { Component } from 'react'
import { AtRate } from 'taro-ui'
import { AtButton } from 'taro-ui'
import { AtToast } from "taro-ui"
import { View, Image } from '@tarojs/components'
import imgs1 from "/src/images/myPage/u1730.svg"
import "./JiuZhengJiLu.less"


class XingXing extends Component{
  constructor () {
    super()
    this.state = {
      value: 0
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }

  render() {
    return(
      <AtRate
        size="25"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    )
  }


}


class JiuZhengJiLu extends Component{

  render() {
    return(
      <view >

        <view className="TopMain">
          <view className="Span1">
            就诊记录
          </view>
          <view className="ImagesOfBackground">
            <Image  src={imgs1}></Image>
          </view>
        </view>

        <View className="MainCentre">
          <View className="MainCentre1"><text>服务态度：</text><view  className="XingXing1"><XingXing></XingXing></view></View>
          <View className="MainCentre1"><text>诊疗环境：</text><view  className="XingXing1"><XingXing></XingXing></view></View>
          <View className="MainCentre1"><text>诊疗效果：</text><view  className="XingXing1"><XingXing></XingXing></view></View>
          <View className="MainCentre1"><text>总体评价：</text><view  className="XingXing1"><XingXing></XingXing></view></View>
        </View>

        <view >
          <AtButton className="AtButtonOfView">确定</AtButton>
        </view>


      </view>
    )
  }
}
export default JiuZhengJiLu
