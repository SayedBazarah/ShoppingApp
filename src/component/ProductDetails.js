import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card,Item, CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating';

export default class ProductDetails extends Component {
  constructor(props){
    super(props)
  }
  render() {
   // console.log(this.props.product)
    return (
      <TouchableOpacity onPress={this.props.press} style={{flexDirection: 'column',paddingTop:10,paddingBottom:10, backgroundColor:'#FFF',alignItems:'center'}}>
            <View>
                <Image 
                    style={{ height:90, width:70,paddingBottom:5}} 
                    source= {{uri: this.props.product.image}}
                    />
            </View>

          <Item style={{flex:.5,flexDirection:'column', alignItems:'center', height:90,}}>
            <StarRating
            disabled={true}
            maxStars={5}
            rating= {5}
            starSize={12}
            fullStarColor='orange'
            emptyStarColor='orange'
            />
            <Text style={{width: 120, textAlign:'center'}}>{this.props.product.title}</Text>
            <Text style={{fontSize:12, color:'grey'}}>{this.props.product.categoryTitle}</Text>
            <Text style={{fontSize:14, fontWeight:'bold',color:'#c4402f'}}>{this.props.product.price}</Text>
            <Text><Text style={{fontSize:12, color:'grey', fontWeight:'300'}}>You save </Text>2.99</Text>
            
          </Item>
      </TouchableOpacity>
    )
  }
}
 