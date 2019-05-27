import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

//Addition Library
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'

//Custom Component I wrote
import Header from '../component/Header'
import { Content } from 'native-base';


class ProductScreen extends Component {
  constructor(props){
      super(props)
      this.state= {
        productDetails: this.props.navigation.state.params.product
      }
  }
  getNavigationParams() {
    return this.props.navigation.state.params || {}
  }
  
  render() {
    return(

    <View style ={{ flex:1, }}>
      
      <Content style= {{  flexDirection:'row',  marginTop: 5}}>
        <Swiper removeClippedSubviews={false} autoplay={true} showsButtons={true} height={200}  style={{height: 100 }} >
          {
            this.state.productDetails.image.map((image) => {
              console.log(image);
              <View style={{flex:1}}>
                <Image style={{flex:1,width: 100,height: 100}} source={{uri:image }}/>
              </View>
              
            })
          }
        </Swiper>
      
     
      </Content>
      
      <TouchableOpacity onPress={() => this.props.addItemToCart(this.state.productDetails)} style={{borderWidth: 1, borderRadius:4,marginBottom:10, marginLeft:10, marginRight:10,justifyContent:'center',alignItems:'center',height: 50,backgroundColor:'#3a455c'}}>
        <Text style={{color:'#FFF'}}>ADD TO CARD</Text>
      </TouchableOpacity> 
    </View>
    
    )}
  
renderSwiper() {
  var list = []
  console.log(this.state.productDetails.image.length)
  for (var i = 0; i < this.state.productDetails.image.length; i++){
    console.log('image url',i,this.state.productDetails.image[i])
      list.push(
        <View key={i} style={{flex:1}}>
        </View>    
    );
  }

  return (list)
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
return (
      <View style={{position: 'relative'}}>
        <Header
         leftIconAction = {()=> this.props.navigation.navigate('Home')}
         leftIconName = "md-menu"
         rightIconAction = {() => this.props.navigation.navigate('CardItem')}
         rightIconName = "md-cart"
        />
       <View style={{marginTop:0}}>
        <Image style={{ height: '50%', width:null}} source={{uri:this.state.productDetails.image}} />     
        <View style= {{flexDirection: 'column',marginLeft:10, alignContent: 'space-between'}}>
            <Text style={{fontSize:26, marginTop: 20, }}>{this.state.productDetails.title}</Text>     
            <Text style={{fontSize:14, color:'gray' }}>{this.state.productDetails.categoryTitle}</Text>
            <Text style={{fontSize:14, }}>{this.state.productDetails.description}</Text>     
        </View>
        </View>
      <TouchableOpacity onPress={() => this.props.addItemToCart(this.state.productDetails)} style={{borderWidth: 1, borderRadius:4,marginBottom:10, marginLeft:10, marginRight:10,justifyContent:'center', alignItems:'center',height: 50,backgroundColor:'#3a455c'}}>
        <Text style={{color:'#FFF'}}>ADD TO CARD</Text>
      </TouchableOpacity>
      
      </View>
    )








          <Text style={{fontSize:34, marginTop:10}}>{this.state.productDetail.price}</Text>

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