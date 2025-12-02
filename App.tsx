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
    backgroundColor: '#212121',
  },
  title: {
    fontSize: 200,
    fontWeight: '700',
    color: '#61dafb',
  },
  subtitle: {
    fontSize: 3,
    marginBottom: 3,
    color: '#64625',
  },
});
