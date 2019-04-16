import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {  Left, Right, Icon, Dimensions, FlatList} from 'native-base';
import Header from '../component/Header'

export default class CategoriesScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: []
        }
    }
    componentWillMount(){
        const { navigation } = this.props;
        const cat = navigation.getParam('cat', 'NO-Cat');
          this.setState({
            categories: cat
          })
    }
    render(){
        return (
            <View style={{ flex: 1}}>
                <Header  
                    leftIconAction = {()=> this.props.navigation.navigate('DrawOpen')}
                    leftIconName = "md-menu"
                    rightIconAction = {() => this.props.navigation.navigate('CardItem')}
                    rightIconName = "md-cart"
                    title = "Home"
                />

                <View style={{flex:1,alignContent:'center', alignItems: 'center', paddingTop: 30 }} >
                    {this.renderCategories()}
                </View>
               
            </View>

        );

    }
    renderCategories() {
        let cat = [];
        var list = this.state.categories
        for(var i=0; i<list.length; i++) {
        cat.push(
            <TouchableOpacity key={i}  onPress={() => this.props.navigation.navigate('Category')}>
                <Text style={{ fontSize: 30,  paddingTop: 30 , }} >{list[i].title }</Text>
            </TouchableOpacity>   
        );
        }
        return cat;
    }
}



  

/**    <View key={props.key} style={{position: 'absolute',width:'45%', bottom: '10%', left: "5%", justifyContent: 'center', alignItems: 'center'}}>
                </View>



                <Category
                            key = {id}
                            categoryName={this.state.categoryList.categories[id]}
                            color= '#FFF'
                         />
                 */