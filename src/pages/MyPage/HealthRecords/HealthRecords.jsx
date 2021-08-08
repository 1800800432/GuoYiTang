import { Component } from 'react'
import {View} from '@tarojs/components'
import { AtInput,AtForm,AtTag, AtButton} from 'taro-ui'
import Taro　from '@tarojs/taro';
import './HealthRecords.less'

class HealthRecords extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }

  tostep(){
    Taro.navigateTo({
      url:'/pages/MyPage/index'
    });
  }

  render () {
    return (
      <View className='HealthRecords'>
        <View className="tip1"><text className="top_set">个人基本信息</text></View>
        <View>
          <AtForm>
            <AtInput
              name='value1'
              title='姓名'
              type='text'
              placeholder='请输入真实姓名'
              value={this.state.value1}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value2'
              title='性别'
              type='sex'
              placeholder='男或女'
              value={this.state.value2}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value3'
              title='出生日期'
              type='date'
              placeholder='请按照"2000-02-13"的形式填写'
              value={this.state.value3}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value4'
              title='手机号码'
              type='phone'
              placeholder='请输入手机号码'
              value={this.state.value4}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value5'
              title='住址'
              type='address'
              placeholder='请填写详细住址'
              value={this.state.value5}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value6'
              title='民族'
              type='nation'
              placeholder='请输入民族'
              value={this.state.value6}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value7'
              title='血型'
              type='blood type'
              placeholder='请输入血型'
              value={this.state.value7}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value8'
              title='文化程度'
              type='degree of education'
              placeholder='请输入最高学历'
              value={this.state.value8}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value9'
              title='职业'
              type='profession'
              placeholder='请输入职业'
              value={this.state.value9}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value10'
              border={false}
              title='身高'
              type='high'
              placeholder='请输入身高(单位cm)'
              value={this.state.value10}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value11'
              border={false}
              title='体重'
              type='weight'
              placeholder='请输入体重(单位kg)'
              value={this.state.value11}
              onChange={this.handleChange.bind(this)}
            />
            <AtInput
              name='value12'
              border={false}
              title='BMI'
              type='BMI'
              placeholder='BMI=体重(kg)/身高^2(m^2)'
              value={this.state.value12}
              onChange={this.handleChange.bind(this)}
            />
          </AtForm>
        </View>
        <View className="tip2"><text className="bottom_set">疾病史</text></View>
        <View>
          <AtTag type='primary' className="tag_style" active>暂无</AtTag>
          <AtTag type='primary' className="tag_style" >高血压</AtTag>
          <AtTag type='primary' className="tag_style" >糖尿病</AtTag>
          <AtTag type='primary' className="tag_style" >心脏病</AtTag>
          <AtTag type='primary' className="tag_style" >过敏性疾病</AtTag>
          <AtTag type='primary' className="tag_style" >哮喘</AtTag>
          <AtTag type='primary' className="tag_style" >白癜风</AtTag>
          <AtTag type='primary' className="tag_style" >癫痫</AtTag>
          <AtTag type='primary' className="tag_style" >其他</AtTag>
          <AtInput
            name='value13'
            border={false}
            type='BMI'
            placeholder='请输入补充说明'
            value={this.state.value13}
            onChange={this.handleChange.bind(this)}
          />
        </View>
        <View>
          <AtTag type='primary' className="tag_style" active>暂无</AtTag>
          <AtTag type='primary' className="tag_style" >芒果</AtTag>
          <AtTag type='primary' className="tag_style" >牛奶</AtTag>
          <AtTag type='primary' className="tag_style" >坚果类</AtTag>
          <AtTag type='primary' className="tag_style" >海鲜</AtTag>
          <AtTag type='primary' className="tag_style" >黄瓜</AtTag>
          <AtTag type='primary' className="tag_style" >花粉</AtTag>
          <AtTag type='primary' className="tag_style" >油漆</AtTag>
          <AtTag type='primary' className="tag_style" >动物皮毛</AtTag>
          <AtTag type='primary' className="tag_style" >化妆品</AtTag>
          <AtTag type='primary' className="tag_style" >其他</AtTag>
          <AtInput
            name='value13'
            border={false}
            type='BMI'
            placeholder='请输入补充说明'
            value={this.state.value13}
            onChange={this.handleChange.bind(this)}
          />
        </View>
        <View>
          <AtButton type="primary" className="dia-btn" onClick={this.tostep.bind(this)}>保存</AtButton>
        </View>
      </View>

    )
  }
}

export default HealthRecords

