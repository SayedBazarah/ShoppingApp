import React from 'React';
import { View, Text, Image } from 'react-native';


const ProductQucklyOverView = props => {
    return (
        <View style={{paddingTop: 5,alignItems: 'center',paddingLeft:10, }}>
            <Image
                style={{ height:120, width:90 }}
                source={{uri:props.imageUrl}}
            />
            <Text style={{fontSize:12}}>{props.itemPrice}$ US</Text>
        </View>
    );
}

export default ProductQucklyOverView;