import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Task</Text>
      <Text style={styles.subtitle}> Safety On The Go</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7',
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 12,
  },
});
