import React, {Component} from 'react';
import { View, Text, Button,Image, StyleSheet } from 'react-native';

import { Content, Card, CardItem } from 'native-base';
import Swiper from 'react-native-swiper';

import ProductDetails from '../component/ProductDetails'
import Header from '../component/Header'
import SearchBar from '../component/SearchBar';
import AdsSwiper from '../component/Swiper'

export default class CategoryScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {id: 1, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 10, title: 'Black Leather Hat', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 15, title: 'Long Sleeves T-Shirt', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_100,y_50/v1500465308/pexels-photo-500034_uvxwcq.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 11, title: 'Pink Diamond Watch', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 22, title: 'Golden Tie', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 100, title: 'Black Pearl Earrings', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_center,h_250/v1500465307/pexels-photo-262226_kbjbl3.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 215, title: 'Grey Blazer', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 12, title: 'Mirror Sunglasses', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250/v1500465307/pexels-photo-488541_s0si3h.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 29, title: 'White Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 16, title: 'Tie', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg', description: "Hello there, i'm a cool product with a heart of gold."},  
      ]
    }
  }  
  
  render() {
        return (
          <View style={styles.Conatiner}>
              
            <Header  
                leftIconAction = {()=> this.props.navigation.navigate('DrawOpen')}
                leftIconName = "md-menu"
                rightIconAction = {() => this.props.navigation.navigate('CardItem')}
                rightIconName = "md-cart"
                title = "Home"
            />
            <SearchBar />
            
            <Content style={styles.ContentStyle}>
           
            <AdsSwiper/> 
            <Card style={{marginLeft:10, marginRight:10, marginTop: 10}}> 
                <CardItem header style={{justifyContent:'center',borderBottomWidth:1, borderBottomColor:'#dee0e2'}}>
                        <Text>Option bar</Text>
                </CardItem>       
            </Card>  

            <View style={{}}>
                    {this.renderProduct()}
            </View>
              
            </Content>
          </View>
        )
      }

      renderProduct() {
        
        var productList = []
        let product = this.state.items
        for ( let i =0 ; i < product.length; i+=2 ){
          if ( product[i+1]){
          productList.push(
          <View style={{flexDirection:'row' ,marginBottom:5}}>
            <View style={{flex:.5, marginLeft:10, marginRight:5, marginTop: 5}}>
              <ProductDetails
                  product = {product[i]}
                  press = {() => this.props.navigation.navigate('Product',{product: product[i]})}
              />
              </View>
              <View style={{flex:.5, marginLeft:5, marginRight:10, marginTop: 5}}>
                <ProductDetails
                product = {product[i+1]}
                press = {() => this.props.navigation.navigate('Product',{product: product[i+1]})}
              />
          </View>
          </View> ) 
          }else{
            productList.push(
            <View style={{flexDirection:'row'}}>
            <View style={{flex:.5, marginLeft:10, marginRight:5, marginTop: 5}}>
              <ProductDetails
                  product = {product}
                  press = {() => this.props.navigation.navigate('Product',{product: product[i]})}
              />
              </View>
           
         </View>  
          

          )
        }
         
        }
        return productList

      }
    }
    
    
    const styles = StyleSheet.create({
        Conatiner:{
            flex: 1,
        },
        header: {
            backgroundColor: '#3a455c',
            height: 70,
            borderBottomColor: '#757575',
        },
        headerText: {
            fontSize: 18,
            justifyContent: 'center',
            color: '#FFF',
            paddingTop: 15
    
        },
        searchBar: {
           
           
        },
        ContentStyle: {
            backgroundColor:'#d5d5d6', 
            
        },
        sliderStyle: {
            height:100,
            marginTop: 10,
            position:'relative', 
    
        }
    });