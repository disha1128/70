import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
//import {Header} from 'react-native-elements'
//import { SafeAreaProvider } from 'react-native-safe-area-context'


export default class WriteStory extends React.Component {
  render(){
      return(
          <View style={styles.container}>


            <TextInput style={styles.inputBox}placeholder='Title of the story' ></TextInput>
            <TextInput style={styles.inputBox} placeholder='author of the story' ></TextInput>
            <TextInput style={styles.inputBox2} multiline={true} placeholder='write story'  ></TextInput>
            <TouchableOpacity style={{width:150, height:30,backgroundColor:'pink', justifyContent:'center', alignItems:'center'}}></TouchableOpacity>

          </View>
        
      )
  }
        }
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'yellow'
          },
          displayText:{
            fontSize: 15,
            textDecorationLine: 'underline'
          },
          scanButton:{
            backgroundColor: '#2196F3',
            padding: 10,
            margin: 10
          },
          
          buttonText:{
            fontSize: 15,
            textAlign: 'center',
            marginTop: 10
          },
          inputView:{
            flexDirection: 'row',
            margin: 20
          },
          inputBox:{
            width: 700,
            height: 40,
            borderWidth: 0.5,
            margin:10,
            fontSize: 20
          },
          inputBox2:{
            width: 700,
            height: 400,
            borderWidth: 0.5,
            margin:10,
            fontSize: 20
          },
          scanButton:{
            backgroundColor: '#66BB6A',
            width: 50,
            borderWidth: 1.5,
            borderLeftWidth: 0
          },
          submitButton:{ 
            backgroundColor: '#FBC02D', 
            width: 100, height:50 }, 
            submitButtonText:{ 
              padding: 10, 
              textAlign: 'center', 
              fontSize: 20,
               fontWeight:"bold",
               color: 'white' }
        });
    
 /* <SafeAreaProvider></SafeAreaProvider>
<Header centerComponenet={{text:'Read Story', style:{color:'#fffadd'}}}></Header>*/