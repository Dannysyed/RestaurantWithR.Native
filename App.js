import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Light_color, Secondary_color } from './components/Colors';
import { Ionicons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import MapScreen from './screens/MapScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderDetail from './screens/OrderDetail';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GameStartScreen" component={DrawerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerScreen() {
  return (
    <Tab.Navigator initialRouteName="Games" tabBarOptions={{
      activeTintColor: Secondary_color,
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="SearchScreen" component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Maps" component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Order" component={OrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="man" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
