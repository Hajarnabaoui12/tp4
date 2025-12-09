import React from 'react';
import { View, Text } from 'react-native';

export default function ResultScreen({ route }) {
  const { userNumber } = route.params;

  const secretNumber = "5382";

  const results = [];

  for (let i = 0; i < 4; i++) {
    const digit = userNumber[i];

    if (secretNumber.includes(digit)) {
      results.push(
        `Le chiffre ${digit} existe (position : ${secretNumber.indexOf(digit) + 1})`
      );
    } else {
      results.push(`Le chiffre ${digit} n'existe pas`);
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Résultats pour : {userNumber}
      </Text>

      {results.map((txt, index) => (
        <Text key={index} style={{ marginVertical: 8 }}>
          {txt}
        </Text>
      ))}
    </View>
  );
}
