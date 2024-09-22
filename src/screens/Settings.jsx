import { View, Text, Linking, Button } from 'react-native'
import React from 'react'

const Settings = () => {
  const url = 'https://www.youtube.com/@engineeringgraphics4978';

  const Seperator = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: '#cce' }} />
  }
  return (
    <View style={{ margin: 20 }}>
      <Text style={{ color: 'grey', fontSize: 20, marginBottom: 20 }}>Appearance Settings (coming soon)</Text>
      <Seperator />
      <Text style={{ color: 'grey', fontSize: 20, marginBottom: 20 }}>Update (coming soon)</Text>
      <Seperator />
      <View style={{ height: 250 }}></View>
      <Button color='red' onPress={()=> Linking.openURL(url)} title='Subscribe to our YOUTUBE Channel'/>
      <View style={{ height: 10 }}></View>
      <Text>Support The Developers by subscribing to our Youtube Channel</Text>
      <Text>Contact us on : arzidrey@gmail.com</Text>
    </View>
  )
}

export default Settings