import React, {Component} from 'react';
import Taro from "@tarojs/taro";
import { AtCheckbox } from 'taro-ui'
import { View, Button, Text,Image } from '@tarojs/components'

class test extends Component {
  
  componentDidMount () {
    // 获取路由参数
    console.log(Taro.getCurrentInstance().router.params) 
  }
  constructor () {
    super(...arguments)
    this.state = {
      checkedList: ['list1']
    }
    this.checkboxOption = [{
        value: 'list1',
        label: '360 N7',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
      },{
        value: 'list2',
        label: 'HUAWEI P20'
      },{
        value: 'list3',
        label: 'OPPO Find X',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        disabled: true
      },{
        value: 'list4',
        label: 'vivo NEX',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        disabled: true
    }]
  }
  handleChange (value) {
    this.setState({
      checkedList: value
    })
  }
  render () {
    return (
      <View>
        test界面
        <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange.bind(this)}
      />
      
      </View>
    )
  }
}
export default test

