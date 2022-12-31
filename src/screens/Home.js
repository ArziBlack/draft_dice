import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: 1,
      post_title: 'Introduction to Engineering Drawing',
      postImage: require('./assets/af-1.jpeg'),
      title_1: 'What is Engineering/Technical Drawing',
      desc: 'Introduction to the Basics of Engineering Drawing',
      body_1: 'An Engineering Drawing is a type of Technical drawing that includes all the details of a product that needs to be manufactured or machined. Its Goal is to indicate the Geometry required for the products"s creation. ',
      Image_1: require('./assets/af-1.jpeg'),
      body_2: 'The measurements, attributes, and other characteristics of the items are described using standardized languages and symbols, which makes it easier for others to interprete the drawing and produce the part accurately.',
      Image_2: require('./assets/af-1.jpeg'),
      body_3: 'A basic component is often specified with a number of drawings that are connected by a primary drawing or assembly drawing. Additionally, extra textual explanations can be employed in addition to pictorial representations to convey the required information.',
      Image_3: require('./assets/af-1.jpeg'),
      video: '',
      title_2: 'Importance of Engineering Drawing',
      body_4: 'Engineering drawings provide the complete information of a component on its designing aspects. This will be very useful for the engineers to understand the components properly. Drawing gives perfect design on paper with proper dimensions.',
      Image_4: require('./assets/af-1.jpeg'),
      body_5: ' Engineering graphics and design is significant because it teaches engineering and technology students about the methods and accepted procedures that are used in engineering graphics and design all over the world. This facilitates the effective dissemination, production, and application of design concepts accross a wide range of nations.',
      Image_5: require('./assets/af-1.jpeg'),
      body_6: 'Engineering Professionals can utilize enginering graphics and design to help them tackle more complex technological challenges and to help develop their creative thinking.',
      Image_6: require('./assets/af-1.jpeg'),
    },
    {
      id: 2,
      post_title: 'Application and Methods of Representation of Engineering/ Technical Drawing',
      postImage: require('./assets/razer.jpeg'),
      title_1: '',
      desc: 'Methods of representation of Engineering Drawing concepts and their applications',
      body_1: 'Technical drawings, sometimes called Engineering Drawings, are precise, in-depth plans or diagrams that explain how an object works or is made. These bluprints are used as a reference by contractors, electricians and engineers when constructing or maintaining engineering structures',
      Image_1: require('./assets/razer.jpeg'),
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: 'Methods of Representation of Engineering / Technical Drawing',
      body_4: 'Technical Drawings come in a variety of forms, such as 3D drawings (Isometric, Perpective), 3D drawings with an expanded view, complete working drawings, and detail drawings (2D Orthogonal Projections). Diagrams are another sort of Technical drawing with less rigid Data.',
      Image_4: require('./assets/razer.jpeg'),
      body_5: '3D Drawing: Isometric Projections',
      Image_5: '',
      body_6: '2D Drawing: Orthographic Projections',
      Image_6: '',

    },
    {
      id: 3,
      post_title: 'Types of Technical Drawing and Standard Drawing Conventions',
      postImage: require('./assets/razer.jpeg'),
      title_1: 'Types of Technical Drawing',
      desc: 'In this section we will be talking about the types and standard of engineering / Technical drawing',
      body_1: '-Architectural Drawing, Engineering Drawing, Patent Drawing, and General Design Illustration Drawing',
      Image_1: '',
      body_2: 'Technical drawings of a structure (or construction project) that meet the concept of architecture are referred to as architectural drawings or architect drawings',
      Image_2: require('./assets/razer.jpeg'),
      body_3: 'A Technical drawing that is used to communicate information about an object is an engineering drawing. A detail drawing is frequently used to specify the geometry required for the building of a component. To fully specify even a simple component, a lot of drawings are typically required.',
      Image_3: require('./assets/razer.jpeg'),
      video: '',
      title_2: '',
      body_4: 'Any Depictions of the Invention, Techniques or steps to use or implement the invention, or previous art of each feature in the patent claim are considered Patent Drawings. a crucial component of the patent application procedure are the patent drawings.',
      Image_4: require('./assets/razer.jpeg'),
      body_5: 'The last Method is frequently used to develop basic character design concepts. An illustration is a drawing, painting, or printed work of art.',
      Image_5: require('./assets/razer.jpeg'),
      body_6: '',
      Image_6: '',

    },
    {
      id: 4,
      post_title: 'Technical Drawing Basics and Requirements',
      postImage: require('./assets/razer.jpeg'),
      title_1: '',
      desc: 'Basics and Requirements of Engineering Drawing concepts',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',

    },
    {
      id: 4,
      post_title: 'Technical Drawing Line Geometry',
      postImage: require('./assets/samsung.jpeg'),
      title_1: '',
      desc: 'Lines and Line Geometry In Technical Drawing',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',

    },
    {
      id: 5,
      post_title: 'Angles',
      postImage: require('./assets/sony.jpeg'),
      title_1: '',
      desc: 'Angles and it properties',
      body_1: 'Definition: An angle is the measure of the amount of rotation between two lines or planes that intersect at a point. The point where the two points intersect is called the vertex of the angle, the two lines or plane that form the angle are called the Sides of the Angle. The angle is formed by rotating one of the sides around the vertex, and the size of the Angle is determined by the amount of rotation. There are several types of Angles that are commonly used in geometry and other fields Some Examples include:',
      Image_1: '',
      body_2: '-> Right Angle: A Right Angle is an angle that measures exactly 90 Degrees. It is formed by two lines that are perpendicular to each other',
      Image_2: '',
      body_3: '-> Acute Angle: An Acute angle is an angle that measures less than 90 Degrees. It is formed by two lines that are closer than 90 Degrees. It is formed by two lines that are closer together than a right angle',
      Image_3: '',
      video: 'Ciu0WNUoG9w',
      title_2: '',
      body_4: '-> Obtuse Angle: An Obtuse angle is an angle that measures more than 90 Degrees but less than 180 Degrees. It is Formed by two lines that are further apart than a right angle',
      Image_4: '',
      body_5: '-> Straight Line: A Straight Angle is an angle that measures exactly 180 degrees. It is formed by two lines that are parallel to each other and point in opposite directions',
      Image_5: '',
      body_6: 'Angles are important in many fields, including mathematics, engineering, and design, as they are used to describe the orientation and relationships between different objects and shape.',
      Image_6: '',
    },
    {
      id: 6,
      post_title: 'Conic Sections',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Conic sections shapes',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',

    },
    {
      id: 7,
      post_title: 'Loci',
      postImage: require('./assets/sony-headset.jpeg'),
      title_1: '',
      desc: 'Cycloids, Epicycloids, Hypocycloids, E',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 8,
      post_title: 'Tangent to Conic Sections and Loci',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Tangents and Normals to Conic sections and locis',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 9,
      post_title: 'Tangency',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Introduction to Tangency and Arcs in Engineering Drawing',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 10,
      post_title: 'Views in Technical/Engineering Drawing',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Introduction to the Basic Views of Engineering Drawing',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 11,
      post_title: 'Isometric Projection',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Constructing and Interpreting Isometric Figures',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 12,
      post_title: 'Orthographic Projection',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Orthographic Projections in Engineering Drawing',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 13,
      post_title: 'Sectioning',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Sectioning Views in Engineering Drawing',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 14,
      post_title: 'Assembly Drawing',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Assembly Engineering Drawing',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 15,
      post_title: 'Screws thread, Fasteners and Locking Devices',
      postImage: require('./assets/af-1.jpeg'),
      title_1: '',
      desc: 'Screws thread, Fasteners and Locking Device',
      body_1: '',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    }
]);
  const headerBlock = () => {
    return (
      <Text style={Styles.headStyle}>Table of Contents</Text>
    )
  }
  const seperator = () => {
    return <View style={{ height: 1, width: '100%', backgroundColor: '#cce' }} />
  }
  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity
        style={Styles.items}
        key={item.id}
        onPress={() => { navigation.navigate('HomeDetailed', { context: item.post_title, desc: item.desc, image: item.postImage, title_1: item.title_1, body_1: item.body_1, image_1: item.Image_1, body_2:item.body_2, image_2: item.Image_2, body_3: item.body_3, image_3: item.Image_3, video: item.video, title_2:item.title_2 }) }}>
        <View style={Styles.thumbNailContainer}>
          <Image style={Styles.thumbNail} source={item.postImage} />
        </View>
        <View>
          <Text style={Styles.title}>{item.post_title}</Text>
          <Text style={Styles.desc}>{item.desc}</Text>
        </View>
      </TouchableOpacity>)
  }
  return (
    <View style={Styles.container}>
      <FlatList
        ListHeaderComponent={headerBlock}
        ListHeaderComponentStyle={Styles.listHeader}
        contentContainerStyle={{
          padding: 20,
          paddingTop: 35
        }}
        data={data}
        renderItem={renderItems}
        ItemSeparatorComponent={seperator}
        ListEmptyComponent={<Text>Please wait while loading...</Text>}
        keyExtractor={data.id} />
    </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor:'grey'
  },
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    shadowColor: '#000',
    borderRadius: 13,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .4,
    shadowRadius: 20
  },
  thumbNailContainer: {
    backgroundColor: '#abcdef',
    borderRadius: 40,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbNail: {
    height: 70,
    width: 70,
    borderRadius: 8
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginHorizontal: 20,
    paddingRight: 55,
    color: 'black'
  },
  desc: {
    fontSize: 13,
    opacity: 0.5,
    paddingTop: 5,
    marginLeft: 20,
    paddingRight: 60,
    color: '#0077fa'
  },
  image:{
    width:'100%',
    height:'100%'
  }
})

export default Home