import { Component } from 'react'
import { View, Button, Text,Image } from '@tarojs/components'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem } from '@tarojs/components'
import Taro from "@tarojs/taro";
import SwiperIcon1 from '../../images/Homeimgs/01.png'
import SwiperIcon2 from '../../images/Homeimgs/02.png'
import SwiperIcon3 from '../../images/Homeimgs/03.png'
import './indexSwiper.less'
class indexSwiper extends Component {
  iconClick1(){
    console.log("轮播图第一张图")
    Taro.navigateTo({
      url: '/pages/index/test?id=2'
    })
  }
  iconClick2(){
    console.log("轮播图第二张图")
    Taro.navigateTo({
      url: '/pages/index/test?id=2'
    })
  }
  iconClick3(){
    console.log("轮播图第三张图")
    Taro.navigateTo({
      url: '/pages/index/test?id=2'
    })
  }
  constructor(props){
    super(props)
    // Taro.getSystemInfo({
    //     success: function (res) {
    //         this.clientHeight=res.windowHeight
    //         console.log(this.clientHeight)
    //     }
    // })
  }


  render () {
    return (
      <View className="indexSwiper">
          <Swiper
          className='Swiper'
          indicatorColor='#999'
          indicatorActiveColor='#fff'
          interval={5000}
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <View className='swiper1'><image src={SwiperIcon1} onClick={this.iconClick1} /></View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper2'><image src={SwiperIcon2}
            onClick={this.iconClick2}/></View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper3'><image src={SwiperIcon3}
            onClick={this.iconClick3}/></View>
          </SwiperItem>
      </Swiper>
      </View>
    )
  }
}
export default indexSwiper

