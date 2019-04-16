import React, { Component } from 'react'
import { Text, View } from 'react-native'

//Addition Library

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
    const { navigation } = this.props;
    const product = navigation.getParam('product', 'NO-Data');
    this.setState({productDetails: product})    
  }
  render() {
    console.log(this.state.productDetails)
    return (
      <View>
        <Header
         leftIconAction = {()=> this.props.navigation.navigate('DrawOpen')}
         leftIconName = "md-menu"
         rightIconAction = {() => this.props.navigation.navigate('CardItem')}
         rightIconName = "md-cart"
         title = "Home"
        />
      </View>
    )
  }
}
