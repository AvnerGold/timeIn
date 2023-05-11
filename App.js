import 'react-native-gesture-handler';
import{ NavigationContainer } from '@react-navigation/native';
import{ createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import TimeJob from './screens/TimeJob';
import Info from './screens/Info';
import Dates from './screens/Dates';
//import DateRangeIcon from '@mui/icons-material/DateRange';
import IconButton from '@mui/material/IconButton';
//import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';

import UsersContextProvider from './useContext/userContext';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const UserTabs = () => {
  console.log("UserTabs");

  return (
 
   <Tab.Navigator screenOptions={{headerShown:false}}>   
    <Tab.Screen name="TimeJob" component={TimeJob}/>
    <Tab.Screen
        name="Dates"
        component={Dates}
        options={{
          tabBarIcon: () => (
            //<DateRangeIcon name='AccessAlarm' size={35} color='black' />
            <Ionicons name="alarm" size={24} color="black" />

          ),
        }}
      />
    <Tab.Screen name="Info" component={Info}/>
   </Tab.Navigator>
  
 );
};

export default function App() {

  return (
    <>
    
    <UsersContextProvider>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='UserTabs' component={UserTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
    </UsersContextProvider>

    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTab: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  box: {
    backgroundColor: '#F5FCFF',
    color:'#F5FCFF',
    textDecorationColor: '#F5FCFF',
    // borderColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // borderRadius: 20,
    // overflow: 'hidden',
    // borderWidth: 3,
  },
});
