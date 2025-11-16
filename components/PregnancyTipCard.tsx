import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Import your local image directly
import tipsImage from "@/assets/pregnancy-tips/women.png";

interface PregnancyTipCardProps {
  description?: string;
  buttonText?: string;
  onBookAppointmentPress?: () => void;
}

export default function PregnancyTipCard({
  description = "Wanan know how this will help you in your pregnancy...",
  buttonText = "Book an Appointment",
  onBookAppointmentPress = () => {},
}: PregnancyTipCardProps) {
  return (
    <SafeAreaProvider style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
      <LinearGradient
        colors={["#A5E1AD", "#def5e7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flexDirection: "row",
          borderRadius: 24,
          paddingVertical: 24,
          paddingHorizontal: 20,
          alignItems: "center",
          justifyContent: "space-between",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 5,
          minHeight: 140
        }}
      >
        {/* Left Content */}
        <View style={{ flex: 1, marginRight: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#FFFFFF",
            marginBottom: 16,
            lineHeight: 22
          }}>
            {description}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 20,
              alignSelf: "flex-start"
            }}
            onPress={onBookAppointmentPress}
            activeOpacity={0.8}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#2D7A4A" }}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Right Image */}
        <View style={{
          width: 110,
          height: 130,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          overflow: "hidden"
        }}>
          <Image 
            source={tipsImage} 
            style={{ width: "100%", height: "100%" }} 
            resizeMode="cover" 
          />
        </View>
      </LinearGradient>
    </SafeAreaProvider>
  );
}