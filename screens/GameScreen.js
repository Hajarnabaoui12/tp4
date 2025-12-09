import React from 'react';
import { View, Text, Button } from 'react-native';

export default function GameScreen({ route, navigation }) {
  const { userNumber } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Votre nombre : {userNumber}</Text>

      <Button 
        title="Voir le résultat"
        onPress={() => navigation.navigate('Result', { userNumber })}
      />
    </View>
  );
}
