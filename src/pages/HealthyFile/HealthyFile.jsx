import { Component } from 'react'
import Taro from "@tarojs/taro";
import './HealthyFile.less'
class HealthyFile extends Component{
  render() {
    return(
      <view className='healthyFile'>
        <form>
          <view className='FormName' onClick={()=>{
            Taro.navigateTo({
              url: "../../pages/constitutionDiscrimina/discrimina"
            })
            ,
            wx.request({
              url:"http://localhost:8080/test",
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data:{
                name:"周健健",
                id:"1800730140"
              },
              dataType:"text",
              method:"post",
              success:function (e) {
                console.log("🍎");
              },
              fail:function (e) {
                console.log("🍐")
              }
            })
          }}>个人基本信息{"\n"}</view>
          <text className='FormTatle'>姓名：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>性别：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>出生日期：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>证件类型：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>证件号码：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>文化程度：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>户口性质：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>婚姻状况：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>民族：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>移动号码：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>出生地：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>既往病史：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>家族病史：</text><text className='FormValue'>{"\n"}</text>
          <text className='FormTatle'>患者于本人关系：</text><text className='FormValue'>{"\n"}</text>
        </form>
      </view>
    )
  }
}
export default HealthyFile
