import {Component} from 'react'
import {View} from '@tarojs/components'
import { AtSearchBar } from "taro-ui";
import HotSecondpart from "./hotSecondpart";
import HotThirdpart from './hotThirdpart'

// import DiBuTabBar from '../index/diBuTabBar'



import './hotSpotindex.less'

export default class Hotspot extends Component{
  constructor(props){
    super(props);
    this.state ={
      value: ''
    }
  }

  doSearch(value){
    this.setState({
      value
    })
  }


  onActionClick(){
    console.log("开始搜索")
  }


  render(){
    return(
      <View className='hotspot'>
        <View className='SearchBar'>
          <AtSearchBar
            value={this.state.value}
            onChange={this.doSearch.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
            placeholder='搜索今日热点'
            className='search_input' />
        </View>
        <HotSecondpart/>
        <View className='jiange'></View>
        <HotThirdpart />
        {/*<DiBuTabBar current={1}/>*/}
      </View>
    )
  }

}


