import React from 'react';
import { Text, View } from 'react-native';


export default function App() {
  return (
    <View> 
      <Text style={styles.title}>GEAT System</Text>
       <Text style={styles.subtitle}>Bio-Environmental Safety On The Go</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'right',
    alignItems: 'left',
    backgroundColor: '#f2f4',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 6,
    color: '#777',
  },
});

