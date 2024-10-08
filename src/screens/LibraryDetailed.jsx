import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import React from 'react';

const LibraryDetailed = ({route}) => {
  return (
    <View>
      <Text style={Styles.title}>{route.params.context}</Text>
      <View style={{height: 250, width: '100%', backgroundColor: 'black'}}>
        <YoutubeIframe height={300} play={false} videoId={route.params.video} />
      </View>
      <Text style={{margin: 10, color: 'red', textAlign: 'center'}}>
        Put on your Internet Connection For video streaming from youtube
      </Text>
      <ScrollView style={Styles.body}>
        <Text style={Styles.desc}>{route.params.content}</Text>
        <Image style={Styles.image} source={route.params.image} />
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: '#00468B',
    margin: 15,
    textAlign: 'left',
    fontWeight: '800',
  },
  desc: {
    color: '#525151',
    margin: 10,
  },
  image: {
    width: '90%',
    height: 180,
    alignSelf: 'center',
  },
  body:{
    margin: 10,
  }
});
export default LibraryDetailed;
