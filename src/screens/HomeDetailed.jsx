import { Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import YoutubeIframe from 'react-native-youtube-iframe'

const HomeDetailed = ({ route }) => {
  return (
    <ScrollView >
      <Image source={route.params.image} style={Styles.banner} />
      <Text style={Styles.title}>{route.params.context}</Text>
      <Text style={Styles.subtitle}>{route.params.title_1}</Text>
      <Text style={Styles.desc}>{route.params.body_1}</Text>
      {route.params.image_1  && <Image source={route.params.image_1} style={Styles.image} />}
      <Text style={Styles.desc}>{route.params.body_2}</Text>
      {route.params.image_2 && <Image source={route.params.image_2} style={Styles.image} />}
      <Text style={Styles.desc}>{route.params.body_3}</Text>
      {route.params.video  ? <YoutubeIframe
        height={300}
        play={false}
        videoId={route.params.video} /> : null}
      {route.params.image_3 && <Image source={route.params.image_3} style={Styles.image} />}
      <Text style={Styles.subtitle}>{route.params.title_2}</Text>
      <Text style={Styles.desc}>{route.params.body_4}</Text>
      {route.params.image_4  && <Image source={route.params.image_4} style={Styles.image} />}
      <Text style={Styles.desc}>{route.params.body_5}</Text>
      {route.params.image_5  && <Image source={route.params.image_5} style={Styles.image} />}
      <Text style={Styles.desc}>{route.params.body_6}</Text>
      <Image source={route.params.image_6} style={Styles.image} />
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 25,
    color: 'black',
    margin: 15,
    textAlign: 'center',
    fontWeight:'900'
  },
  desc: {
    color: 'black',
    margin: 10,
    fontSize: 18
  },
  image: {
    width: '90%',
    height: 180,
    alignSelf: 'center'
  },
  subtitle:{
    fontSize:22,
    margin:5,
    color:'black',
    fontWeight:'800'
  }
})

export default HomeDetailed