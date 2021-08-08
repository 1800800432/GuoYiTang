import { Component } from 'react'
import { View,Text,Image} from '@tarojs/components'
import { AtAvatar ,AtIcon } from 'taro-ui'
import Taro　from '@tarojs/taro';
import './index.less'
import guadan from '../../images/myPage/guadan.png'
import manager from '../../images/myPage/manager.png'
import healthRecord from '../../images/myPage/jiankang.png'
import onlineData from  '../../images/myPage/dianzibingli.png'
import cost from '../../images/myPage/feiyong.png'
import tizhi from '../../images/myPage/tizhi.png'
import shoucang from '../../images/myPage/wodeshoucang.png'
import pingjia from '../../images/myPage/wodpingjia.png'
class Index extends Component {
  ToMyInfo(){
    Taro.navigateTo({
      url:'../MyPage/login/MyInfo'
    })
  }

  ToMyRegistration(){
    console.log('准备跳转');
    Taro.navigateTo({
      url:'../MyPage/MyRegistration/MyRegistration'
    })
  }
  ToPatientManagement(){
    Taro.navigateTo({
      url:'../MyPage/PatientManagement/PatientManagement'
    })
  }
  ToHealthRecords(){
    Taro.navigateTo({
      url:'../MyPage/HealthRecords/HealthRecords'
    })
  }
  ToElectronicMedicalRecord(){
    Taro.navigateTo({
      url:'../MyPage/ElectronicMedicalRecord/ElectronicRecord'
    })
  }
  ToMedicalExpenses(){
    Taro.navigateTo({
      url:'../MyPage/MedicalExpenses/MedicalExpenses'
    })
  }
  ToMyCollection(){
    Taro.navigateTo({
      url:'../MyPage/collection/collection'
    })
  }
  ToMyEvaluation(){
    Taro.navigateTo({
      url:'../MyPage/MyEvaluation/MyEvaluation'
    })

  }
  ToPhysicalIdentificationRecord(){
      Taro.navigateTo({
        url:'../MyPage/PhysicalIdentificationRecord/PhysicalIdentificationRecord'
      })
  }
ToLogin(){
  Taro.navigateTo({
    url:'../MyPage/login/login'
  })
}

  render () {
    return (
      <View className='at-row index'>
        {/*头像 */}
        <view className='at-row header'>
        <view className='at-col at-col-2 headerImage'  onClick={this.ToLogin.bind(this)}>
        <AtAvatar circle image='https://img2.baidu.com/it/u=1728522718,1340994382&fm=26&fmt=auto&gp=0.jpg' className='headImage'></AtAvatar>
        </view>
        <view className='at-col at-col-7 headerText'  onClick={this.ToLogin.bind(this)}>
          <Text>登录/注册</Text>
        </view>
          <view className='at-col at-col-2 size=100px headerIcon'onClick={this.ToMyInfo.bind(this)}>
            <AtIcon value='chevron-right' size='38' color='black' ></AtIcon>
          </view>

        </view>
        {/*我的挂号/就诊人管理*/}
        <view className= 'myInfo'>
          <view className='control1' onClick={this.ToMyRegistration.bind(this)}>
          <view className='flex-item myInfodan' >
            <Image className=' guadanImage' src={guadan} alt='guadan'></Image>
            <Text className='guadanText' >我的挂号</Text>
          </view>

          </view>
         <view className='control2'  onClick={this.ToPatientManagement.bind(this)}>
         <view className='flex-item manager'>
            <Image className=' managerImage' src={manager} alt='manager'></Image>
            <Text className='managerText' >就诊人管理</Text>
          </view>
         </view>

        </view>

        {/*健康数据*/}
        <view className='healthData'>
          <view className='healthContainer'>
             <view className='sechead'><Text>健康数据</Text></view>
            {/*健康数据内容*/}
             <view className='at-row hContainer'>
               <view className='at-col at-col-12'>
                  <view className='at-row img-box '>
                {/*健康档案*/}
              <view className='at-col healinfo' onClick={this.ToHealthRecords.bind(this)}>
                  <image className='heath-image' src={healthRecord} alt='healthRecord'></image>
                   <text className='healtext'> 健康档案</text>
                 </view>
                {/*电子病历*/}
              <view className='at-col healinfo'  onClick={this.ToElectronicMedicalRecord.bind(this)}>
                     <image className='heath-image' src={onlineData} alt='onlineData'></image>
                    <text className='healtext'> 电子病历</text>
              </view>
                {/*就诊费用*/}
                <view className='at-col healinfo'  onClick={this.ToMedicalExpenses.bind(this)}>
                <image className='heath-image' src={cost} alt='cost'></image>
                <text className='healtext' > 就诊费用</text>
                </view>
               </view>
               </view>

             </view>

          </view>

        </view>

      {/*我的服务*/}
      <view className='at_row'>
        <view className='at-row servicehead'>
          <view className='at-row servicbox'>
            <view className='at-col at-col-12'>
              <view className='at-row sechead'>
                <Text >我的服务</Text>
              </view>
              <view className='at-row serviceContainer'>
               <view className='at-col at-col-12'>
                 {/*我的收藏*/}
               <view className='at-row ServiceItem' onClick={this.ToMyCollection.bind(this)}>
                  <view className='at-col at-col-2 serviceImage'>
                    <image className='serviceImage' src={shoucang} alt='shoucang'></image>
                  </view>
                  <view className='at-col at-col-7 serviceTest'>
                    <text>我的收藏</text>
                  </view>
                 <view className='at-col at-col-1 serviceIcon'>
                 <AtIcon value='chevron-right' size='38' color='gray' ></AtIcon>
                 </view>



                </view>
                  {/*我的评价*/}
                  <view className='at-row ServiceItem' onClick={this.ToMyEvaluation.bind(this)}>
                  <view className='at-col at-col-2 serviceImage'>
                    <image className='serviceImage' src={pingjia} alt='pingjia'></image>
                  </view>
                  <view className='at-col at-col-7 serviceTest'>
                    <text>我的评价</text>
                  </view>
                 <view className='at-col at-col-1 serviceIcon'>
                 <AtIcon value='chevron-right' size='38' color='gray' ></AtIcon>
                 </view>



                </view>

                 {/*体质辨识记录*/}
                 <view className='at-row ServiceItem' onClick={this.ToPhysicalIdentificationRecord.bind(this)}>
                  <view className='at-col at-col-2 serviceImage'>
                    <image className='serviceImage' src={tizhi} alt='tizhi'></image>
                  </view>
                  <view className='at-col at-col-7 serviceTest'>
                    <text>体质辨识记录</text>
                  </view>
                 <view className='at-col at-col-1 serviceIcon'>
                 <AtIcon value='chevron-right' size='38' color='gray' ></AtIcon>
                 </view>

                </view>
               </view>

              </view>
            </view>

          </view>

        </view>
      </view>

      </View>

    )
  }
}

export default Index

