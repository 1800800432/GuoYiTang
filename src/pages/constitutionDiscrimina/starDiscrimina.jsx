import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtTag } from 'taro-ui'
import { AtButton } from 'taro-ui'
import './starDiscrimina.less'
class StarDiscrimina extends Component {
  constructor(){
    // 获取路由参数
    super();

    this.state={
      questionList:[
        {question:'1、您精力充沛吗？（指精神头足，乐于做事）'}
        ,{
          question:'2、您容易疲乏吗？（指体力如何，是否稍微活动一下或做一点家务劳动就感到累',
        },{
          question:'3、您容易气短，呼吸急促，接不上气吗？',
        },{
          question:'4、您说话声音低弱无力吗？（指说话没有力气）',
        },{
          question:'5、您感到闷闷不乐、情绪低沉吗？（指心情不愉快，情绪低落）',
        },{
          question:'6、您容易精神紧张、焦虑不安吗？（指遇事是否心情紧张）',
        },{
          question:'7、您因为生活状态改变而感到孤独、失落吗？',
        },{
          question:'8、您容易感到害怕或收到惊吓吗？',
        },{
          question:'9、您感到身体超重不轻松吗？（感觉身体沉重）【BMI指数=体重（kg）/身高2（m）】',
        },{
          question:'10、您眼睛干涩吗？',
        },{
          question:'11、您手脚发凉吗？（不包含因周围温度低或穿的少而导致的手脚发冷）',
        },{
          question:'12、您胃脘部、背部或腰膝部怕冷吗？（指上腹部、背部、腰部或膝关节等，有一处或多处怕冷）',
        }
      ],
  }
    
  }
  resultClick(){
    Taro.navigateTo({
      url: '/pages/constitutionDiscrimina/discriminaResult'
    })
  }
  btnClick(){

  }
  render () {
    return (
      <View>
        
        <View className="header">
          <View className="headTip">说明</View>
          <Text className="headText">以下问题请根据您近一年的体验和感觉回答。</Text>
        </View>
        {
          this.state.questionList.map(function(value,key){
            return(
              <View className="content">
                <View className="question1" key={key}>
                  <Text className="text1">{value.question}</Text>
                  <View className="item1">
                    <AtButton className="btn" circle size='small'>没有</AtButton>
                    <AtButton className="btn" circle size='small'>很少</AtButton>
                    <AtButton className="btn" circle size='small'>有时</AtButton>
                    <AtButton className="btn" circle size='small'>经常</AtButton>
                    <AtButton className="btn" circle size='small'>总是</AtButton>
                  </View>
                </View>
              </View>
            )
          })
        }
        <View className="footer">
        <AtButton 
            type='primary' 
            size='normal' 
            circle
            className="starButton"
            onClick={this.resultClick}
            >查看结果</AtButton>
        </View>
      </View>
      
    )
  }
}
export default StarDiscrimina

