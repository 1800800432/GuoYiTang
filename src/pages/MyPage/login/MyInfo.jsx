import { Component } from 'react'
import {Image, View,Text,Picker} from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import Taro, { checkIsSupportSoterAuthentication }　from '@tarojs/taro';
import '../login/MyInfo.less'
import { AtAvatar,AtIcon ,AtButton,AtTag,AtCalendar ,AtFloatLayout,AtList,AtListItem} from 'taro-ui'



class MyInfo extends Component {

  constructor () {
    super(...arguments)
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      value: '',
      current: 0,
      dateSel: date,//出生日期
      num: '0',

      inteTreatInfo: {

        birth: '',

      }
    }
  }




  handleChange (value) {
    this.setState({
      value
    })
    return value
  }

  onChange (current) {
    this.setState({
      current
    })
  }

  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }






  render (e) {
    return (
      <View className='index'>
         <AtFloatLayout ref='FLayout'  title="出生日期"  >
              <AtCalendar />
              </AtFloatLayout>
        <view className='at row Container'>
          {/*头像*/}
          <view className='at-row headpor'>
            <view className='at-col at-col-9 Htext'><Text>头像</Text></view>
            <view className='at-col at-col-2 hIcon' >
            <AtAvatar circle image='/images/myPage/LoginImage.png'size='small'></AtAvatar>
            </view>
            <view className='at-col at-col-1 tag'>
            <AtIcon value='chevron-right' size='30' color='gray'></AtIcon>
            </view>
          </view>
          {/*姓名*/}
          <view className='at-row headpor'>
            <view className='at-col at-col-9 Htext'><Text>姓名</Text></view>
            <view className='at-col at-col-2 hIcon' >
              <Text>大帅锅</Text>
            </view>
            <view className='at-col at-col-1 tag'>
            <AtIcon value='chevron-right' size='30' color='gray'></AtIcon>
            </view>
          </view>
          {/*性别*/}
          <view className='at-row headpor'>
            <view className='at-col at-col-8 Htext'><Text>性别</Text></view>
            <view className='at-col at-col-2 sexIcon' >
              <AtTag size='normal'  circle='ture'>男</AtTag>
            </view>
            <view className='at-col at-col-2 sexIcon' >
              <AtTag size='normal'  circle='ture'>女</AtTag>
            </view>


          </view>
          {/*出生日期*/}
          <view className='at-row headpor'>
            <view className='at-col at-col-7 Htext'><Text>出生日期</Text></view>
            <view className='at-col at-col-4 hIcon' >
            {/*<AtButton className='choose' onClick={this.handleOpen.bind(this)} ><Text className='BirthText'> 请选择</Text></AtButton>
             */}
             <Picker  value='' mode='date' start='1900-01-01' onChange={this.onDateChange}>

                    <AtList  hasBorder={false}>
                      <AtListItem
                        className='confirm-picker-item'
                        hasBorder={false}
                        extraText={this.state.dateSel}
                      />
                    </AtList>
                  </Picker>

            </view>
            <view className='at-col at-col-1 tag'>
            <AtIcon value='chevron-right' size='30' color='gray'></AtIcon>
            </view>
          </view>
          {/*手机号码*/}
          <view className='at-row headpor'>
            <view className='at-col at-col-4 Htext'><Text>手机号码</Text></view>
            <view className='at-col at-col-8 hIcon' >
            <input classname='inputLabel' password='ture' placeholder="请输入手机号码" placeholder-style='text-align:center' />
            </view>

          </view>
        </view>

        <view className='btnContainer'>
        <AtButton className='savebtn'>保存</AtButton>
        </view>
      </View>

    )
  }
}

export default MyInfo

