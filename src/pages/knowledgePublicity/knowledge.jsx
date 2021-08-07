import React, {Component} from 'react';
import { View , Text} from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './knowledge.less'

class Knowledge extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'中医中医药健康管理服务规范\n',
      star:'star',
      publisher:'河北省中医药管理局\n',
      time:'2020-09-17     11：02：17\n',
      content:'老年人中医药健康管理服务\n一、服务对象\n辖区内 65 岁及以上常住居民。\n二、服务内容\n每年为 65 岁及以上老年人提供 1 次中医药健康管理服务，内容包括中医体质辨识和中医药保健指导。\n（一）中医体质辨识\n按照老年人中医药健康管理服务记录表前 33 项问题采集信息，根据体质判定标准进行体质辨识，并将辨识结果告知服务对象。\n（二）中医药保健指导\n根据不同体质从情志调摄、饮食调养、起居调摄、运动保健、穴位保健等方面进行相应的中医药保健指导。\n四、服务要求\n（一）开展老年人中医药健康管理服务可结合老年人健康体检和慢性病患者管理及日常诊疗时间。\n（二）开展老年人中医药健康管理服务的乡镇卫生院、村卫生室和社区卫生服务中心（站）应当具备相应的设备和条件。有条件的地区应利用信息化手段开展老年人中医药健康管理服务。\n（三）开展老年人中医体质辨识工作的人员应当为接受过老年人中医药知识和技能培训的卫生技术人员。开展老年人中医药保健指导工作的人员应当为中医类别执业（助理）医师或接受过中医药知识和技能专门培训能够提供上述服务的其他类别医师（含乡村医生）。\n（四）服务机构要加强与村（居）委会、派出所等相关部门的联系，掌握辖区内老年人口信息变化。\n（五）服务机构要加强宣传，告知服务内容，使更多的老年人愿意接受服务。\n（六）每次服务后要及时、完整记录相关信息，纳入老年人健康档案。\n五、工作指标\n（一）老年人中医药健康管理率＝年内接受中医药健康管理服务的 65 岁及以上居民数/年内辖区内 65 岁及以上常住居民数×100％。\n注：接受中医药健康管理是指建立了健康档案、接受了中医体质辨识、中医药保健指导、服务记录表填写完整。',
      enclosure:'附件：\n1.老年人中医药健康管理服务记录表\n2.体质判定标准表'
    }
  }
  starClick=()=>{
    if(this.state.star=='star'){
      this.setState({
        star:"star-2"
      })
    }else{
      this.setState({
        star:"star"
      })
    }
    
  }
  render () {
    const knowledge=this.state
    return (
      <View className='knowledge' style="whiteSpace: 'pre-wrap'">
        <Text className="title at-article__h1">{knowledge.title}</Text>
        <View className="star"><AtIcon onClick={this.starClick} value={knowledge.star} size='30' color="yellow"></AtIcon></View>
        <Text className="publisher at-article__p">{knowledge.publisher}</Text>
        <Text className="time at-article__p">{knowledge.time}</Text>
        <View className="content at-article__p" style="whiteSpace: 'pre-wrap'"><Text>{knowledge.content}</Text></View>
        <View className="enclosure at-article__p" style="whiteSpace: 'pre-wrap'">
          <Text>{knowledge.enclosure}</Text>
        </View>
      </View>
    )
  }
}

export default Knowledge

