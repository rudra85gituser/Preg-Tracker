import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { journal } from "@/constants/babySize"; // contains babyImage

interface BabySizeCardProps {
  description?: string;
  buttonText?: string;
  onKnowMorePress?: () => void;
}

export default function BabySizeCard({
  description = "Ayu is the size of a mango",
  buttonText = "Know More",
  onKnowMorePress = () => {},
}: BabySizeCardProps) {
  return (
    <SafeAreaProvider style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
      <LinearGradient
        colors={["#20094D", "#4CA2A3", "#A5E1AD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: "100%",
          height: 120,
          borderRadius: 28,
          paddingLeft: 20,
          paddingVertical: 18,
          overflow: "visible",
          justifyContent: "center"
        }}
      >
        {/* LEFT CONTENT */}
        <View style={{ width: "60%" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#FFFFFF", marginBottom: 10 }}>
            {description}
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              paddingVertical: 8,
              paddingHorizontal: 18,
              borderRadius: 20,
              alignSelf: "flex-start"
            }}
            activeOpacity={0.8}
            onPress={onKnowMorePress}
          >
            <Text style={{ color: "#20094D", fontWeight: "600", fontSize: 14 }}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>

        {/* BABY IMAGE — FIGMA STYLE, OVERFLOWING RIGHT */}
        <Image
          source={journal.babyImage}
          style={{
            position: "absolute",
            right: -10,
            top: -10,
            width: 150,
            height: 140
          }}
          resizeMode="contain"
        />
      </LinearGradient>
    </SafeAreaProvider>
  );
}