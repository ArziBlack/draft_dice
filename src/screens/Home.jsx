import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Modal, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

const Home = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: 1,
      post_title: 'Introduction to Engineering Drawing',
      postImage: require('./assets/introduction.jpeg'),
      title_1: 'What is Engineering/Technical Drawing',
      desc: 'Introduction to the Basics of Engineering Drawing',
      body_1: 'An Engineering Drawing is a type of Technical drawing that includes all the details of a product that needs to be manufactured or machined. Its Goal is to indicate the Geometry required for the products"s creation. ',
      Image_1: '',
      body_2: 'The measurements, attributes, and other characteristics of the items are described using standardized languages and symbols, which makes it easier for others to interprete the drawing and produce the part accurately.',
      Image_2: '',
      body_3: 'A basic component is often specified with a number of drawings that are connected by a primary drawing or assembly drawing. Additionally, extra textual explanations can be employed in addition to pictorial representations to convey the required information.',
      Image_3: '',
      video: '',
      title_2: 'Importance of Engineering Drawing',
      body_4: 'Engineering drawings provide the complete information of a component on its designing aspects. This will be very useful for the engineers to understand the components properly. Drawing gives perfect design on paper with proper dimensions.',
      Image_4: '',
      body_5: ' Engineering graphics and design is significant because it teaches engineering and technology students about the methods and accepted procedures that are used in engineering graphics and design all over the world. This facilitates the effective dissemination, production, and application of design concepts accross a wide range of nations.',
      Image_5: '',
      body_6: 'Engineering Professionals can utilize enginering graphics and design to help them tackle more complex technological challenges and to help develop their creative thinking.',
      Image_6: '',
    },
    {
      id: 2,
      post_title: 'Application and Methods of Representation of Engineering/ Technical Drawing',
      postImage: require('./assets/applications.jpeg'),
      title_1: '',
      desc: 'Methods of representation of Engineering Drawing concepts and their applications',
      body_1: 'Technical drawings, sometimes called Engineering Drawings, are precise, in-depth plans or diagrams that explain how an object works or is made. These bluprints are used as a reference by contractors, electricians and engineers when constructing or maintaining engineering structures',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: 'Methods of Representation of Engineering / Technical Drawing',
      body_4: 'Technical Drawings come in a variety of forms, such as 3D drawings (Isometric, Perpective), 3D drawings with an expanded view, complete working drawings, and detail drawings (2D Orthogonal Projections). Diagrams are another sort of Technical drawing with less rigid Data.',
      Image_4: require('./assets/views.png'),
      body_5: '3D Drawing: Isometric Projections',
      Image_5: require('./assets/isometric.jpeg'),
      body_6: '2D Drawing: Orthographic Projections',
      Image_6: require('./assets/orthographic.png'),

    },
    {
      id: 3,
      post_title: 'Technical Drawings and Standard Drawing Conventions',
      postImage: require('./assets/types.jpeg'),
      title_1: 'Types of Technical Drawing',
      desc: 'In this section we will be talking about the types and standard of engineering / Technical drawing',
      body_1: '-Architectural Drawing, Engineering Drawing, Patent Drawing, and General Design Illustration Drawing',
      Image_1: '',
      body_2: 'Technical drawings of a structure (or construction project) that meet the concept of architecture are referred to as architectural drawings or architect drawings',
      Image_2: '',
      body_3: 'A Technical drawing that is used to communicate information about an object is an engineering drawing. A detail drawing is frequently used to specify the geometry required for the building of a component. To fully specify even a simple component, a lot of drawings are typically required.',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: 'Any Depictions of the Invention, Techniques or steps to use or implement the invention, or previous art of each feature in the patent claim are considered Patent Drawings. a crucial component of the patent application procedure are the patent drawings.',
      Image_4: '',
      body_5: 'The last Method is frequently used to develop basic character design concepts. An illustration is a drawing, painting, or printed work of art.',
      Image_5: '',
      body_6: '',
      Image_6: '',

    },
    {
      id: 4,
      post_title: 'Standard Conventions in Engineering',
      postImage: require('./assets/standards.jpeg'),
      title_1: '',
      desc: 'Standard Conventions Used In Engineering Drawing',
      body_1: 'In the construction industry all drawings are carried out to a Britsh Standard referred to as BS 1192. This ensures that every drawing produced in the UK relating to a building project will follow the same principles.',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '',
      title_2: 'Application of Drawing Standards',
      body_4: 'Dimensioning, Letters and Symbols, Borders and Title Blocks, Scales and Scale Rulers, Graphical Symbols and Abbreviations',
      Image_4: require('./assets/applications.jpeg'),
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',

    },
    {
      id: 5,
      post_title: 'Technical Drawing Basics and Requirements',
      postImage: require('./assets/borderline.jpg'),
      title_1: '',
      desc: 'Basics and Requirements of Engineering Drawing concepts',
      body_1: 'Drawing enhances inventiveness and fosters the creation of new inventions. The information supplied in the drawing can be used to estimate the project. Hence the use of drawing materials is highly essential.',
      Image_1: '',
      body_2: 'The basic instruments used in Technical Drawing are:',
      Image_2: '',
      body_3: 'Drawing Sheet, Drawing Board, Mini Drafter, T-Square, Compass, Divider, Set Squares, Clinograph, Protractor, French Curves, Templates, Pencils, Eraser.',
      Image_3: '',
      video: 'ynvtJWQ-6jU',
      title_2: 'Drawing Layout: Border Lines and Title Block',
      body_4: '(1) Border Lines: A border is a line outlined around the sheet edge. It should be a dark line that extends 10mm from the sheet edge on either side. It is done to make your drawing sheet look better',
      Image_4: require('./assets/borderline.jpg'),
      body_5: '(2) Title Block: The title block is made up of the information boxes at the bottom right corner of a drawing. It contains information about the drawing, including its title, author, scale, and date of creation. The measurement of the title block differs, depending on the use of the drawing',
      Image_5: require('./assets/titleblock.jpg'),
      body_6: '',
      Image_6: '',

    },
    {
      id: 6,
      post_title: 'Technical Drawing Line Geometry and Lettering',
      postImage: require('./assets/lettering.jpg'),
      title_1: 'Lines',
      desc: 'Lettering, Lines and Line Geometry In Technical Drawing',
      body_1: 'A line is a straight one-dimensional figure that does not have a thickness, and it extends endlessly in both directions.',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: 'QEb1jJ4qj-4',
      title_2: 'Lettering and Tips on Lettering',
      body_4: 'Technical Lettering is the process of forming letters, numerals, and other characters in Technical drawing. It is used to describe, or provide detailed specifications for an object. Technical Drawings must be correctly lettered in order to communicate information to others.',
      Image_4: require('./assets/lettering.jpg'),
      body_5: '(1) All figures and letters on the drawing should be UNIFORM, NEAT and CAREFULLY made, (2) There are two types of lettering techniques -- Vertical letters and Inclined Letters. (3) you will use Vertical -- UPPERCASE letters for all your paper and pencil drawings. (4) Never mix vertical and lowercase letters. (5) Poor Lettering detracts from a drawing (6) Ability to write good letters may be developed by continual practice. (6) Make letters and figures proper SIZE, Dont make letters too prominent, yet make them readable (7) Letters should be between 1/8 to 1/4 high. Provide sufficient space between words... equal to about the width of a "W". (8) Make the letters Clean-cut and dark. (9) Draw Parallel light "Guidelnes" to help with lettering.',
      Image_5: '',
      body_6: '',
      Image_6: '',

    },
    {
      id: 7,
      post_title: 'Angles',
      postImage: require('./assets/angles.png'),
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
      id: 8,
      post_title: 'Conic Sections',
      postImage: require('./assets/conic_section.jpeg'),
      title_1: 'Conic Sections',
      desc: 'Conic sections shapes',
      body_1: 'A conic section is a curve that is formed by intersecting a plane with a cone. There are four types of conic sections: circles, ellipses, hyperbolas, and parabolas. ',
      Image_1: '',
      body_2: 'A circle is a conic section that is formed when the plane intersects the cone at a right angle (perpendicular) to the axis of the cone. An ellipse is a conic section that is formed when the plane intersects the cone at an angle that is not perpendicular to the axis of the cone. A hyperbola is a conic section that is formed when the plane intersects the cone at an angle that is greater than the opening angle of the cone. A parabola is a conic section that is formed when the plane is tangent to the cone at a single point.',
      Image_2: require('./assets/circle.png'),
      body_3: '',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: 'Conic sections have a number of important properties and are used in a variety of applications, including in mathematics, physics, engineering, and design. They are also used to describe the orbits of celestial objects, such as planets and comets, and in the design of optical systems, such as telescopes and lenses.',
      Image_4: require('./assets/conic_section.jpeg'),
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',

    },
    {
      id: 9,
      post_title: 'Triangles',
      postImage: require('./assets/triangles.png'),
      title_1: '',
      desc: 'Types of Triangles and their properties',
      body_1: 'A triangle is a three-sided polygon. It is a basic geometric shape that has three sides and three angles. The sides of a triangle are straight lines that are connected by their endpoints. The angles of a triangle are formed by the intersection of two sides at a vertex.',
      Image_1: '',
      body_2: 'There are several types of triangles that are commonly recognized, based on the lengths of the sides and the measures of the angles. Some examples include: ',
      Image_2: '',
      body_3: '- Scalene triangle: A scalene triangle is a triangle in which all three sides have different lengths and all three angles have different measures. ',
      Image_3: require('./assets/scalene.png'),
      video: '_B3R4yTeT9w',
      title_2: '',
      body_4: '- Isosceles triangle: An isosceles triangle is a triangle in which two of the sides have the same length. The angles opposite these sides are also congruent (have the same measure). ',
      Image_4: require('./assets/isosoles.png'),
      body_5: '- Equilateral triangle: An equilateral triangle is a triangle in which all three sides have the same length and all three angles have the same measure (60 degrees).',
      Image_5: '',
      body_6: '- Right triangle: A right triangle is a triangle in which one of the angles measures exactly 90 degrees (a right angle). The side opposite the right angle is called the hypotenuse, and the other two sides are called the legs.',
      Image_6: '',

    },

    {
      id: 10,
      post_title: 'Loci',
      postImage: require('./assets/loci.jpeg'),
      title_1: '',
      desc: 'Cycloids, Epicycloids, Hypocycloids...',
      body_1: 'A Locus is a set of points satisfying a certain condition. For example, the locus of points that are 1cm from the origin is a circle of radius 1cm centered on the origin, since all points on the circle are 1cm from the origin',
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
      post_title: 'Tangent to Conic Sections and Loci',
      postImage: require('./assets/tangents.png'),
      title_1: '',
      desc: 'Tangents and Normals to Conic sections and locis',
      body_1: 'A tangent to a curve is a straight line or a plane that touches the curve at a single point, but does not intersect the curve at that point. The point at which the tangent touches the curve is called the point of tangency. The tangent to a curve can be thought of as the limit of a secant line as the two points of intersection with the curve get closer and closer together. A tangent can be used to approximate the behavior of a curve in the neighborhood of the point of tangency. The slope of a tangent to a curve at a point is called the instantaneous slope or the local slope at that point. The tangent to a curve is important in the study of calculus and has many practical applications, including in the design of roads and in the analysis of the motion of objects.',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '5J-v1J760Ic',
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
      post_title: 'Tangency',
      postImage: require('./assets/tangency.jpeg'),
      title_1: '',
      desc: 'Introduction to Tangency and Arcs in Engineering Drawing',
      body_1: 'Tangency is the state of touching or being in contact at a single point without intersecting. In the context of geometry, tangency refers to the property of a curve or a surface of touching another curve or surface at a single point without intersecting. For example, a tangent to a curve is a straight line or a plane that touches the curve at a single point, but does not intersect the curve at that point. The point at which the tangent touches the curve is called the point of tangency. A tangent can be used to approximate the behavior of a curve in the neighborhood of the point of tangency. The slope of a tangent to a curve at a point is called the instantaneous slope or the local slope at that point. ',
      Image_1: '',
      body_2: 'Tangency is important in the study of geometry and has many practical applications, including in the design of roads and in the analysis of the motion of objects.',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: 'z7QUMAyvaTo',
      title_2: 'ARCS - Internal and External Arcs',
      body_4: 'An arc is a portion of the circumference of a circle or another curve. It is a continuous section of the curve that is bounded by two distinct endpoints, called the endpoints of the arc. The length of an arc is called the arc length, and it is a measure of the distance along the curve between the endpoints of the arc. The arc length of a circular arc is equal to the product of the radius of the circle and the central angle of the arc, which is the angle between two radii drawn to the endpoints of the arc.',
      Image_4: '',
      body_5: 'Internal arcs are arcs that are contained within the interior of a geometric figure such as a circle, a polygon, or a plane region. They are the opposite of external arcs, which are arcs that are outside of the figure and do not intersect the figure. Internal arcs can be classified based on the number of endpoints that they have. For example, an internal arc that has two endpoints is called a minor arc, and an internal arc that has no endpoints is called a major arc. The length of an internal arc is called the arc length, and it is a measure of the distance along the arc between its endpoints. The arc length of a circular arc is equal to the product of the radius of the circle and the central angle of the arc, which is the angle between two radii drawn to the endpoints of the arc. ',
      Image_5: '',
      body_6: 'External arcs are arcs that are outside of a geometric figure such as a circle, a polygon, or a plane region and do not intersect the figure. They are the opposite of internal arcs, which are arcs that are contained within the interior of the figure. External arcs can be classified based on the number of endpoints that they have. For example, an external arc that has two endpoints is called a minor arc, and an external arc that has no endpoints is called a major arc. The length of an external arc is called the arc length, and it is a measure of the distance along the arc between its endpoints. The arc length of a circular arc is equal to the product of the radius of the circle and the central angle of the arc, which is the angle between two radii drawn to the endpoints of the arc.',
      Image_6: '',
    },
    {
      id: 13,
      post_title: 'Views in Technical/Engineering Drawing',
      postImage: require('./assets/views.png'),
      title_1: 'Types of projections in Technical Drawing',
      desc: 'Introduction to the Basic Views of Engineering Drawing',
      body_1: 'There are several types of projections used in technical drawing to represent three-dimensional objects on a two-dimensional plane. Some of the most common types of projections are:',
      Image_1: '',
      body_2: '1. Orthographic projection: This is a type of parallel projection that projects an object onto the plane by drawing lines that are perpendicular to the projection plane. It is a precise method of representing the object and is often used in engineering and manufacturing.',
      Image_2: require('./assets/orthographic.png'),
      body_3: '2. Isometric projection: This is a type of orthographic projection that represents the object using equally spaced lines that are oriented at 120-degree angles to each other. It is a simple and effective way to represent the object and is often used in technical drawings and computer graphics.',
      Image_3: require('./assets/isometric.jpeg'),
      video: '',
      title_2: '',
      body_4: '3. Dimetric projection: This is a type of orthographic projection that represents the object using equally spaced lines that are oriented at angles other than 90 degrees or 120 degrees to each other. It is less common than isometric projection, but it can be used to create more realistic representations of the object.',
      Image_4: '',
      body_5: '4. Perspective projection: This is a type of projection that represents the object using converging lines that give the illusion of depth and distance. It is a more realistic method of representing the object, but it is less precise than orthographic projection.',
      Image_5: require('./assets/perspective.jpeg'),
      body_6: '5. Oblique projection: This is a type of projection that represents the object by projecting it onto the plane at an angle, rather than perpendicularly. It is a simple method of representation, but it can distort the object size and shape.',
      Image_6: require('./assets/oblique.jpeg'),
    },
    {
      id: 14,
      post_title: 'Isometric Projection',
      postImage: require('./assets/isometric.jpeg'),
      title_1: '',
      desc: 'Constructing and Interpreting Isometric Figures',
      body_1: 'An isometric projection is a type of graphical projection that is used to represent three-dimensional objects on a two-dimensional plane. It is a form of orthographic projection, which means that it projects objects onto the plane without any distortion of size or shape. In an isometric projection, the three coordinate axes of the object are represented by equally spaced lines that are oriented at 120-degree angles to each other. This creates the illusion of depth and allows the viewer to perceive the relationships between the various parts of the object. Isometric projections are often used in technical drawings and computer graphics, as they are easy to create and provide a clear and accurate representation of the object. They are also used in video games and other interactive media, as they allow the object to be rotated and viewed from any angle.',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '9ZtIqL3Kr2A',
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
      post_title: 'Orthographic Projection',
      postImage: require('./assets/orthographic.png'),
      title_1: '',
      desc: 'Orthographic Projections in Engineering Drawing',
      body_1: 'Orthographic projection is a type of graphical projection that is used to represent three-dimensional objects on a two-dimensional plane. It is a form of parallel projection, which means that it projects objects onto the plane by drawing lines that are parallel to the projection plane. In orthographic projection, the three-dimensional object is viewed from a fixed point in space, and the projection lines are perpendicular to the projection plane. The result is a set of two-dimensional views of the object that can be used to represent the object accurately. Orthographic projection is often used in technical drawing and computer graphics, as it provides an accurate representation of the object and allows the viewer to see all sides of the object.',
      Image_1: '',
      body_2: '',
      Image_2: '',
      body_3: '',
      Image_3: '',
      video: '12ev-qLu8D0',
      title_2: '',
      body_4: '',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 16,
      post_title: 'Sectioning',
      postImage: require('./assets/sectioning.jpeg'),
      title_1: '',
      desc: 'Sectioning Views in Engineering Drawing',
      body_1: 'Sectioning is a technique that is used in technical drawing and engineering to represent the internal structure of an object. It involves cutting through the object along a specific plane and showing the cross-section of the object in a drawing. Sectioning is often used to represent the internal features of an object that are not visible from the outside, such as the cross-section of a pipe or the internal structure of a machine. It is also used to show the relationships between the various parts of an object and to illustrate how the object is assembled or disassembled.',
      Image_1: '',
      body_2: '. Sectioning can be performed using various types of projection, such as orthographic projection or isometric projection, depending on the needs of the drawing. It is an important tool for understanding the internal structure and operation of an object and is often used in engineering, manufacturing, and repair.',
      Image_2: '',
      body_3: 'Sectional views are drawings that show the cross-section of an object along a specific plane. They are used to represent the internal structure of an object and to show the relationships between the various parts of the object. Sectional views are created by cutting through the object along the specified plane and showing the resulting cross-section in a drawing. ',
      Image_3: '',
      video: '1CgUQtOKzSY',
      title_2: '',
      body_4: '. They are often used in technical drawings and engineering to illustrate the internal features of an object that are not visible from the outside, such as the cross-section of a pipe or the internal structure of a machine. Sectional views can be created using various types of projection, such as orthographic projection or isometric projection, depending on the needs of the drawing. They are an important tool for understanding the internal structure and operation of an object and are often used in engineering, manufacturing, and repair.',
      Image_4: '',
      body_5: '',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
    {
      id: 17,
      post_title: 'Assembly Drawing',
      postImage: require('./assets/assembly.jpeg'),
      title_1: '',
      desc: 'Assembly Engineering Drawing',
      body_1: 'An assembly drawing is a type of technical drawing that shows how the various parts of a device or a machine fit together to form the complete product.',
      Image_1: '',
      body_2: 'It is a detailed illustration of the assembly process, showing the parts and their relationships to each other in an exploded view. Assembly drawings are often used in manufacturing and assembly to provide step-by-step instructions on how to assemble the product.',
      Image_2: '',
      body_3: 'They are also used in repair and maintenance to show how to disassemble and reassemble the product. ',
      Image_3: '',
      video: '',
      title_2: '',
      body_4: 'Assembly drawings can be created using various types of projection, such as orthographic projection or isometric projection, depending on the needs of the drawing.',
      Image_4: '',
      body_5: 'They are an important tool for understanding the construction and operation of a product and are often used in engineering, manufacturing, and repair.',
      Image_5: '',
      body_6: '',
      Image_6: '',
    },
  ]);
  const [internet, setInternet] = useState(false);
  const headerBlock = () => {
    return (
      <Text style={Styles.headStyle}>Table of Contents</Text>
    )
  }
  const seperator = () => {
    return <View style={{ height: 1, width: '80%', backgroundColor: 'black' }} />
  }
  const renderItems = ({ item }) => {
    function checkConn() {
      NetInfo.fetch().then((state) => {
        state.isConnected ? setInternet(true) : setInternet(false)
      })
    }
    function truncate(input){
      if (input.length > 15) {
        return input.substring(0, 34) + '...'
      }
      return input;
    }
    return (
      <TouchableOpacity
        style={Styles.items}
        key={item.id}
        onPress={() => { checkConn(); internet ? navigation.navigate('HomeDetailed', { context: item.post_title, desc: item.desc, image: item.postImage, title_1: item.title_1, body_1: item.body_1, image_1: item.Image_1, body_2: item.body_2, image_2: item.Image_2, body_3: item.body_3, image_3: item.Image_3, video: item.video, title_2: item.title_2, body_4: item.body_4, image_4: item.image_4, body_5: item.body_5, image_5: item.image_5, body_6: item.body_6, image_6: item.image_6 }) : navigation.navigate('Connection'); }}>
        <View style={Styles.thumbNailContainer}>
          <Image style={Styles.thumbNail} source={item.postImage} />
        </View>
        <View>
          <Text style={Styles.title}>{truncate(item.post_title)}</Text>
          <Text style={Styles.desc}>{truncate(item.desc)}</Text>
        </View>
      </TouchableOpacity>)
  }
  useEffect(() => {
    const online = NetInfo.addEventListener(state => {
      state.isConnected ? setInternet(true) : setInternet(false)
    })
    return () => online();
  }, [ internet, navigation])
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
        keyExtractor={data.id}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey'
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
    marginRight:10,
    paddingRight: 60,
    color: '#0077fa'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default Home