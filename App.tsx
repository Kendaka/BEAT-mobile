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
    backgroundColor: '#09',
  },
  title: {
    fontSize: 10,
    fontWeight: '800',
    color: '#adcfh',
  },
  subtitle: {
    fontSize: 2,
    marginBottom: 3,
    color: '#4567',
  },
});
