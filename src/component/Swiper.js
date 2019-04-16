//Basics Component
import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

//Addition Library
import Swiper from 'react-native-swiper'

export default class AdsSwiper extends Component {
  constructor(props){
      super(props)
      this.state={
        list: [
            'https://res.cloudinary.com/dha2m9q8b/image/upload/v1555321252/GraduationProjectAssets/swiper_2_pqeekk.jpg',
            'https://res.cloudinary.com/dha2m9q8b/image/upload/v1555321251/GraduationProjectAssets/swiper_3_tus3nd.jpg'
       ]
      }
  }
 
  render() {
    return (
      <Swiper autoplay={true} style={{height:100}} >
            {this.renderSwiper()}
      </Swiper>
    )
  }

   //Render Swiper That show some Ads
   renderSwiper() {
    var list = []
    for (let i =0; i < this.state.list.length; i++){
        list.push(
            <View key={i} style={{flex:1}}>
                <Image style={{flex:1, height:null, width:null}} source={{uri:this.state.list[i]}} />
            </View>               
      );
    }
    
    return list
    }


}

//Data
