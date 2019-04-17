import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

//Addition Library
import Swiper from 'react-native-swiper'

//Custom Component I wrote
import Header from '../component/Header'

export default class ProductScreen extends Component {
  constructor(props){
      super(props)
      this.state= {
        productDetails: [  
            {id: 1, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        ]
      }
  }
  componentWillMount(){
    
    console.log(this.state.productDetails)  
e
  }
  render() {
    return (
      <View style={{position: 'relative'}}>
        <Header
         leftIconAction = {()=> this.props.navigation.navigate('Home')}
         leftIconName = "md-menu"
         rightIconAction = {() => this.props.navigation.navigate('CardItem')}
         rightIconName = "md-cart"
         title = "Home"
        />
        <View style={{flex:1}}>
          <Image style={{flex:1, height:null, width:null}} source={{uri:this.state.productDetails[0].image}} />
        </View>    
        <View style= {{flexDirection: 'column', alignContent: 'space-between'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}> 
            <Text style={{fontSize:26}}>{this.state.productDetails[0].title}</Text>
        </View>
        
          <Text style={{fontSize:14, color:'gray'}}>{this.state.productDetails[0].price}</Text>
          <Text style={{fontSize:14, }}>{this.state.productDetails[0].categoryTitle}</Text>
          <Text style={{fontSize:14, }}>{this.state.productDetails[0].description}</Text>     
      </View>
      <TouchableOpacity style={{borderWidth: 1, borderRadius:4, marginLeft:10, marginRight:10,justifyContent:'center', alignItems:'center',height: 50,backgroundColor:'#3a455c'}}>
        <Text style={{color:'#FFF'}}>ADD TO CARD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth: 1, borderRadius:4, marginLeft:10,marginTop:10, marginRight:10,justifyContent:'center', alignItems:'center',height: 50,backgroundColor:'#3a455c'}}>
        <Text style={{color:'#FFF'}}>Buy Now</Text>
      </TouchableOpacity>
      </View>
    )
  }
  //render Product Details
  
  //render product Images
 
  
/*
   const { navigation } = this.props;
    const product = navigation.getParam('product', 'NO-Data');
    this.setState({productDetails: product})  
    <Swiper autoplay={true} style={{height:250}} >
          <View key={i} style={{flex:1}}>
            <Image style={{flex:1, height:null, width:null}} source={{uri:this.state.productDetails.image}} />
          </View>  
        </Swiper>
  */
}
