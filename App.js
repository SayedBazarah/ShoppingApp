import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Addition Library
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux'

//Screens 
import HomeScreen from './src/screen/HomeScreen'
import CategoriesScreen from './src/screen/CategoriesScreen'
import LoginScreen from './src/screen/LoginScreen'
import CategoryScreen from './src/screen/CategoryScreen'
import ProductScreen from './src/screen/ProductScreen'
import CardScreen from './src/screen/CardScreen';
import store from './src/store'

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
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header:null
    })
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: () => ({
      header:null
    })
  },
  Product: {
    screen: ProductScreen,
    navigationOptions: () => ({
      header:null
    })
  },
  CardItem: {
    screen: CardScreen,
    navigationOptions: () => ({
      header:null
    })
  },

  },
  {
    initialRouteName: "Home"
  }
  )

const AppContainer = createAppContainer(AppStackNavigator)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
