import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
      <Text style={styles.text}>This channel is aimed at teaching and aiding in the construction of engineering/Technical drawing constructions for representing two and three dimensional objects and conveying information about an object in Detail. 
      This channel is dedicated to those willing to get the knowledge of Engineering Drawing / Graphics, thereby guiding them on how to construct, draw, sketch and solve Engineering Graphics problems.</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  text: {
    color: '#00468B',
    fontSize: 18
  }
})