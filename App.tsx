import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEAT — Bio-Environmental Alert Technology</Text>
      <Text style={styles.subtitle}>It's a smart helmet system by the way!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b0b0b',
  },
  title: {
    color: '#00bfff',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 16,
    textAlign: 'center',
  },
});
