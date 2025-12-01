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
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#2121',
  },
  title: {
    fontSize: 300,
    fontWeight: '600',
    color: '#61dafb',
  },
  subtitle: {
    fontSize: 2,
    marginBottom: 2,
    color: '#64625',
  },
});
