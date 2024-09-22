import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

const Library = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: "Lines in Engineering Drawing",
      image: '',
      video: 'QEb1j4qj-4',
      body: 'Know the Types of Lines and Their uses in Engineering Drawings',
    },
    {
      id: 2,
      title: "Division of Lines",
      image: '',
      video: '2Cds4GwmZ5k',
      body: 'Divide a Straight line of given length into an equal number of parts',
    },
    {
      id: 3,
      title: "Perpendicular Lines",
      image: '',
      video: '0FCHrqsNGeg',
      body: 'Constructing lines that are at angle 90 degrees to each other',
    },
    {
      id: 4,
      title: "Triangles",
      image: '',
      video: 'ow_lFFk6YeA',
      body: 'Know the different types of triangles in Engineering drawing',
    },
    {
      id: 5,
      title: "Angle 90 Degrees",
      image: '',
      video: '4jTrWiry-dQ',
      body: 'Learn the Construction of Angle 90 degrees',
    },
    {
      id: 6,
      title: "Construct any Polygon on a given square base",
      image: '',
      video: 'Wd3dQ0bwvaI',
      body: 'Learn how to construct any polygon of given length of a side.',
    },
    {
      id: 7,
      title: "Construct Polygon using General method",
      image: '',
      video: 'cwDdRgn4R4c',
      body: 'Construct any polygon of any number of sides using the general method.',
    },
    {
      id: 8,
      title: "Construct a Hexagon",
      image: '',
      video: 'sHV8WysIc9Y',
      body: 'Learn how to easily construct a Hexagon in a few steps',
    },
    {
      id: 9,
      title: "Construct an Ellipse using Auxillary Method",
      image: '',
      video: 'QmWIwJ45_EI',
      body: 'Construct an Ellipse using the Concentric Circle method (Auxillary Method)',
    },
    {
      id: 10,
      title: "Construct a Parabola",
      image: '',
      video: 'hfddxMafASk',
      body: '',
    },
    {
      id: 11,
      title: "Construct an Archmedian Spiral",
      image: '',
      video: 'XsGV9196TtU',
      body: '',
    },
    {
      id: 12,
      title: "Construct an Involute of a Circle",
      image: '',
      video: 'fQjvmsSPnPU',
      body: '',
    },
    {
      id: 13,
      title: "Cycloid",
      image: '',
      video: '_QmwQfqHBjw',
      body: '',
    },
    {
      id: 14,
      title: "Epicycloid",
      image: '',
      video: '',
      body: '',
    },
    {
      id: 15,
      title: "Hypocycloid",
      image: '',
      video: 'idT7Sf6Nwdk',
      body: '',
    },
    {
      id: 16,
      title: "Tangent to an Ellipse",
      image: '',
      video: '',
      body: '',
    },
    {
      id: 17,
      title: "Tangent to a Parabola",
      image: '',
      video: '5J-v1J760Ic',
      body: '',
    },
    {
      id: 18,
      title: "Tangent to a Cycloid",
      image: '',
      video: 'EBrzt4w1-oI',
      body: '',
    },
    {
      id: 19,
      title: "Tangency Problem 1",
      image: '',
      video: 'I7l2-jW3SNA',
      body: '',
    },
    {
      id: 20,
      title: "Tangency problem 2",
      image: '',
      video: 'g5Q2PYqMws0',
      body: '',
    },
    {
      id: 21,
      title: "Tangency Problem 3",
      image: '',
      video: 'EmfAgQi4B6k',
      body: '',
    },
    {
      id: 22,
      title: "Tangency Problem 4",
      image: '',
      video: 'SF_4AbkBwmQ',
      body: '',
    },
    {
      id: 23,
      title: "Tangency Problem 5",
      image: '',
      video: 'z7QUMAyvaTo',
      body: '',
    },
    {
      id: 24,
      title: "Tangency Problem 6",
      image: '',
      video: 'aJb-Mj-yGXg',
      body: '',
    },
    {
      id: 25,
      title: "Isometric Projection Problem 1",
      image: '',
      video: 'qF1kdQ4E13Y',
      body: '',
    },
    {
      id: 26,
      title: "Isometric Projection Problem 2",
      image: '',
      video: 'tFl3g0W05wE',
      body: '',
    },
    {
      id: 27,
      title: "Isometric Projection Problem 3",
      image: '',
      video: '',
      body: '',
    },
    {
      id: 28,
      title: "Isometric Projection Problem 4",
      image: '',
      video: '9ZtIqL3Kr2A',
      body: '',
    },
    {
      id: 29,
      title: "Isometric Projection Problem 5",
      image: '',
      video: 'Q_kSHjuodbg',
      body: '',
    },
    {
      id: 30,
      title: "Isometric Projection Problem 6",
      image: '',
      video: 'GTrNuXM5f2Q',
      body: '',
    },
    {
      id: 31,
      title: "Isometric Circles Projection 1",
      image: '',
      video: 'D4QPxoMEDZ8',
      body: '',
    },
    {
      id: 32,
      title: "Isometric Circles Projection 2",
      image: '',
      video: 'WqSzfm0Fp3I',
      body: '',
    },
    {
      id: 33,
      title: "Isometric Circles Projection 3",
      image: '',
      video: 'FoDREhwyFJQ',
      body: '',
    },
    {
      id: 34,
      title: "Isometric Circles Projection 4",
      image: '',
      video: '_9yY7jlIaFQ',
      body: '',
    },
    {
      id: 35,
      title: "First Angle Projection 1",
      image: '',
      video: '12ev-qLu8D0',
      body: '',
    },
    {
      id: 36,
      title: "First Angle Projection 2",
      image: '',
      video: 'JVQ2qZvZFfs',
      body: '',
    },
    {
      id: 37,
      title: "Third Angle Projection 1",
      image: '',
      video: '5wS1Zn0oaBY',
      body: '',
    },
    {
      id: 38,
      title: "Third Angle Projection 2",
      image: '',
      video: '',
      body: '',
    },
    {
      id: 39,
      title: "Sectioning Example 1",
      image: '',
      video: '6twDCWCVpRU',
      body: '',
    },
    {
      id: 40,
      title: "Sectioning Example 2",
      image: '',
      video: 'Vku5MPJCpi4',
      body: '',
    },
    {
      id: 41,
      title: "Sectioning Example 3",
      image: '',
      video: '1CgUQtOKzSY',
      body: '',
    },
    {
      id: 42,
      title: "True Shape of a Hexagonal Pyramid",
      image: '',
      video: 'SyHs1Y-LX5Q',
      body: '',
    },
    {
      id: 43,
      title: "True Shape of a Cone",
      image: '',
      video: '6TPc1-zE4ro',
      body: '',
    },
    {
      id: 44,
      title: "Development",
      image: '',
      video: '28Hz67YgOLw',
      body: '',
    },
    {
      id: 45,
      title: "FreeHand Sketching 1",
      image: '',
      video: '',
      body: '',
    }
  ]
  const [internet, setInternet] = useState(true);
  const headerBlock = () => {
    return (
      <Text style={Styles.headStyle}>LIBRARY</Text>
    )
  }
  const seperator = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: '#cce' }} />
  }
  const renderItems = ({ item }) => {
    function checkConn() {
      NetInfo.fetch().then((state) => {
        state.isConnected ? setInternet(true) : setInternet(false)
      })
    }
    function truncate(input){
      if (input.length > 15) {
        return input.substring(0, 20) + '...'
      }
      return input;
    }
    return (
      <TouchableOpacity
        style={Styles.items}
        key={item.id}
        onPress={() => {
          checkConn(); internet ?
            navigation.navigate('LibraryDetailed', { context: item.title, image: item.postImage, video: item.video, content: item.body }) : navigation.navigate('Connection');
        }}>
        <View>
          <Text
            style={Styles.title}>{truncate(item.title)}</Text>
        </View>
      </TouchableOpacity>)
  }
  return (
    <View>
      <FlatList
        numColumns={2}
        ListHeaderComponent={headerBlock}
        ListHeaderComponentStyle={Styles.listHeader}
        contentContainerStyle={{
          padding: 20,
          paddingTop: 35
        }}
        data={data}
        renderItem={renderItems}
        ListEmptyComponent={
          <Text>Please Wait while Loading...</Text>
        }
        keyExtractor={data.id} />
    </View>
  )
}

const Styles = StyleSheet.create({
  listHeader: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headStyle: {
    color: '#333',
    fontSize: 27,
    fontWeight: 'bold'
  },
  items: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    backgroundColor: 'rgba(128, 128, 128, 0.98)',
    shadowColor: 'black',
    borderRadius: 23,
    shadowOffset: {
      width: 15,
      height: 20
    },
    shadowOpacity: .3,
    shadowRadius: 10
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginHorizontal: 10,
    padding: 10,
    color: 'white',
    textAlign: 'center',

  }
})
export default Library