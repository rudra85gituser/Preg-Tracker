import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function YourBabyDueDate() {
  const router = useRouter();
  const { weeks, date } = useLocalSearchParams();

  // Ensure date is a single string
  const parsedDate = Array.isArray(date) ? date[0] : date;
  const dueDate = parsedDate ? new Date(parsedDate) : null;

  const isValidDate = dueDate && !isNaN(dueDate.getTime());

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "#ffffff",
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            width: 24,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#000" }}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>
          Your Baby’s Due Date
        </Text>

        <View style={{ width: 24 }} />
      </View>

      {/* Body */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
        {/* Due Date Text */}
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#1f2937", marginBottom: 8 }}>
          {isValidDate ? `Your Due Date is ${dueDate.toDateString()}` : null}
        </Text>

        {/* Weeks Pregnant */}
        <Text style={{ fontSize: 14, color: "#6b7280", marginBottom: 40, textAlign: "center" }}>
          Congratulations! You are {weeks || "some"} weeks pregnant.
        </Text>

        {/* Only show card if date is valid */}
        {isValidDate && (
          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 16,
              paddingVertical: 40,
              paddingHorizontal: 50,
              marginBottom: 40,
              elevation: 2,
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: "800",
                color: "#20094D",
                textAlign: "center",
              }}
            >
              {dueDate.toLocaleString("en-US", { month: "long" })}
            </Text>

            <Text
              style={{
                fontSize: 48,
                fontWeight: "900",
                color: "#20094D",
                textAlign: "center",
              }}
            >
              {dueDate.getDate()}
            </Text>
          </View>
        )}

        {/* Recalculate Button */}
        <TouchableOpacity
          onPress={() => router.push("../due-date-calculator")}
          style={{
            backgroundColor: "#20094D",
            borderRadius: 15,
            paddingVertical: 16,
            paddingHorizontal: 60,
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600" }}>
            Recalculate
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
