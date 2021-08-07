import { Component } from 'react'
import { View, Button, Text,Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './hotPointHeader.less'

class hotPointHeader extends Component {
  render () {
    return (
      <View  className="hotPointHeader">
        <text className="hotPoint" >今 日 热 点</text>
        <view className="moreHotPoint">
          <text className="more" >更多</text>
          <AtIcon value='chevron-right' size='20'></AtIcon>
        </view>
      </View>
    )
  }
}
export default hotPointHeader

