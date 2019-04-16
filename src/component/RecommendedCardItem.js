import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {  CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating';

export default class RecommendedCardItem extends Component {
  render() {
    return (
        <TouchableOpacity 
          onPress={this.props.dir}
          style={{flex:1, justifyContent: "center", flexDirection: 'row', padding: 8}}
        >
            <View>
                <Image 
                    style={{ height:90, width:60}} 
                    source={{uri:this.props.product.image}} 
                    />
            </View>

          <Right style={{flex:1, alignItems:'flex-start',paddingHorizontal:20, height:90,}}>
            <Text>{this.props.product.title}</Text>
            <Text style={{fontSize:12, color:'grey'}}>{this.props.product.itemCreator}</Text>
            <Text style={{fontSize:14, fontWeight:'bold',color:'#c4402f'}}>{this.props.product.price}</Text>
            <Text><Text style={{fontSize:12, color:'grey', fontWeight:'300'}}>You save </Text>{this.props.product.saving}</Text>
            <StarRating
            disabled={true}
            maxStars={5}
            rating={this.props.product.rating}
            starSize={12}
            fullStarColor='orange'
            emptyStarColor='orange'
            />
          </Right>
        </TouchableOpacity>
    )
  }
}
 