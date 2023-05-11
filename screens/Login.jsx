import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useContext, useState } from 'react';
//import { useNavigation } from '@react-navigation/native';
import { UsersContext } from '../useContext/userContext';
import LoginBackground from '../assets/background.gif';
import LoginHeaderBackground from '../assets/Login-header.gif';

export default function Login({navigation}) {
  //const navigation = useNavigation();
  const {users,formData,setFormData,SetCurrent} = useContext(UsersContext);
 console.log("lol");

  const handleLogin = () => {
    // console.log(`Name: ${formData.name} Password: ${formData.password}`);
    // console.log(formData);
    // if (formData.name === 'u' && formData.password === '1') {
    //   navigation.navigate('UserTabs');
    // } else if (formData.name === 'a' && formData.password === '1') {
    //   navigation.navigate('AdminTabs');
    // }
    // Here you would typically send the form data to a server for validation
    // and handle the response accordingly

    users.map((item) => {
        if (item.name == formData.name && item.password == formData.password){
            navigation.navigate('UserTabs');
            SetCurrent(item);
            
        }   
    })
  };

  return (
    
    <ImageBackground source={LoginBackground} style={styles.background}>
     
    <View style={styles.container}>
      <View style={styles.box}>
        <ImageBackground source={LoginHeaderBackground} style={styles.backgroundHeader}>

        <Text style={styles.header}></Text>
        </ImageBackground>
        <View style={styles.formDeco}>
          <View style={{alignItems:"center"}}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            autoCapitalize="none"
            secureTextEntry
          />

          </View>
          <ImageBackground source={LoginBackground} style={styles.button}>

          <TouchableOpacity  onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
         </ImageBackground>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 'auto',
    width: 300,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#F5FCFF',
    borderColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 3,
  },
  header: {
    height:40,  // backgroundColor: '#2196F3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    color:"white",
    shadowRadius: 10,
  },
  input: {
    width: '80%',
    margin:"auto",
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    color:"white"
  },
  formDeco: {
  
    padding: 10,
    backgroundColor:"#383636",
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 20,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginTop: 20,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign:"center",
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    width:"auto",
    height:"auto",
    resizeMode: 'contain',
  },
  backgroundHeader: {
    zIndex:1,
    width:"auto",
    height:"auto",
    resizeMode: 'contain',
  },
});
