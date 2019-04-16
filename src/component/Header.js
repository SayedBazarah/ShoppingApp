// Basics Library
import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Button, Image} from 'react-native';

//Addition Library 
import {Constants} from 'expo'
import { Header, Left, Right, Icon, Body, Title } from 'native-base';
  
//Custom Component i Write 

class AppHeader extends Component {
  
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
              <Icon onPress={this.props.rightIconAction} name={this.props.rightIconName} style={{color:'white', marginLeft:10}} />
            </Right>
          </Header>
    );
}
}

export default AppHeader;

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