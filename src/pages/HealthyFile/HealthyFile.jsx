import { Component } from 'react'

class HealthyFile extends Component{
  render() {
    return(
      <view className='healthyFile'>
        <form>
          <text id='FormName'>个人基本信息</text>
          <p><text>姓名：</text><text className='FormValue'></text></p>
        </form>

      </view>
    )
  }
}
export default HealthyFile
