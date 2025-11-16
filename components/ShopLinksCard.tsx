import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  FlatList
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { shopLink } from "@/constants/shopLinks";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ShopLinks() {
  const products = [
    {
      id: 1,
      title: "Pillows",
      price: "₹1200",
      rating: 4.5,
      url: "https://www.amazon.in",
    },
    {
      id: 2,
      title: "Pillows",
      price: "₹1200",
      rating: 4.5,
      url: "https://www.flipkart.com",
    },
    {
      id: 3,
      title: "Pillows",
      price: "₹1200",
      rating: 4.5,
      url: "https://www.nykaa.com",
    },
  ];

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Unable to open the link");
    }
  };

  return (
    <SafeAreaProvider> 
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12
      }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#1f2937" }}>
          Shop Links
        </Text>
        <TouchableOpacity onPress={() => console.log("View All pressed")}>
          <Text style={{ fontSize: 14, color: "#666", textDecorationLine: "underline" }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: 140,
              height: 220,
              backgroundColor: "#ffffff",
              borderRadius: 12,
              padding: 12,
              alignItems: "center"
            }}
            onPress={() => openLink(item.url)}
            activeOpacity={0.7}
          >
            <Image 
              source={shopLink.shopLinkImage} 
              style={{
                width: "100%",
                height: 120,
                borderRadius: 8,
                marginBottom: 10
              }} 
            />
            <Text style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#1f2937",
              textAlign: "center",
              marginBottom: 6
            }}>
              {item.title}
            </Text>
            <Text style={{
              fontSize: 15,
              color: "#0ea5a8",
              fontWeight: "700",
              marginBottom: 6
            }}>
              {item.price}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={14} color="#fbbf24" />
              <Text style={{
                marginLeft: 4,
                fontSize: 12,
                color: "#6b7280",
                fontWeight: "500"
              }}>
                {item.rating}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
      />
    </SafeAreaProvider>
  );
}