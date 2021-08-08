import { Component } from 'react'
import {View,Text} from '@tarojs/components'
import './Cost_details.less'

class Cost_details extends Component {

  render () {
    return (
      <View className='MedicalExpenses'>
        <View className="tip1"><text className="top_set">就诊费用</text></View>
        <view className="frame">  
          <view className="text1_set">项目/规格：</view><view className="text2_set">补中益气丸/0.4g×60粒/盒</view>
          <view className="text1_set">单价：</view><view className="text2_set">35.0000</view>
          <view className="text1_set">数量/单位：</view><view className="text2_set">补中益气丸/0.4g×60粒/盒</view>
          <view className="text1_set">等级：</view><view className="text2_set">无自付</view>
          <view className="text1_set">金额：</view><view className="text2_set">70.0000<text className="text3_set">2020.11.15</text></view>
        </view>
        <view className="frame">  
          <view className="text1_set">项目/规格：</view><view className="text2_set">补中益气丸/0.4g×60粒/盒</view>
          <view className="text1_set">单价：</view><view className="text2_set">35.0000</view>
          <view className="text1_set">数量/单位：</view><view className="text2_set">补中益气丸/0.4g×60粒/盒</view>
          <view className="text1_set">等级：</view><view className="text2_set">无自付</view>
          <view className="text1_set">金额：</view><view className="text2_set">70.0000<text className="text3_set">2020.11.10</text></view>
        </view>
        <view className="frame">  
          <view className="text1_set">项目/规格：</view><view className="text2_set">补中益气丸/0.4g×60粒/盒</view>
          <view className="text1_set">单价：</view><view className="text2_set">35.0000</view>
          <view className="text1_set">数量/单位：</view><view className="text2_set">补中益气丸/0.4g×60粒/盒</view>
          <view className="text1_set">等级：</view><view className="text2_set">无自付</view>
          <view className="text1_set">金额：</view><view className="text2_set">70.0000<text className="text3_set">2020.11.08</text></view>
        </view>
      </View>
    )
  }
}

export default Cost_details
