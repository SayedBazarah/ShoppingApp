import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions} from 'react-native'

//Addition Library
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import Carousel from 'react-native-snap-carousel';

//Custom Component I wrote
import Header from '../component/Header'
import { Content } from 'native-base';
import ProductImages from '../component/ProductImages'


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
  
  componentWillMount(){
    setTimeout(() => {
      
    }, 1000);
  }

  render() {
    return(

    <View style ={{ flex:1, width: Dimensions.get('window').width, }}>
      <Header
         leftIconAction = {()=> this.props.navigation.navigate('Home')}
         leftIconName = "md-menu"
         rightIconAction = {() => this.props.navigation.navigate('CardItem')}
         rightIconName = "md-cart"
        />
      <Content style= {{  flexDirection:'column',  marginLeft: 10, marginTop:2,marginRight: 10}}>
        <ProductImages 
        images = { this.state.productDetails.image}
        />       
      <View style={{alignItems:'flex-end', }}>
        <Text style={{fontSize: 45,marginRight:15, color:'#D3D3D3' }}>{this.state.productDetails.price}</Text>
        <Text style={{fontSize: 28,marginRight:15, fontWeight: "400",  }}>{this.state.productDetails.title}</Text>
        <Text style={{fontSize: 18,marginRight:15, color:'#808080', width: "80%", textAlign:'right'  }}>{this.state.productDetails.description}</Text>

      </View>
      </Content>
      
      <TouchableOpacity onPress={() => this.props.addItemToCart(this.state.productDetails)} style={{borderWidth: 1, borderRadius:4,marginBottom:10, marginLeft:10, marginRight:10,justifyContent:'center',alignItems:'center',height: 50,backgroundColor:'#3a455c'}}>
        <Text style={{color:'#FFF'}}>ADD TO CARD</Text>
      </TouchableOpacity> 
    </View>
    
    )}
  
renderImages() {
  var list = []
  console.log(this.state.productDetails.image.length)
  for (var i = 0; i < this.state.productDetails.image.length; i++){
    console.log('image url',i,this.state.productDetails.image[i])
      list.push(
       <ProductImages 
       images = { this.state.productDetails.image}
       />  
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
  */
}
const mapDispatchToProps = (dispatch) =>{
 return{
  addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
}
}

export default connect(null,mapDispatchToProps)( ProductScreen )