import React from "react";
import { View, StyleSheet,ScrollView,FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
    // const placesOutput = props.places.map((place, i) => (
    //   <ListItem
    //     key={i}
    //     placeName={place}
    //     onItemPressed={() => props.onItemDeleted(i)}
    //   />
    // ));
    return <FlatList style={styles.listContainer}
    data={props.places}
    renderItem={(info)=>(
        <ListItem
        
        placeName={info.item.name}
        placeimage={info.item.placeimage}
        onItemPressed={() => props.onItemDeleted(info.item.key)}
      />

    )}/>
    {/* {placesOutput} */}
    
  
  };
  
  const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
  });
  
  export default placeList;
  