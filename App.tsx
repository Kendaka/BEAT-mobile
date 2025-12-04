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
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#09',
  },
  title: {
    fontSize: 500,
    fontWeight: '200',
    color: '#61dafb',
  },
  subtitle: {
    fontSize: 8,
    marginBottom: 3,
    color: '#234567',
  },
});
