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
      products: [
        {id: 1, rating:'4', title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, rating:'3',  title: 'V Neck T-Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 10, rating:'4.5',  title: 'Black Leather Hat', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250,x_248/v1500465308/fashion-men-s-individuality-black-and-white-157675_wnctss.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 15, rating:'4',  title: 'Long Sleeves T-Shirt', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_100,y_50/v1500465308/pexels-photo-500034_uvxwcq.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 11, rating:'3',  title: 'Pink Diamond Watch', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,h_250/v1500465308/pexels-photo-179909_ddlsmt.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 22, rating:'4',  title: 'Golden Tie', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: ['http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 100, rating:'4.5', title: 'Black Pearl Earrings', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,g_center,h_250/v1500465307/pexels-photo-262226_kbjbl3.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 215, rating:'4',  title: 'Grey Blazer', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: [ 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 12, rating:'4', title: 'Mirror Sunglasses', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: ['http://res.cloudinary.com/atf19/image/upload/c_crop,g_face,h_250/v1500465307/pexels-photo-488541_s0si3h.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 29, rating:'5', title: 'White Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: ['http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 16, rating:'5', title: 'Tie', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: ['http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
        {id: 101, rating:'5', title: 'Casual- T Shirt Woman Cotton', categoryId: 1, categoryTitle: 'WOMEN', price: '29$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373943/GraduationProjectAssets/T-Shirt-Women-2019-Summer-T-Shirt-Casual-Tshirt-Woman-Cotton-Top-Tee-Ladies-Solid-Short.jpg_640x640_uy6ovb.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
        {id: 102, rating:'5', title: 'Mens Clothing T-Shirt Tees', categoryId: 1, categoryTitle: 'MEN', price: '9.99$', image:[ 'https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373902/GraduationProjectAssets/Finn-Wolfhard-Let-s-Get-Weird-Men-s-Clothing-T-Shirt-Tees_msoc0f.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
        {id: 103, rating:'5', title: 'Zkess Women Button Front Balloon Sleeve', categoryId: 1, categoryTitle: 'WOMEN', price: '59$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373754/GraduationProjectAssets/61zReyTwN3L._UY606__pko590.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373754/GraduationProjectAssets/61zReyTwN3L._UY606__pko590.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373945/GraduationProjectAssets/Zkess-Women-Button-Front-Balloon-Sleeve-Vintage-Dress-Fashion-Causal-V-Neck-Fitted-and-Flared-Party.jpg_640x640_jzlhxo.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
      ],
      bestSelling: []
    }
  }
  //This function use to do something before component render on screen
  componentWillMount(){
    const BestSelling = [
      {id: 101, rating:'5', title: 'Casual- T Shirt Woman Cotton', categoryId: 1, categoryTitle: 'WOMEN', price: '29$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373943/GraduationProjectAssets/T-Shirt-Women-2019-Summer-T-Shirt-Casual-Tshirt-Woman-Cotton-Top-Tee-Ladies-Solid-Short.jpg_640x640_uy6ovb.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
      {id: 102, rating:'5', title: 'Mens Clothing T-Shirt Tees', categoryId: 1, categoryTitle: 'MEN', price: '9.99$', image:[ 'https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373902/GraduationProjectAssets/Finn-Wolfhard-Let-s-Get-Weird-Men-s-Clothing-T-Shirt-Tees_msoc0f.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
      {id: 103, rating:'5', title: 'Zkess Women Button Front Balloon Sleeve', categoryId: 1, categoryTitle: 'WOMEN', price: '59$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373754/GraduationProjectAssets/61zReyTwN3L._UY606__pko590.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373754/GraduationProjectAssets/61zReyTwN3L._UY606__pko590.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1556373945/GraduationProjectAssets/Zkess-Women-Button-Front-Balloon-Sleeve-Vintage-Dress-Fashion-Causal-V-Neck-Fitted-and-Flared-Party.jpg_640x640_jzlhxo.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},  
      {id: 215, rating:'4',  title: 'Grey Blazer', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: [ 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},

    ]
    var recProduct = [
     {itemCreator:"Zara",category:'MEN',title:'Black Hat',price:'49.99$',saving:"5.99$",rating:4 ,image:'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,w_358,x_150/v1500465309/pexels-photo-206470_nwtgor.jpg'},
     {itemCreator:"Nike",category:'MEN',title:'V Neck T-Shirt',price:'39.99$',saving:"4.99$",rating:3 ,image:'http://res.cloudinary.com/atf19/image/upload/c_crop,h_250,x_226,y_54/v1500465309/pexels-photo-521197_hg8kak.jpg'},
     {itemCreator:"Armani",category:'MEN',title:'Grey Blazer',price:'899.99$',saving:"79.99$",rating:5 ,image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_300/v1500284127/pexels-photo-497848_yenhuf.jpg'},

    ]
    
    var cat = [
      {id: 1,title: 'MEN',},
      {id: 2,title: 'WOMEN',},
      {id: 3,title: 'KIDS',},
      {id: 4,title: 'ACCESORIES',}
    ]

    this.setState({
      recommendedProduct: recProduct,
      categories: cat,
      bestSelling: BestSelling
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
    const param =this.state.categories[i].title
    list.push(
      <Card key={i} style={{marginLeft:10, marginRight:10, marginTop: 10}}> 
        <CardItem header style={{borderBottomWidth:1,justifyContent:'center', borderBottomColor:'#dee0e2'}}>
          <Text style={{color:'#3a455c',fontSize: 18}}>{param}</Text>
        </CardItem>
        <Content horizontal={true} style={{paddingLeft:8, flexDirection: 'row', paddingBottom:5,  borderBottomColor:'#dee0e2', borderBottomWidth:1}}>
          {this.renderCategoryItem(param)}
        </Content>
        <CardItem  header style={{borderBottomWidth:1,justifyContent:'center', borderBottomColor:'#dee0e2'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Category',{cat: param})} > 
          <Text style={{color:'#3a455c', fontSize: 16, fontWeight:'400'}}>More</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    )
  }
  return list
}

//Render Category Items
renderCategoryItem(catname){
  const product = this.state.products.filter((val) =>{
    if ( val.categoryTitle == catname ) return val
  })

  var list = []
  for( var i = 0; i < product.length; i++ ){
    list.push(
      <ProductQucklyOverView 
        key= {i}
        imageUrl= {product[i].image[0]}
        itemPrice= {product[i].price}
      />
    )
  }
  return list
}
//Render Best Selling Items
renderBestSelling(){
  var list = []
  for( var i = 0; i < this.state.bestSelling.length; i++ ){
    list.push(
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Category',)} >  
      <ProductQucklyOverView 
        key= {i}
        imageUrl= {this.state.bestSelling[i].image[0]}
        itemPrice= {this.state.bestSelling[i].price}
      />
      </TouchableOpacity>
    )
  }
  return list
}
//Render Recommended Item 
renderRecommendedItem(){
  var list = []
  var product = this.state.recommendedProduct
  for( var i = 0; i < product.length; i++ ){
    list.push(
      <RecommendedCardItem 
            key = {i}
            product = {product[i]}  
            onPress= {() => this.props.navigation.navigate('Category',{})}
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
