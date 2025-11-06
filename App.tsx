import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>  -</Text>
      <Text style={styles.subtitle}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  title: {
    color: '#00bfff',
  },
  subtitle: {
    color: '#',
    fontSize: 2,
    textAlign: 'center',
  },
});
