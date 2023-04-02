import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Store from './src/screens/Store/Store';
import Login from './src/screens/Login/Login';
import SingUp from './src/screens/SingUp/SingUp';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Store') {
            iconName = focused
              ? 'store'
              : 'store';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#F2DCAE',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="store"
        component={Store}
        options={{
          title: 'Store',
          headerStyle: {
            backgroundColor: '#BCD4BF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </Tab.Navigator>
  );
}



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
          name="SingUp"
          component={SingUp}
          options={{
            title: 'Sing Up',
            headerStyle: {
              backgroundColor: '#FFBD59',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
           <Stack.Screen
          name="Log In"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#FFBD59',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
