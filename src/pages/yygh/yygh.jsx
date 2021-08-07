import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import './yygh.less'

class yygh extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  constructor () {
    super(...arguments)
    this.state = {
      open: false,
    }
  }
  handleClick (value) {
    this.setState({
      open: value
    })
  }
  

  render () {
    return (
      <View className='yygh'>
        <View><AtSearchBar placeholder="搜索国医堂" className="top_search" value={this.state.keyword}/></View>
            <view className='condition-layout'>
                <View className="condition-item">
                  <view>
                      <text>医院：</text>
                  </view>
                </View>
                <view>
                    <view className="vertical-divider"></view>
                </view>
                <view className='condition-select'>
                  <AtAccordion
                    open={this.state.open}
                    onClick={this.handleClick.bind(this)}
                    title='筛选'
                    className='selected-btn'
                  >
                    <AtList hasBorder={false}>
                      <AtListItem
                          title='评分'
                          thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                      />
                      <AtListItem
                          title='剩余量'
                          thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                      />
                    </AtList>
                  </AtAccordion>
                </view> 
            </view>
            <view className='level-divider'></view>          
      </View>
    )
  }
}

export default yygh