import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> BEAT - Bio Environmental Alert Technology</Text>
      <Text style={styles.subtitle}>It's smart helmet system by the way! Hopepfully I can finish this until the end.!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#cccccc',
    fontSize: 16,
    textAlign: 'center',
  },
});
