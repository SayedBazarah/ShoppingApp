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
      cat: this.props.navigation.state.params.cat || '',
      items: [
        {id: 1, rating:'5', title: 'Bueaty Dress for girls ', categoryId: 5, categoryTitle: 'KIDS', price: '22$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61060693_2268140016588774_1162390859522506752_o_t4jnlm.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999377/Products/61317193_2268140149922094_5327748691207913472_o_bd3mjg.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, rating:'4',  title: 'Kids Dress', categoryId: 2, categoryTitle: 'KIDS', price: '49.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61592385_2268140826588693_4047492732103426048_o_zmxvb3.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60997239_2268140829922026_5308212925087875072_n_qvffju.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 3, rating:'5',  title: "Men's Shose ", categoryId: 2, categoryTitle: 'MEN', price: '12$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999370/Products/b4_ql5spn.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999367/Products/b3_sgsnio.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/b2_yac4kj.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 8, rating:'4',  title: 'Sport Shirt', categoryId: 2, categoryTitle: 'MEN', price: '9.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60868895_2258155340920575_840054178138030080_n_jhrmpl.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999358/Products/60958831_2258155290920580_3456607959201611776_n_g7ep8g.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 9, rating:'2',  title: 'Sport Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '9.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60868895_2258155340920575_840054178138030080_n_jhrmpl.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999358/Products/60958831_2258155290920580_3456607959201611776_n_g7ep8g.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, rating:'3',  title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'KIDS', price: '12$',  image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61592385_2268140826588693_4047492732103426048_o_zmxvb3.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60997239_2268140829922026_5308212925087875072_n_qvffju.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 5, rating:'4',  title: 'Women Clothes', categoryId: 2, categoryTitle: 'WOMEN', price: '16.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999366/Products/b0_gfkv0g.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/b_t2s4ra.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 6, rating:'5',  title: 'HUGO BOSS Watch ', categoryId: 2, categoryTitle: 'ACCESORIES', price: '170.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999362/Products/61019272_2268202309915878_842423784609677312_o_lmamkb.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999362/Products/61187629_2268202216582554_6976352633439125504_n_uv3rta.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/61332843_2268202153249227_9133576545711947776_n_resrqw.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, rating:'3',  title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$',  image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61592385_2268140826588693_4047492732103426048_o_zmxvb3.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60997239_2268140829922026_5308212925087875072_n_qvffju.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 1, rating:'3',  title: 'Greeen Dress ', categoryId: 2, categoryTitle: 'WOMEN', price: '62$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999360/Products/60981390_2268139133255529_7212391640751669248_n_mssppj.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999373/Products/61123664_2268139279922181_6169865398540828672_o_kfvok5.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999373/Products/61123664_2268139279922181_6169865398540828672_o_kfvok5.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, rating:'3',  title: "Men's Shose ", categoryId: 2, categoryTitle: 'ACCESORIES', price: '12$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999370/Products/b4_ql5spn.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999367/Products/b3_sgsnio.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/b2_yac4kj.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, rating:'3',  title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$',  image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61592385_2268140826588693_4047492732103426048_o_zmxvb3.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60997239_2268140829922026_5308212925087875072_n_qvffju.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 10, rating:'4.5',  title: 'Black Leather Hat', categoryId: 1, categoryTitle: 'MEN', price: '2$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 15, rating:'4',  title: 'Long Sleeves T-Shirt', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_100,y_50/v1500465308/pexels-photo-500034_uvxwcq.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 11, rating:'3',  title: 'Pink Diamond Watch', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 22, rating:'4',  title: 'Golden Tie', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: ['http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 100, rating:'4.5', title: 'Black Pearl Earrings', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,g_center,h_250/v1500465307/pexels-photo-262226_kbjbl3.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 215, rating:'4',  title: 'Grey Blazer', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: [ 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 12, rating:'4', title: 'Mirror Sunglasses', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250/v1500465307/pexels-photo-488541_s0si3h.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 29, rating:'5', title: 'White Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: ['http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 16, rating:'5', title: 'Tie', categoryId: 1, categoryTitle: 'MEN', price: '2$', image: ['http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
        {id: 101, rating:'5', title: 'Casual- T Shirt Woman Cotton', categoryId: 1, categoryTitle: 'WOMEN', price: '29$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373943/GraduationProjectAssets/T-Shirt-Women-2019-Summer-T-Shirt-Casual-Tshirt-Woman-Cotton-Top-Tee-Ladies-Solid-Short.jpg_640x640_uy6ovb.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
        {id: 102, rating:'5', title: 'Mens Clothing T-Shirt Tees', categoryId: 1, categoryTitle: 'MEN', price: '9.99$', image:[ 'https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373902/GraduationProjectAssets/Finn-Wolfhard-Let-s-Get-Weird-Men-s-Clothing-T-Shirt-Tees_msoc0f.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
        {id: 103, rating:'5', title: 'Zkess Women Button Front Balloon Sleeve', categoryId: 1, categoryTitle: 'WOMEN', price: '59$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373754/GraduationProjectAssets/61zReyTwN3L._UY606__pko590.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373754/GraduationProjectAssets/61zReyTwN3L._UY606__pko590.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373945/GraduationProjectAssets/Zkess-Women-Button-Front-Balloon-Sleeve-Vintage-Dress-Fashion-Causal-V-Neck-Fitted-and-Flared-Party.jpg_640x640_jzlhxo.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
       
      ]
    }
  }  
  
  render() {
      console.log( this.state.cat)
        return (
          <View style={styles.Conatiner}>
              
            <Header  
                leftIconAction = {()=> this.props.navigation.navigate('DrawOpen')}
                leftIconName = "md-menu"
                rightIconAction = {() => this.props.navigation.navigate('CardItem')}
                rightIconName = "md-cart"
                title = { this.state.cat }
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