import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

//Addition Library
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'

//Custom Component I wrote
import Header from '../component/Header'

class ProductScreen extends Component {
  constructor(props){
      super(props)
      this.state= {
        productDetails: [  
          {id: 1, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        ]
      }
  }
  componentWillMount(){
   

  }
  render() {
    return (
      <View style={{position: 'relative'}}>
        <Header
         leftIconAction = {()=> this.props.navigation.navigate('Home')}
         leftIconName = "md-menu"
         rightIconAction = {() => this.props.navigation.navigate('CardItem')}
         rightIconName = "md-cart"
        />
          <Image style={{ height: '50%', width:null}} source={{uri:this.state.productDetails[0].image}} />     
        <View style= {{flexDirection: 'column',marginLeft:10, alignContent: 'space-between'}}>

          <Text style={{fontSize:34, marginTop:10}}>{this.state.productDetails[0].price}</Text>
          <Text style={{fontSize:26, marginTop: 20, }}>{this.state.productDetails[0].title}</Text>     
          <Text style={{fontSize:14, color:'gray' }}>{this.state.productDetails[0].categoryTitle}</Text>
          <Text style={{fontSize:14, }}>{this.state.productDetails[0].description}</Text>     
      </View>
      <TouchableOpacity onPress={() => this.props.addItemToCart(this.state.productDetails)} style={{borderWidth: 1, borderRadius:4, marginLeft:10, marginRight:10,justifyContent:'center', alignItems:'center',height: 50,backgroundColor:'#3a455c'}}>
        <Text style={{color:'#FFF'}}>ADD TO CARD</Text>
      </TouchableOpacity>
      
      </View>
    )
  }
  //render Product Details
  
  //render product Images
  renderProductImages(){
    var list = []
    list.push(
    <View style={{flex:1}}>
    </View>  
    )
    return list
  }

/*
   const { navigation } = this.props;
    const product = navigation.getParam('product', 'NO-Data');
    this.setState({productDetails: product})  
    <Swiper autoplay={true} style={{height:250}} >
          <View key={i} style={{flex:1}}>
            <Image style={{flex:1, height:null, width:null}} source={{uri:this.state.productDetails.image}} />
          </View>  
        </Swiper>
        const mapDispatchToProps = (dispatch) => {
  return {
      addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}
<TouchableOpacity onPress={() => this.props.navigation.navigate('CardItem',{item: this.state.productDetails})} style={{borderWidth: 1, borderRadius:4, marginLeft:10,marginTop:10, marginRight:10,justifyContent:'center', alignItems:'center',height: 50,backgroundColor:'#3a455c',paddingBottom:10}}>
        <Text style={{color:'#FFF'}}>Buy Now</Text>
      </TouchableOpacity>
 const { navigation } = this.props;
    const product = navigation.getParam('product', 'NO-Data');
    this.setState({
      productDetails: product
    })
  */
}
const mapDispatchToProps = (dispatch) =>{
 return{
  addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
}
}

export default connect(null,mapDispatchToProps)( ProductScreen )