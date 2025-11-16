import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import VideoCard from "../../components/VideoCard";

const videoData = [
  { id: "1", title: "5th Week of Pregnancy", url: "https://www.youtube.com/watch?v=BHACKCNDMW8&list=RDBHACKCNDMW8&start_radio=1" },
  { id: "2", title: "Pregnancy Nutrition Guide", url: "https://www.youtube.com/watch?v=G1hKzCkywM8" },
  { id: "3", title: "Baby Development Explained", url: "https://www.youtube.com/watch?v=YFhwEJosUsU" },
  { id: "4", title: "First Trimester Tips", url: "https://www.youtube.com/watch?v=linlz7-Pnvw&t=60s" },
  { id: "5", title: "Exercise During Pregnancy", url: "https://www.youtube.com/watch?v=LXb3EKWsInQ" },
  { id: "6", title: "Preparing for Labor", url: "http://youtube.com/watch?v=sRWcJrMTtMI" },
];

export default function AllVideos() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.link}>← Back</Text>
          </Pressable>

          <Text style={styles.title}>All Videos</Text>
          <View style={{ width: 40 }} />
        </View>

        <FlatList
          data={videoData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <VideoCard video={item} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true} // important fix
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F4EFF8" },
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: "600" },
  link: { color: "#1D9BF0", fontWeight: "500" },
  card: { marginBottom: 16 },
});
