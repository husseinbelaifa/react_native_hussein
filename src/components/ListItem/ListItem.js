import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

const ListItem=(props)=>(
 
    <TouchableOpacity onPress={props.onItemPressed}>
<View style={styles.ListItem} >
      <Image   style={styles.placeimage} source={props.placeimage}/>
    <Text>{props.placeName}</Text>
</View>
</TouchableOpacity>
)


const styles=StyleSheet.create({
    ListItem:{
        width:"100%",
        padding:10,
        backgroundColor: '#eee',
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center",
        flex:1
    },
    placeimage:{
        marginRight:8,
        height:30,
        width:30
    }
})

export default ListItem;