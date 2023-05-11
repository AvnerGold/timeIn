import { View, Text, ImageBackground,StyleSheet,FlatList } from 'react-native'
import React, { useContext } from 'react'
import background from '../assets/background.gif'
import { UsersContext } from '../useContext/userContext'
import DatesBox from '../components/DatesBox';

export default function Dates() {
    const {users,current} = useContext(UsersContext);
  return (
    
    <ImageBackground source={background} style={styles.background}>
    <View>
      <Text>yaaaa</Text>
    <FlatList
        data={users}
        renderItem={({item}) => <DatesBox {...item} />}
        keyExtractor={item => item.id}
      />
    </View>

    </ImageBackground>

    
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width:"auto",
        height:"auto",
        resizeMode: 'contain',
      },
})