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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f27',
  },
  title: {
    fontSize: 130,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10,
  },
});
