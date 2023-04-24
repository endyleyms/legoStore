import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme, } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Store from './src/screens/Store/Store';
import Login from './src/screens/Login/Login';
import SingUp from './src/screens/SingUp/SingUp';
import ProductDetail from './src/screens/ProductDetail/ProductDetail';



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
            backgroundColor: '#FFBD59',
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

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator >
          <Stack.Screen
            name="SingUp"
            component={SingUp}
            options={{
              title: 'SingUp',
              headerStyle: {
                backgroundColor: '#FFBD59',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
          <Stack.Screen
            name="LogIn"
            component={Login}
            options={{
              title: 'LogIn',
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
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{
              title: 'ProductDetail',
              headerStyle: {
                backgroundColor: '#FFBD59',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
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
