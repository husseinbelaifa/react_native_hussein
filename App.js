import React from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import PlaceItem from "./src/components/PlaceItem/PlaceItem";
export default class App extends React.Component {
  state={
    placeName:'',
    places:[]
  }

  placeNameChangedHandler=(event)=>{
    this.setState({
      placeName:event
    })
    //  alert(event);
  }

  placeSubmitHandler=()=>{

    if(this.state.placeName.trim()==='') return 
    this.setState(prevState=>{
      return {
        places:prevState.places.concat({key : Math.random(),value :prevState.placeName})
      }
    })

  }
  placeDeletedHandler= key=>{

    this.setState(prevState=>{

      return {
        places:prevState.places.filter((place)=>{
          return place.key!==key
        })
      }

    })

  }
  render() {
    // const placesoutput=this.state.places.map((place,i)=>(
    //   // <ListItem key={i} placeName={place} 
    //   // onItemPressed={()=>{
    //   //   alert('Item pressed with id'+i)
    //   // }}/>
    //   <PlaceItem
    //   places={this.state.places}
    //   onItemDeleted={this.placeDeletedHandler}
    // />
    // ))
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <View style={styles.inputcontainer}>
        <TextInput style={styles.placeinput} value={this.state.placeName}
        placeholder="An Awsome Place"
      
        onChangeText={this.placeNameChangedHandler}/>
        <Button style={styles.placebutton} title="add"
        onPress={this.placeSubmitHandler}/>
      </View>
      <PlaceItem
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputcontainer: {
    // flex: 1,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: 'center'

  },
  placeinput:{

    width:"70%"

  },
  placebutton:{
    width:"30%"
  },
  listcontainer:{
   width:"100%"
  }
});
