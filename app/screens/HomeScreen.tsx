import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matteo Beu</Text>
      <Text style={styles.subtitle}>matteo@example.com</Text>
      <View style={{ height: 12 }} />
      <Text>Member since: Jan 2024</Text>
      <Text>Bio: Mobile developer learning navigation patterns.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#666' },
});