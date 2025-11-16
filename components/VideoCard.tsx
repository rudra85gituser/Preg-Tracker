import React from "react";
import { View, Text, Image, Pressable, Linking } from "react-native";

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

export default function VideoCard({ video }: { video: VideoItem }) {
  const getThumbnail = (url: string) => {
    const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
  };

  const handlePress = () => {
    Linking.openURL(video.url).catch((err) => console.error("Error opening URL", err));
  };

  const thumbnailUrl = getThumbnail(video.url);

  return (
    <Pressable 
      style={({ pressed }) => ({
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 16,
        opacity: pressed ? 0.9 : 1,
        transform: pressed ? [{ scale: 0.98 }] : [{ scale: 1 }]
      })} 
      onPress={handlePress}
    >
      <View style={{
        position: "relative",
        width: "100%",
        height: 200,
        backgroundColor: "#f0f0f0"
      }}>
        {thumbnailUrl && (
          <Image 
            source={{ uri: thumbnailUrl }} 
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover"
            }} 
          />
        )}
        <View style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 56,
          height: 56,
          marginLeft: -28,
          marginTop: -28,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 28,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <View style={{
            width: 0,
            height: 0,
            marginLeft: 4,
            borderLeftWidth: 16,
            borderTopWidth: 10,
            borderBottomWidth: 10,
            borderLeftColor: "#fff",
            borderTopColor: "transparent",
            borderBottomColor: "transparent"
          }} />
        </View>
      </View>
      <View style={{ padding: 14 }}>
        <Text 
          style={{
            fontSize: 15,
            fontWeight: "600",
            color: "#1a1a1a",
            lineHeight: 20
          }} 
          numberOfLines={2}
        >
          {video.title}
        </Text>
      </View>
    </Pressable>
  );
}