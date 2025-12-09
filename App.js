import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importation des écrans
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';

// Création du Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Accueil" }}
        />

        <Stack.Screen 
          name="Game" 
          component={GameScreen} 
          options={{ title: "Jeu" }}
        />

        <Stack.Screen 
          name="Result" 
          component={ResultScreen} 
          options={{ title: "Résultat" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
