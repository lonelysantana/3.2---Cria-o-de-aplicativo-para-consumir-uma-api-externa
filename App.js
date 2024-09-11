// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import CharacterDetailScreen from './src/screens/Details/CharacterDetailScreen';
import CustomNavbar from './src/components/CustomNavbar'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomNavbar {...props} />,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CharacterDetailScreen" component={CharacterDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;