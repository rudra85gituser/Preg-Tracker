import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { testimonials } from "../constants/testimonials";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Testimonials() {
  return (
    <SafeAreaProvider>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12
      }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>
          Testimonials
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: "#666", textDecorationLine: "underline" }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={testimonials}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["#CFD6FF", "#E5D9F2", "#E5D9F2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: 350,
              marginRight: 12,
              borderRadius: 16,
              padding: 20,
              justifyContent: "space-between",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3
            }}
          >
            <Text style={{
              fontSize: 14,
              color: "#333",
              marginBottom: 16,
              lineHeight: 20,
              fontStyle: "italic"
            }}>
              {item.feedback}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image 
                source={item.image} 
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  marginRight: 12
                }} 
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: "600", color: "#333" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
                  {"⭐ " + (item.rating || "4.5")}
                </Text>
              </View>
            </View>
          </LinearGradient>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaProvider>
  );
}