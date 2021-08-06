import {Component} from 'react'
import {View, Text, Image} from "@tarojs/components";
import './hotThirdpart.less'

import img1 from '../../images/HotSpotimgs/HuaShui.png'
import img2 from '../../images/HotSpotimgs/ChengYao.png'
import img3 from '../../images/HotSpotimgs/GouQi.png'

class HotThirdpart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotThirdList: [{
        index: 0,
        img: img1,
        title: '立冬养生sssssssssssssss吃什么',
        time: '2021.08.05',
        content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1'
      }, {
        index: 1,
        img: img2,
        title: '在疫情期间需要注意什么',
        time: '2021.08.15',
        content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2'
      },{
        index: 2,
        img: img3,
        title: '常见护肤美容中',
        time: '2021.08.15',
        content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3'
      }]
    }
  }

  render() {
    const {hotThirdList} = this.state;
    return (
      <View className='xinxiliulan'>
        {
          hotThirdList.map(e => {
            return (
              <View className='List'>
                <Image src={e.img} className='hotimg'/>
                <Text className='title'>{e.title}</Text>
                <Text className='content'>{e.content}</Text>
                <Text className='time'>{e.time}</Text>
              </View>
            )
          })
        }


        {/*<AtList>
          <AtListItem className='ListItem'
            title='立冬养生吃什么'
            thumb='../../images/HotSpotimgs/HuaShui.png'
            // hasBorder={false}
          />
          <AtListItem className='ListItem'
            title='常见护肤美容中'
            note='描述信息'

            thumb='../../images/HotSpotimgs/HuaShui.png'
          />
          <AtListItem className='ListItem'
            title='在疫情期间需要注意什么在疫情期间需要注意什么在疫情期间需要注意什么'
            note='描述信息'
            thumb='../../images/HotSpotimgs/HuaShui.png'
          />
        </AtList>*/}

      </View>

    )
  }
}
export default HotThirdpart

