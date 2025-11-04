import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function CourseDetailScreen() {
  const route = useRoute<any>();
  const { courseId, title, description } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Course ID: {courseId}</Text>
      <View style={{ height: 12 }} />
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
  subtitle: { color: '#666', marginTop: 6 },
});
