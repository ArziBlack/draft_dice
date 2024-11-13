import {
  View,
  Text,
  Linking,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import {RadioButton, Text as PaperText} from 'react-native-paper';

const Settings = ({navigation}) => {
  const url = 'https://www.youtube.com/@engineeringgraphics4978';

  const Seperator = () => {
    return <View style={{height: 1, width: '100%', backgroundColor: '#cce'}} />;
  };

  // true mode is light, and false is dark
  const [mode, setMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <BlurView style={styles.absolute} blurType="dark" blurAmount={10} />
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>this is a modal</Text>
            <RadioButton.Group
              onValueChange={newValue => setMode(newValue)}
              value={mode}>
              <View style={styles.modalViewMode}>
                <RadioButton value={true} />
                <PaperText>Light</PaperText>
              </View>
              <View style={styles.modalViewMode}>
                <RadioButton value={false} />
                <PaperText>Dark</PaperText>
              </View>
            </RadioButton.Group>
            <View style={styles.modalViewActionsView}>
              <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'red' : 'transparent'}, styles.modalActionButton]}>
                <PaperText style={{color:'#00468B', fontSize:16}}>Cancel</PaperText>
              </Pressable>
              <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'green' : '#00468B'} , styles.modalActionButton]}>
                <PaperText style={{color:'#D9D9D9', fontSize:16}}>Ok</PaperText>
              </Pressable>
            </View>
            {/* <Button
              title="Close Modal"
              onPress={() => setModalVisible(!modalVisible)}
            /> */}
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{color: 'grey', fontSize: 20, marginBottom: 20}}>
          Appearance
        </Text>
      </TouchableOpacity>
      <Seperator />
      <TouchableOpacity onPress={() => navigation.navigate('about')}>
        <Text style={{color: 'grey', fontSize: 20, marginBottom: 20}}>
          About us
        </Text>
      </TouchableOpacity>
      <Seperator />
      <View style={{height: 250}}></View>
      <Button
        color="red"
        onPress={() => Linking.openURL(url)}
        title="Subscribe to our YOUTUBE Channel"
      />
      <View style={{height: 10}}></View>
      <Text>Support The Developers by subscribing to our Youtube Channel</Text>
      <Text>Contact us on : arzidrey@gmail.com</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EBE7',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    width: 320,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalViewMode: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalViewActionsView:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop:30
  },
  modalActionButton:{
    borderRadius: 5,
    paddingVertical: 12,
    width: 125,
    alignItems: 'center',
    fontSize: 16,
    color: '#00468B',
    borderColor: '#00468B',
    borderWidth: 1
  }
});
