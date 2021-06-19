import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Header } from 'react-native-elements';

export default class WrittingStoryScreen extends React.Component {
    render(){
        return(
            <View>

                <Header
                backgroundColor={'black'}
                centerComponent={{
                    text:'Story-Hub',
                    style:{color:'red', fontSize:'20'}
                }} />

                <TextInput
                style={styles.inputBox}
                value={} />

                <TextInput
                style={styles.inputBox}
                value={} />
                
                <TextInput
                style={styles.inputBox}
                value={} />

                <TouchableOpacity style={styles.goButton}>             
                Submit
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    goButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
      backgroundColor:'yellow',
      color:'black'
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    imageIcon: {
      width: 150,
      height: 150,
      marginLeft: 95,
    }
  });
  