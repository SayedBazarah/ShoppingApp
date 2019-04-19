import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity
  } from 'react-native';
import { Item, Input,  } from 'native-base';


class LoginScreen extends Component {
    
    static navigationOptions= {
        header: null
    }

    render(){
        return (
            <View style={{flex:1, backgroundColor: '', opacity: .9}} >
            
                <View style={{paddingTop: 60, alignContent:'center', alignItems:'center',position:'relative'}}>
                    <Image style={{height: 200, width: 200}} source={{uri: 'https://res.cloudinary.com/dha2m9q8b/image/upload/v1555516187/GraduationProjectAssets/images_btja6s.jpg'}} />  
                    <Text style={{color:'#FFF',}}>All Your Prefer Shops in One Place</Text>
                </View>

                <View style={{paddingTop:50, flexDirection:'column', alignItems:'center', paddingHorizontal: 5, paddingLeft: 15, paddingRight: 15}}>
                    <Item regular style ={{marginBottom: 8,borderRadius: 8, borderBottomColor:'#3a455c'}}>
                        <Input 
                            placeholder='user@example.com'
                        />
                    </Item>
                    <Item regular style={{borderBottomColor:'#3a455c', borderRadius: 8,}}>
                        <Input 
                            placeholder=' password '
                        />
                    </Item>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{paddingTop: 40, paddingLeft: 10,borderRadius: 8, borderBottomColor:'#3a455c', alignItems:'center', alignContent: 'center'}} >
                        <Text style={{color:'#3a455c', fontSize: 18, fontWeight: '600' }} >  Login </Text>
                   </TouchableOpacity>
                    
            </View>
                
                  
                
                                    

        );
    }
}

export default LoginScreen;