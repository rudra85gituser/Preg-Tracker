import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import VideoCard from "../../components/VideoCard";

const videoData = [
  { id: "1", title: "5th Week of Pregnancy", url: "https://www.youtube.com/watch?v=G1hKzCkywM8" }
];

export default function VideoList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>YouTube Videos</Text>

        <Pressable onPress={() => router.push("/videoCard/allVideos")}>
          <Text style={styles.viewAll}>View All</Text>
        </Pressable>
      </View>

      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <VideoCard video={item} />
          </View>
        )}
        scrollEnabled={false}  // ← DISABLE SCROLLING
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: "600" },
  viewAll: { fontSize: 14, color: "#666", textDecorationLine: "underline", },
  card: { marginBottom: 16 },
});