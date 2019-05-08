//Basic Library
import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

//Addition Library 
import { Container, Icon, Content, Card, CardItem } from 'native-base'


//Custom Component I Write
import Header from '../component/Header'
import SearchBar from '../component/SearchBar'
import AdsSwiper from '../component/Swiper'
import RecommendedCardItem from '../component/RecommendedCardItem'
import ProductQucklyOverView from '../component/ProductQucklyOverView'


export default class HomeScreen extends Component {
  
  //Constructor to assign state
  constructor(props){
    super(props)
    this.state= {
      recommendedProduct: [],
      categories: [],
      products: [],
    }
  }
  //This function use to do something before component render on screen
  componentWillMount(){

    var recProduct = [
     {itemCreator:"Zara",title:'Black Hat',price:'49.99$',saving:"5.99$",rating:4 ,image:'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg'},
     {itemCreator:"Nike",title:'V Neck T-Shirt',price:'39.99$',saving:"4.99$",rating:3 ,image:'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg'},
     {itemCreator:"Armani",title:'Grey Blazer',price:'899.99$',saving:"79.99$",rating:5 ,image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'},

    ]

    var cat = [
      {id: 1,title: 'MEN',},
      {id: 2,title: 'WOMEN',},
      {id: 1,title: 'ELECTRONICS',},
      {id: 1,title: 'HOME',}, 
      {id: 3,title: 'KIDS',},
      {id: 4,title: 'ACCESORIES',}
    ]

    this.setState({
      recommendedProduct: recProduct,
      categories: cat
    })
  }
  render() {
  return (
    <Container style={styles.container}>
    <View style={{}}>  
      <Header  
        leftIconAction = {()=> this.props.navigation.navigate('DrawOpen')}
        leftIconName = "md-menu"
        rightIconAction = {() => this.props.navigation.navigate('CardItem')}
        rightIconName = "md-cart"
        title = "Home"
      />
      <SearchBar press={() => this.props.navigation.navigate('Categories',{cat: this.state.categories})} />   
    </View>
    <Content>
      
      {this.renderUserState()}
     
      <AdsSwiper/>
      
      <Card style={{marginLeft:10, marginRight:10, marginTop: 10}}> 
        <CardItem header style={{borderBottomWidth:1, borderBottomColor:'#dee0e2'}}>
        <Text style={{color:'#3a455c'}}>Your Recomendation</Text>
        </CardItem>
        {this.renderRecommendedItem()}
      </Card>

      <Card style={{marginLeft:10, marginRight:10, marginTop: 10}}> 
        <CardItem header style={{borderBottomWidth:1, borderBottomColor:'#dee0e2'}}>
          <Text style={{color:'#3a455c'}}>Best Selling</Text>
        </CardItem>
        <Content horizontal={true} style={{paddingLeft:8, flexDirection: 'row', paddingBottom:5,  borderBottomColor:'#dee0e2', borderBottomWidth:1}}>
          {this.renderBestSelling()}
        </Content>
        <CardItem header style={{borderBottomWidth:1,justifyContent:'center', borderBottomColor:'#dee0e2'}}>
          <Text style={{color:'#3a455c', fontSize: 16, fontWeight:'400'}}>More</Text>
        </CardItem>
      </Card>

      {this.renderCategories()}
      </Content>
    </Container>
  )
}

//Render Categories
renderCategories(){
  var list = []
  for( var i = 0; i < this.state.categories.length; i++){
    list.push(
      <Card key={i} style={{marginLeft:10, marginRight:10, marginTop: 10}}> 
        <CardItem header style={{borderBottomWidth:1,justifyContent:'center', borderBottomColor:'#dee0e2'}}>
          <Text style={{color:'#3a455c',fontSize: 18}}>{this.state.categories[i].title}</Text>
        </CardItem>
        <Content horizontal={true} style={{paddingLeft:8, flexDirection: 'row', paddingBottom:5,  borderBottomColor:'#dee0e2', borderBottomWidth:1}}>
          {this.renderCategoryItem()}
        </Content>
        <CardItem header style={{borderBottomWidth:1,justifyContent:'center', borderBottomColor:'#dee0e2'}}>
          <Text style={{color:'#3a455c', fontSize: 16, fontWeight:'400'}}>More</Text>
        </CardItem>
      </Card>
    )
  }
  return list
}
//Render Category Items
renderCategoryItem(){
  var list = []
  for( var i = 0; i < this.state.recommendedProduct.length; i++ ){
    list.push(
      <ProductQucklyOverView 
        key= {i}
        imageUrl= {this.state.recommendedProduct[i].image}
        itemPrice= {this.state.recommendedProduct[i].price}
      />
    )
  }
  return list
}
//Render Best Selling Items
renderBestSelling(){
  var list = []
  for( var i = 0; i < this.state.recommendedProduct.length; i++ ){
    list.push(
      <ProductQucklyOverView 
        key= {i}
        imageUrl= {this.state.recommendedProduct[i].image}
        itemPrice= {this.state.recommendedProduct[i].price}
      />
    )
  }
  return list
}
//Render Recommended Item 
renderRecommendedItem(){
  var list = []
  for( var i = 0; i < this.state.recommendedProduct.length; i++ ){
    list.push(
        <RecommendedCardItem 
          key = {i}
          product = {this.state.recommendedProduct[i]}  
          dir= {() => this.props.navigation.navigate('Product', {product: this.state.recommendedProduct[i]})}
        />

    )
  }
  return list
}

// Render Simple View That show If user Register or redirect user to Login or Sigh in
renderUserState(){
  return(
      <View style={{height:50,  backgroundColor:'white', flexDirection:'row', paddingHorizontal:5, alignItems:'center', justifyContent:'space-between'}}>
          <Text>Hello, Guest ... </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{flexDirection:'row'}}>
            <Text>Login/SignUp </Text>
            <Icon name="arrow-forward" style={{fontSize:18}} />
          </TouchableOpacity>
      </View>

  )
}
 
}

