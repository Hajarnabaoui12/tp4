import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [value, setValue] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Entrez un nombre de 4 chiffres :</Text>

      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 20
        }}
        keyboardType="numeric"
        maxLength={4}
        value={value}
        onChangeText={setValue}
      />

      <Button
        title="Commencer"
        onPress={() => {
          if (value.length === 4) {
            navigation.navigate('Game', { userNumber: value });
          } else {
            alert("Veuillez entrer 4 chiffres !");
          }
        }}
      />
    </View>
  );
}
