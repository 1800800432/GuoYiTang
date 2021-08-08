import { Component } from 'react'
import {Image, View} from '@tarojs/components'
import { AtButton,AtSearchBar } from 'taro-ui'
import Taro　from '@tarojs/taro';

import "./MyEvaluation.less"
import construct from "@babel/runtime/helpers/esm/construct";

class DataInformation extends Component{
  render() {
    return(

      <view className="InsertDataInformation">
        <text>date</text>
        <text>disease</text>
        <text>appraise</text>
        <navigator  className="MeachInformation-data"  onClick={()=>{Taro.navigateTo({url:"./JiuZhengJiLu/JiuZhengJiLu"})}}>操作</navigator>
      </view>
    )
  }
}

let CssStyle={
          color:"black",
          fontWeight:"",
    }


class MyEvaluation extends Component {
  constructor(){
    super();
    this.state={
      color:"green",
      fontWeight:"blod"
    }
  }
    setData(){
    CssStyle.color="red";
    CssStyle.fontWeight="blod";
    }
  render (){
    let objs=[];
    for(let i=0;i<17;i++){
      objs.push(<DataInformation/>)
    }
    return (
      <view>
        <view className="TaroButton">
          <navigator style={CssStyle} className="DivNavigator" onClick={()=>{
            this.setData()
            console.log(CssStyle)
          }}>已评价</navigator>
          <navigator className="DivNavigator" onClink={()=>{items[0].style.color="gerrn"}}>未评价</navigator>
        </view>
        <view className="TopNavigation">
          <view>日期</view>
          <view>疾病</view>
          <view>总体评价</view>
          <view>操作</view>
        </view>

          {objs}



      </view>
    )
  }
}

export default MyEvaluation

