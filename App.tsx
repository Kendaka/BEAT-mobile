import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>TS</Text>
      <Text style={styles.subtitle}> Safety </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'middle',
    backgroundColor: '#2121',
  },
  title: {
    fontSize: 100,
    fontWeight: '400',
    color: '#61dafb',
  },
  subtitle: {
    fontSize: 2,
    marginBottom: 2,
    color: '#212121',
  },
});
