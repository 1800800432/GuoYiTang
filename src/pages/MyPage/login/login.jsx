import { Component } from 'react'
import {Image, View,Text} from '@tarojs/components'
import Taro　from '@tarojs/taro';
import LoginImage from '../../../images/myPage/LoginImage.png'
import username from  '../../../images/myPage/username.png'
import Password from  '../../../images/myPage/password.png'
import './login.less'
import { AtButton } from 'taro-ui'

class login extends Component {

  render () {
    return (

      <View className='Container'>
          <view className='LoginHead' >
            <Image className='LoginImage' src={LoginImage} alt='LoginImage' ></Image>
          </view>


          <view className='LoginForm'>
            {/*账号*/}
            <view className=' userName'>
              <view classNam='at-row userContainer'>
                <view className='at-col tagText' >
                <image className='loginImage' src={username} alt='username'></image>
                <Text className='loginLab'>账号：</Text>
                </view>
                <view className='at-col  userInput'>
                <input classname='at-col inputText' placeholder="请输入账号" placeholder-style='text-align:center' />
                </view>
              </view>


                  {/*密码*/}
            <view className=' Password'>
              <view classNam='at-row Password'>
                <view className='at-col tagText' >
                <image className='PasswordImage' src={Password} alt='Password'></image>
                <Text className='passwordinLab'>密码：</Text>
                </view>
                <view className='at-col  PasswordText'>
                <input classname='at-col ' password='ture' placeholder="请输入密码" placeholder-style='text-align:center' />
                </view>
              </view>
            </view>
          {/*按钮*/}
          {/*登录*/}
            <view>
              <AtButton className='dologinbtn' type='primary'>登录</AtButton>
            </view>

             {/*注册*/}
             <view>
              <AtButton className='registerbtn' type='primary'>注册</AtButton>
            </view>

          </view>

          </view>



      </View>


    )
  }
}

export default login

