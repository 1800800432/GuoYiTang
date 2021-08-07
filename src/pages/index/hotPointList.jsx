import React, {Component} from 'react';
import { View, Button, Text ,Image} from '@tarojs/components'
import './hotPointList.less'

import hotPointIcon1 from '../../images/Homeimgs/01.png'
import hotPointIcon2 from '../../images/Homeimgs/02.png'
import hotPointIcon3 from '../../images/Homeimgs/03.png'


class HotPointList extends Component {
  constructor(){
    // 获取路由参数
    super();

    this.hotPointList=[{
      img:hotPointIcon1,
      title:"标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1",
      time:"2021.08.01",
      content:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1",
      index:0
    },{
      img:hotPointIcon2,
      title:"标题2",
      time:"2021.08.02",
      content:"内容2",
      index:0
    },{
      img:hotPointIcon3,
      title:"标题3",
      time:"2021.08.03",
      content:"内容3",
      index:0
    },{
      img:hotPointIcon1,
      title:"标题4",
      time:"2021.08.04",
      content:"内容4",
      index:0
    }]
    console.log(this.hotPointList)
  }

  render () {

    return(
      <View className='hotPointList'>
        {
          this.hotPointList.map(function(value,key){
            return(
              <View className='List' key={key}>
                <Image src={value.img} className="hotPointIcon"></Image>
                <Text className="title">{value.title}</Text>
                <Text className="content">{value.content}</Text>
                <Text className="time">{value.time}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default HotPointList

