import { View, Text, Image, Pressable } from "react-native"
import { useRouter } from "expo-router"
import { aiChatAssistant } from "@/constants/aiChatAssistant"
import { profile } from "@/constants/profile"

export default function Header() {
  const router = useRouter()

  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 14,
      paddingVertical: 15
    }}>
      {/* Left Section - User Info */}
      <View style={{ flex: 3 }}>
        <Text style={{
          fontSize: 18,
          fontWeight: "600",
          color: "#1f2937",
          marginBottom: 2
        }}>
          👋 Hello, Soma
        </Text>
        <Text style={{ fontSize: 14, color: "#6b7280" }}>
          Due in 17 Weeks
        </Text>
      </View>

      {/* Right Section - Action Buttons */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12
      }}>
        {/* AI Chat Assistant Button */}
        <Pressable 
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f3e8ff",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 20,
            gap: 8
          }}
          onPress={() => router.push('/aiChatAssistant')}
        >
          <Image 
            source={aiChatAssistant.homeAiBot} 
            style={{ width: 20, height: 20 }}
          />
          <Text style={{
            fontSize: 10,
            fontWeight: "500",
            color: "#7c3aed",
            lineHeight: 12
          }}>
            Mom's{'\n'}Assistant
          </Text>
        </Pressable>

        {/* Profile Button */}
        <Pressable onPress={() => router.push('/profile')}>
          <Image 
            source={profile.profileImage} 
            style={{
              width: 45,
              height: 45,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#fcfdffff"
            }}
          />
        </Pressable>
      </View>
    </View>
  )
}