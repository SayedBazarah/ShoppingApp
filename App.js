import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Addition Library
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Screens 
import HomeScreen from './src/screen/HomeScreen'
import CategoriesScreen from './src/screen/CategoriesScreen'


const AppStackNavigator = createStackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null
    })
  } ,
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: () => ({
      header:null
    })
  }

  })

const AppContainer = createAppContainer(AppStackNavigator)

export default class App extends React.Component {

  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