const styles = {
    container:{
      flex: 1,
      position:'absolute'
    }
}

/**
 * https://res.cloudinary.com/dha2m9q8b/image/upload/v1555321252/GraduationProjectAssets/swiper_2_pqeekk.jpg
 * https://res.cloudinary.com/dha2m9q8b/image/upload/v1555321251/GraduationProjectAssets/swiper_3_tus3nd.jpg
 * 
 * https://res.cloudinary.com/dha2m9q8b/image/upload/v1555321247/GraduationProjectAssets/recommended_2_ll0dc4.jpg
https://res.cloudinary.com/dha2m9q8b/image/upload/v1555321246/GraduationProjectAssets/recommended_1_tadegx.jpg
https://res.cloudinary.com/dha2m9q8b/image/upload/v1555321233/GraduationProjectAssets/recommended_3_wthzyh.jpg
 
 {id: 1,title: 'MEN',},
 {id: 2,title: 'WOMEN',},
 {id: 1,title: 'ELECTRONICS',},
 {id: 1,title: 'HOME',}, 
 {id: 3,title: 'KIDS',},
 {id: 4,title: 'ACCESORIES',}

 import React, { Component } from 'react'
import { Text, View } from 'react-native'

//Addition Library
import Swiper from 'react-native-swiper'

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
         leftIconAction = {()=> this.props.navigation.navigate('Home')}
         leftIconName = "md-menu"
         rightIconAction = {() => this.props.navigation.navigate('CardItem')}
         rightIconName = "md-cart"
         title = "Home"
        />
        
 
      </View>
    )
  }
   //render product Images
   
   renderProductImage(){
    var list =[]
    var listOfProducts = this.state.productDetails.image
    
    for(var i = 0; i < listOfProducts.length; i++){
        list.push(
            <View key={i} style={{flex:1}}>
                <Image style={{flex:1, height:null, width:null}} source={{uri:list}} />
            </View>      
        )
    }
    return list
}
/
}


*/