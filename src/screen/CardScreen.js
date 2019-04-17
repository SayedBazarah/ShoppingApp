import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import { Content, Icon } from 'native-base'
//Component I wrote
import Header from '../component/Header'
export default class CardScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };
    }
    componentWillMount(){
        var product =[ {id: 1, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg', description: "Hello there, i'm a cool product with a heart of gold."},]
        this.setState({
            cartItems: product
        })
    }
  render() {
    return (
      <View>
          <Header 
            leftIconAction = {()=> this.props.navigation.navigate('DrawOpen')}
            leftIconName = "md-menu"
            title = "Home"
          />
        <Content>
            <View>
              <View>
                <Image style={{height:100, width: 100}} />
                <Text>Title</Text>
            </View>
                <View><Text>Count</Text></View>
                <Icon />
            </View>
        </Content>
      <TouchableOpacity style={{borderWidth: 1, borderRadius:4, marginLeft:10,marginTop:10, marginRight:10,justifyContent:'center', alignItems:'center',height: 50,backgroundColor:'#3a455c'}}>
        <Text style={{color:'#FFF'}}>Buy Now</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
