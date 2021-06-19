import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, TabRouter } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WrittingStoryScreen from './screens/writeStoryScreen';
import ReadStoryScreen from './screens/readStoryScreen';

export default class App extends React.Component {
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
  )};
}

const TabNavigator = createBottomTabNavigator({
  Writting: {screen: WrittingStoryScreen},
  Read: {screen: ReadStoryScreen}},
{
  defaultNavigationOptions:({navigation}) => ({
    tabBarIcon:({}) => {
      if(routeName === 'Writting'){
        return(
          <Image 
          source={require('assets/read.png')}
          style={{width:40, height:40}} />
       )
      }else if(routeName === 'Read'){
        return(
          <Image  
          source={require('assets/write.png')}
          style={{width:40, height:40}} />
        )
      }
    }
  })
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});