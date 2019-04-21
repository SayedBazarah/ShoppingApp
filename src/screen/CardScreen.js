import React, { Component } from 'react'
import { Text, View, Image,Button, TouchableOpacity } from 'react-native'

import { Content, Icon } from 'native-base'
//Component I wrote
import Header from '../component/Header'
import { connect } from 'react-redux';
import CartItemProduct from '../component/CartItemProduct';



class CardScreen extends Component {
    
  constructor(props) {
      super(props);
      
  }
  componentWillMount(){
    var list = this.props.cartItems
    this.setState({
      product: this.list
    })

  }
 
  render() {
    return (
      <View style={{flex:1}}>
          <Header 
            leftIconAction = {()=> this.props.navigation.navigate('DrawOpen')}
            leftIconName = "md-menu"
            title = "Cart Items"
            rightIconName = "md-cart"
          />
        <Content style={{flex:1, marginTop:20}}>
         {this.renderProducts()}

        </Content>
        <TouchableOpacity  style={{borderWidth: 1, borderRadius:4,marginBottom:10, marginLeft:10,marginTop:10, marginRight:10,justifyContent:'center', alignItems:'center',height: 50,backgroundColor:'#3a455c',paddingBottom:10}}>
        <Text style={{color:'#FFF',fontSize:18,fontWeight:'500', justifyContent:'center',paddingTop:5, alignItems:'center',}}>Check Out</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
  //renderProducts
  renderProducts(){
    var list =[]
    
    if (this.props.cartItems.length > 0 ){
      for(var arr = 0; arr < this.props.cartItems.length; arr++ ){
        product = this.props.cartItems[arr]
        for (var i = 0; i < product.length; i++){
          list.push(
            <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center',paddingBottom: 10}}>
              <View style={{flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                <Image style={{height:50, width: 50,paddingBottom:7}} source={{uri: product[i].image}} />
                <Text style={{fontSize: 16}}>{product[i].title}</Text>
              </View>
              <Text style={{fontSize: 20}}>{product[i].price}</Text>
              {this.renderCounter()}
              <TouchableOpacity onPress={this.props.removeItem} style={{borderWidth:1, justifyContent:'center', alignItems:'center', borderRadius:4,height:32,width:32}}>
               <Icon name="close" style={{fontSize:18}}  />
              </TouchableOpacity>
            </View>
          )
        }
        console.log(product[0].image)
      }
      return list
    }else{
      console.log('cart is empty')
      return <View style={{ justifyContent:'center',alignItems:'center'}}><Text style={{fontSize: 50}}>Cart Is empty</Text></View>
    }
  }

  //renderCounter
  renderCounter(){
    var count = 1
    
    if(count = 0 ){

    }else{

    }
    return(
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{paddingRight: 10}} >
         <Icon name="arrow-dropup" style={{fontSize:18}} size = {32} />
        </TouchableOpacity>
        <Text>1</Text>
        <TouchableOpacity  style={{paddingLeft:10}}> 
         <Icon name="arrow-dropdown" style={{fontSize:18}}  size = {32}/>
        </TouchableOpacity>
      </View>
    )
  }
}
  


const mapStateToProps = (state) => {
  return{
    cartItems: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardScreen);



/**
  cartItems: [
                {id: 1, count:10, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg', description: "Hello there, i'm a cool product with a heart of gold."}
            ]
             <Image 
                    style={{height:200, width: 200}} 
                    source={{uri:this.props.cartItems[i].image}}
                />
                <Text>{this.props.cartItems[i].title}</Text>
                <Text>{this.props.cartItems[i].count}</Text>
                <Text>{this.props.cartItems[i].price}</Text>
                <Icon />
 */