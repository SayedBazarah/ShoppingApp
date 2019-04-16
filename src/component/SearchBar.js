import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


//Addition Library
import { Item, Icon, Input } from 'native-base'
export default class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: []
    }
  }
  componentWillMount(){
    this.setState({
      categories: this.props.categories
    })
    console.log(this.state.categories)
  }
  render() {
    
    return (
        <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 5, backgroundColor:'#3a455c' ,height: 70, borderBottomColor: '#757575', left:0, right: 0}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Categories',)} >
                <View style={{width:100, backgroundColor:'#e7e7eb', height:50, borderRadius:4, padding:10}}>
                <Text style={{fontSize: 12 }}>Shop by 
                <Text style={{fontWeight: 'bold'}}> Category</Text>
                </Text>
                </View>
            </TouchableOpacity>
            <View style={{flex:1, height: "100%", marginLeft: 5, justifyContent:'center'}}>
              <Item style={{backgroundColor:'white', paddingHorizontal:10, borderRadius: 4 }}>
              <Icon name="search" style={{fontSize:20, paddingTop: 5}} />
              <Input placeholder="search" />
              </Item>
            </View>
      </View>
    )
  }
}
