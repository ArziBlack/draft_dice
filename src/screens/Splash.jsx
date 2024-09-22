import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {View, StyleSheet, Image, Text} from 'react-native';

const Splash = ({ navigation }) => {
  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    const isOnline = NetInfo.addEventListener(state => {
      state.isConnected ? setIsOffline(false) : setIsOffline(true);
      const offline = !state.isConnected;
    });
    return () => isOnline();
  }, []);

  setTimeout(() => {
    isOffline
      ? navigation.navigate('Connection')
      : navigation.replace('Engineering Drawing Tutorials');
  }, 3000);
  return (
    <View style={style.container}>
      <Image source={require('./assets/logo.png')} style={style.logo} />
      <Text style={style.logoText}>
        ENGINEERING GRAPHICS
      </Text>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00468B',
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoText: {
    fontSize: 45,
    textAlign: 'center',
    color: 'white',
    paddingTop: 20,
    fontWeight: '900',
    fontStyle: 'italic'
  },
});
