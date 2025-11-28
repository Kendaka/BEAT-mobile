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
    backgroundColor: '#72727',
  },
  title: {
    fontSize: 120,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 4,
    marginBottom: 9,
  },
});
