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
        {id: 1, rating:'5', title: 'Bueaty Dress for girls ', categoryId: 5, categoryTitle: 'KIDS', price: '22$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61060693_2268140016588774_1162390859522506752_o_t4jnlm.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999377/Products/61317193_2268140149922094_5327748691207913472_o_bd3mjg.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 2, rating:'4',  title: 'Kids Dress', categoryId: 2, categoryTitle: 'KIDS', price: '49.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61592385_2268140826588693_4047492732103426048_o_zmxvb3.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60997239_2268140829922026_5308212925087875072_n_qvffju.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 3, rating:'5',  title: "Men's Shose ", categoryId: 2, categoryTitle: 'MEN', price: '12$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999370/Products/b4_ql5spn.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999367/Products/b3_sgsnio.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/b2_yac4kj.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 7, rating:'1',  title: "Kids Clothes", categoryId: 2, categoryTitle: 'KIDS', price: '19.9$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/61042359_2268214866581289_1531351124597014528_n_kiu2pk.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/61042359_2268214866581289_1531351124597014528_n_kiu2pk.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
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
      {itemCreator: "Zara", rating:'4',  title: 'Kids Dress', categoryId: 2,saving:"10.99$", categoryTitle: 'KIDS', price: '49.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61592385_2268140826588693_4047492732103426048_o_zmxvb3.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60997239_2268140829922026_5308212925087875072_n_qvffju.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
      {itemCreator: "Zara", rating:'5',  title: "Men's Shose ", categoryId: 2,saving:"4.99$", categoryTitle: 'MEN', price: '12$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999370/Products/b4_ql5spn.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999367/Products/b3_sgsnio.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/b2_yac4kj.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
      {itemCreator: "Zara", rating:'1',  title: "Kids Clothes", categoryId: 2,saving:"3.99$", categoryTitle: 'KIDS', price: '19.9$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/61042359_2268214866581289_1531351124597014528_n_kiu2pk.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/61042359_2268214866581289_1531351124597014528_n_kiu2pk.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
      
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
        <CardItem  header style={{borderBottomWidth:1,justifyContent:'center', borderBottomColor:'#dee0e2'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BestSelling')} > 
          <Text style={{color:'#3a455c', fontSize: 16, fontWeight:'400'}}>More</Text>
          </TouchableOpacity>
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
      <ProductQucklyOverView 
        key= {i}
        imageUrl= {this.state.bestSelling[i].image[0]}
        itemPrice= {this.state.bestSelling[i].price}
      />
    )
  }
  return list
}
//Render Recommended Item 
renderRecommendedItem(){
  const {navigate} = this.props.navigation;
  var list = []
  var product = this.state.recommendedProduct
  for( var i = 0; i < product.length; i++ ){
    list.push(
      <RecommendedCardItem 
            key = {i}
            product = {product[i]}  
            onPress= {() => navigate('Category',{cat: 'Recommendation'})}
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
  * 
  * {id: 01, rating:'3',  title: 'Greeen Dress ', categoryId: 2, categoryTitle: 'WOMEN', price: '62$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999360/Products/60981390_2268139133255529_7212391640751669248_n_mssppj.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999373/Products/61123664_2268139279922181_6169865398540828672_o_kfvok5.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999373/Products/61123664_2268139279922181_6169865398540828672_o_kfvok5.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 02, rating:'4',  title: 'Kids Dress', categoryId: 2, categoryTitle: 'KIDS', price: '49.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999371/Products/61592385_2268140826588693_4047492732103426048_o_zmxvb3.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60997239_2268140829922026_5308212925087875072_n_qvffju.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 03, rating:'5',  title: "Men's Shose ", categoryId: 2, categoryTitle: 'MEN', price: '12$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999370/Products/b4_ql5spn.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999367/Products/b3_sgsnio.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/b2_yac4kj.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
          {id: 04, rating:'3',  title: "Men's Shose ", categoryId: 2, categoryTitle: 'ACCESORIES', price: '12$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999370/Products/b4_ql5spn.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999367/Products/b3_sgsnio.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/b2_yac4kj.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 05, rating:'4',  title: 'Women Clothes', categoryId: 2, categoryTitle: 'WOMEN', price: '16.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999366/Products/b0_gfkv0g.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/b_t2s4ra.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 06, rating:'5',  title: 'HUGO BOSS Watch ', categoryId: 2, categoryTitle: 'ACCESORIES', price: '170.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999362/Products/61019272_2268202309915878_842423784609677312_o_lmamkb.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999362/Products/61187629_2268202216582554_6976352633439125504_n_uv3rta.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999365/Products/61332843_2268202153249227_9133576545711947776_n_resrqw.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 07, rating:'1',  title: "Kids Clothes", categoryId: 2, categoryTitle: 'KIDS', price: '19.9$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/61042359_2268214866581289_1531351124597014528_n_kiu2pk.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/61042359_2268214866581289_1531351124597014528_n_kiu2pk.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 08, rating:'4',  title: 'Sport Shirt', categoryId: 2, categoryTitle: 'MEN', price: '9.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60868895_2258155340920575_840054178138030080_n_jhrmpl.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999358/Products/60958831_2258155290920580_3456607959201611776_n_g7ep8g.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},
        {id: 09, rating:'2',  title: 'Sport Shirt', categoryId: 2, categoryTitle: 'WOMEN', price: '9.99$', image: ['https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999359/Products/60868895_2258155340920575_840054178138030080_n_jhrmpl.jpg','https://res.cloudinary.com/dha2m9q8b/image/upload/v1558999358/Products/60958831_2258155290920580_3456607959201611776_n_g7ep8g.jpg'], description: "Hello there, i'm a cool product with a heart of gold."},

  */