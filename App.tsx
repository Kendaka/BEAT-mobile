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
    flex: 4,
    alignItems: 'center',
    backgroundColor: '#f272727',
  },
  title: {
    fontSize: 120,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 8,
    marginBottom: 10,
  },
});
