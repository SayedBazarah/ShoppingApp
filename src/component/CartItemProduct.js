import React, { Component } from 'react'
import { Text, View, Image, } from 'react-native'

export class CartItemProduct extends Component {
  render() {
    return (
      <View style = {{flexDirection:'row',flex:1}}>
        <Image style= {{width:100, height:100}} source={{uri:this.props.image}} />
        <Text>{this.props.title}</Text>
        <Text>{this.props.price}</Text>
        
      </View>
    )
  }
}

export default CartItemProduct
