import {Component} from 'react'
import {View} from "@tarojs/components";
import {AtGrid} from 'taro-ui'


import  '../../images/HotSpotimgs/JieQiYangSheng.png'
import  '../../images/HotSpotimgs/BaoJian.png'
import  '../../images/HotSpotimgs/YaoShan.png'
import  '../../images/HotSpotimgs/ZhongYaoChangShi.png'
import  '../../images/HotSpotimgs/ZhongYiWenHua.png'
import  '../../images/HotSpotimgs/ErKeJianKang.png'

class HotSecondpart extends Component{




  itemClick(item, index) {
    console.log(item, index)
  }

  render() {
    return(
      <View>
        <AtGrid  onClick={this.itemClick.bind(this)} data={
          [
            {
              image: '../../images/HotSpotimgs/JieQiYangSheng.png',
              value: '节气养生'
            },
            {
              image: '../../images/HotSpotimgs/BaoJian.png',
              value: '自我保健'
            },
            {
              image: '../../images/HotSpotimgs/YaoShan.png',
              value: '药膳食疗'
            },
            {
              image: '../../images/HotSpotimgs/ZhongYaoChangShi.png',
              value: '中药常识'
            },
            {
              image: '../../images/HotSpotimgs/ZhongYiWenHua.png',
              value: '中医文化'
            },
            {
              image: '../../images/HotSpotimgs/ErKeJianKang.png',
              value: '儿科健康'
            }
          ]
        } />
      </View>
    )
  }
}

export default HotSecondpart
