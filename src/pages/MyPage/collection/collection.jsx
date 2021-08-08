import React, {Component} from 'react';
import { View, Button, Text,Image } from '@tarojs/components'

import imgs1 from  "/src/images/Homeimgs/01.png"
import imgs2 from  "/src/images/Homeimgs/02.png"

import './collection.less'

class Collection extends Component {
  constructor(){
    super()
    this.state={
      collectionList:[{
        collectionIcon:imgs1,
        collectionTitle:"标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1",
        collectionTime:"2021.08.01",
        collectionContent:"内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1",
      },{
        collectionIcon:imgs2,
        collectionTitle:"标题2",
        collectionTime:"2021.08.01",
        collectionContent:"内容2",
      },]
    }
  }

  render () {
    return (
      <View className="collectionList">
      {
        this.state.collectionList.map((value,key)=>{
          return(
            <View className='collection' key={key}>
              <Image className="collectionIcon" src={value.collectionIcon}></Image>
              <Text className="collectionTitle">{value.collectionTitle}</Text>
              <Text className="collectionContent">{value.collectionContent}</Text>
              <Text className="collectionTime">{value.collectionTime}</Text>
            </View>
          )
        })
      }
      </View>
    )
  }
}
export default Collection

