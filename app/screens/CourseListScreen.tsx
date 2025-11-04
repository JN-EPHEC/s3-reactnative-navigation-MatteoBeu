import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const COURSES = [
  { id: '1', title: 'Intro to React Native', description: 'Basics of building apps with React Native.' },
  { id: '2', title: 'Advanced JavaScript', description: 'Deep dive into JS concepts and patterns.' },
  { id: '3', title: 'UI/UX for Developers', description: 'Design fundamentals for developers.' },
];

export default function CourseListScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('CourseDetail', {
                courseId: item.id,
                title: item.title,
                description: item.description,
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  card: { padding: 12, borderRadius: 6, backgroundColor: '#f2f2f2', marginBottom: 10 },
  title: { fontSize: 16, fontWeight: '600' },
  desc: { marginTop: 4, color: '#444' },
});
