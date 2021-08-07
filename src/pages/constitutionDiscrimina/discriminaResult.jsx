import { Component } from 'react'
import { View, Text,Image } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { AtAccordion, AtList, AtListItem }  from 'taro-ui'
import './discriminaResult.less'
import images1 from "/src/images/myPage/u559.svg"
import images2 from "/src/images/myPage/u558.svg"
import images3 from "/src/images/myPage/u563.svg"
import images4 from "/src/images/myPage/u562.svg"
import images5 from "/src/images/myPage/u560.svg"


class DiscriminaResult extends Component {
  constructor(){
    super()
    this.state={
      constitution:'平和质',//体质
      inclination:'痰湿质',//倾向
      performance:'面色、肤色润泽，头发较密，目光有神，不易疲劳，精力充沛，耐受寒热，睡眠良好，胃纳佳，二便正常，舌色淡红、苔薄白，脉和缓有力',//表现
      //情志调摄
      guidance:[{
        title:'情志调摄',
        content:'人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。① 春季起居保健:《素问·四气调神大论》指出:“春三月，此为发陈，天地俱生，万物以荣，夜卧早起，广步于庭，被发缓形，以使志生”。春天是万物欣欣',
        open: false,
      },{
        title:'饮食调养',
        content:'人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。① 春季起居保健:《素问·四气调神大论》指出:“春三月，此为发陈，天地俱生，万物以荣，夜卧早起，广步于庭，被发缓形，以使志生”。春天是万物欣欣',
        open: false,
      },{
        title:'起居调摄',
        content:'人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。① 春季起居保健:《素问·四气调神大论》指出:“春三月，此为发陈，天地俱生，万物以荣，夜卧早起，广步于庭，被发缓形，以使志生”。春天是万物欣欣',
        open: false,
      },{
        title:'运动保健',
        content:'人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。① 春季起居保健:《素问·四气调神大论》指出:“春三月，此为发陈，天地俱生，万物以荣，夜卧早起，广步于庭，被发缓形，以使志生”。春天是万物欣欣',
        open: false,
      },{
        title:'穴位保健',
        content:'人体的生命活动随着年节律、季节律、月节律、昼夜节律等自然规律而发生相应的生理变化。故《灵枢·本神》强调:“故智者之养生也，必顺四时而适寒暑，和喜怒而安居处，节阴阳而调刚柔，如是则邪僻不至，长生久视”。即使是阴阳和调之人一也要起居有常，不妄作劳，顺应四时，悉心调护，才能增进健康，延年益寿。① 春季起居保健:《素问·四气调神大论》指出:“春三月，此为发陈，天地俱生，万物以荣，夜卧早起，广步于庭，被发缓形，以使志生”。春天是万物欣欣',
        open: false,
      },],
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick=(value,index)=>{
    console.log(value)
    console.log(index)
    console.log(this.state.guidance[value].open)
    const guidance = [...this.state.guidance];
    this.setState({
      guidance: guidance.map((item, idx) => idx === value ? {...item, open:  index} : item)
    })
  }
  render () {
    const constitution=this.state.constitution
    const inclination=this.state.inclination
    const performance=this.state.performance
    return (
      <View>
        <View className="result">
          <View className="resultContent">
            <View className="resultContentTitle">您的体质为：</View>
            <View className="resultContentText">是：<Text className="ContentText">{constitution}</Text></View>
            <View className="resultContentText">倾向是 <Text className="ContentText">{inclination}</Text></View>
          </View>
          <View className="performance"><Text className="performanceText">主要表现：</Text><Text className="performanceText">{performance}</Text></View>
        </View>
        <View className="guidance">
          <View className="guidanceTitle">指导意见：</View>
          {
            this.state.guidance.map((value,key)=>{
              return(
                  <AtAccordion
                    open={value.open}
                    key={key}
                    onClick={this.handleClick.bind(this,key)}
                    title={value.title}
                    className="guidanceItem"
                  >
                    <View className="TextContent">
                    <Text className="guidanceText">{value.content}</Text>
                    </View>
                  </AtAccordion>
              )
            })
          }

        </View>
      </View>
    )
  }
}
export default DiscriminaResult

