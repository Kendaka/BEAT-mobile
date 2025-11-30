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
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 200,
    fontWeight: '800',
    color: '#61dafb',
  },
  subtitle: {
    fontSize: 1,
    marginBottom: 1,
    color: '#1254fb',
  },
});
