import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import * as React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
// Define RootStackParamList locally since '../types/navigation' is missing
type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "PostList">;

const POSTS = [
  {
    id: "1",
    title: "React Native is Awesome",
    content:
      "React Native lets you build mobile apps using React. Write once, run on iOS and Android!",
  },
  {
    id: "2",
    title: "State Management Tips",
    content:
      "Start simple with useState and Context. Reach for libraries like Zustand or Redux when needed.",
  },
  {
    id: "3",
    title: "UI Design Principles",
    content:
      "Consistency, hierarchy, and feedback are key. Keep components small and reusable.",
  },
  {
    id: "4",
    title: "Navigation Basics",
    content:
      "Stacks for drill-down flows, tabs for top-level sections, drawers for less frequent actions.",
  },
];

export default function PostListScreen({ navigation }: Props) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={POSTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("PostDetail", {
              postId: item.id,
              title: item.title,
              content: item.content,
            })
          }
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View style={styles.sep} />}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 1,
  },
  title: { fontSize: 16, fontWeight: "600" },
  chevron: { fontSize: 20, opacity: 0.4 },
  sep: { height: 12 },
});