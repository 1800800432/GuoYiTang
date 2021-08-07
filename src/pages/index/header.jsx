import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'

import { AtSearchBar } from 'taro-ui'

import './header.less'

class Header extends Component {

  render () {
    return (
      <View className='index'>
        <View className='top'><AtSearchBar placeholder="搜索国医堂" className='top-search'/></View>
      </View>
    )
  }
}

export default Header

