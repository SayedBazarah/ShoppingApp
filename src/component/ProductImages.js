//Basics Component
import React, { Component } from 'react'
import { Text, View, Image ,Dimensions} from 'react-native'

//Addition Library
import Swiper from 'react-native-swiper'
export default class AdsSwiper extends Component {
  constructor(props){
      super(props)
      this.state={
        list:  this.props.images || null 
      }
  }
 componentWillMount(){
   setTimeout(() => {
     
   }, 500);
    console.log('props',this.props.images)
    console.log('state',this.state.list)

 }
  render() {
    return (
      <Swiper autoplay={true}  width= {Dimensions.get('window').width}  >
            {this.renderSwiper()}
      </Swiper>
    )
  }

   //Render Swiper That show some Ads
   renderSwiper() {
    var list = []
    var image = this.state.list
    console.log('image',image)
    for (let i =0; i < image.length  ; i++){
        list.push(
            <View key={i} style={{flex:1}}>
                <Image style={{flex:1, height:null, width:null, resizeMode:'cover'}} source={{uri:image[i]}} />
            </View>               
      );
    }
    
    return list
    }


}

//Data
