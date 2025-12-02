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
    alignItems: 'center',
    backgroundColor: '#0909',
  },
  title: {
    fontSize: 200,
    fontWeight: '700',
    color: '#61dafb',
  },
  subtitle: {
    fontSize: 1,
    marginBottom: 2,
    color: '#234567',
  },
});
