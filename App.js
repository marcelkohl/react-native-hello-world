import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Hello World</Text>
      <Text style={styles.subtitle}>To start right we must start with hello world.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize:10,
    color: '#c8c8c8',
    fontStyle: 'italic'
  }
});
