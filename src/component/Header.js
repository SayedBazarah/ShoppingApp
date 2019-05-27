// Basics Library
import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Button, Image} from 'react-native';

//Addition Library 
import {Constants} from 'expo'
import { Header, Left, Right, Icon, Body, Title } from 'native-base';
 
import { connect } from "react-redux";
import cartItems from '../reducers/cartItems';
//Custom Component i Write 

class AppHeader extends Component {
  //Component i wrote 
  //Header 
    render(){
    return(
         <Header  style={{ alignItems: 'center', alignContent: 'center' ,backgroundColor: '#3a455c',height: 55, marginTop: Constants.statusBarHeight, borderBottomColor: '#757575'}}> 
            <Left>
              <Icon onPress={this.props.leftIconAction} name={this.props.leftIconName} style={{color:'white', marginLeft:10}} />
              
            </Left>
            <Body style={styles.body}>
             <Title style={styles.title}>{this.props.title}</Title>
            </Body>
            <Right>
            <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
              <View style={{ position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,           }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{this.props.cartItems.length}</Text>
                </View>
                <Icon onPress={this.props.rightIconAction} name={this.props.rightIconName} style={{color:'white'}} size= {30} />
              </View>
            </Right>
          </Header>
    );
}
}
const mapStateToProps = (state) => {
  return{
    cartItems: state
  }
}

export default connect(mapStateToProps)(AppHeader);

const styles={
  body: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: '100',
    color: '#FFF',


  }
};