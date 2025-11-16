import { View, Text, Image } from "react-native";
import { helpfulTips } from "@/constants/helpfulTips";
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function HelpfulTipsCard({
  title = "Take breaks between your daily tasks",
}: {
  title: string;
}) {
  return (
    <SafeAreaProvider>
      <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
        <View style={{
          backgroundColor: "#20094D",
          borderRadius: 22,
          padding: 22,
          height: 110,
          width: "95%",
          overflow: "visible",
          justifyContent: "center"
        }}>
          {/* Text */}
          <Text style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600",
            maxWidth: "70%"
          }}>
            {title}
          </Text>

          {/* Image overflowing outside card */}
          <Image
            source={helpfulTips.tipsImage}
            style={{
              position: "absolute",
              right: -60,
              top: -20,
              width: 200,
              height: 190
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}