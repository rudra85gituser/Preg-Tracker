"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function OnboardingDate() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState(16)
  const [babyName, setBabyName] = useState("")

  const daysInMonth = 31
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const handleNext = () => {
    if (babyName) router.push("/auth/choose-month")
  }

  return (
    <SafeAreaProvider>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 20, paddingVertical: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          backgroundColor: "white",
          borderRadius: 20,
          padding: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 3
        }}>
          {/* Heading */}
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#333", textAlign: "center", marginBottom: 8 }}>
            Let's Make this more personalized
          </Text>
          <Text style={{ fontSize: 14, color: "#666", textAlign: "center", marginBottom: 24 }}>
            Select the day of conceive
          </Text>

          {/* Calendar Header */}
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#333", textAlign: "center", marginBottom: 16 }}>
            July 2025
          </Text>

          {/* Days of Week Header */}
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 12 }}>
            {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
              <Text key={i} style={{ fontSize: 12, fontWeight: "600", color: "#999", width: "14.28%", textAlign: "center" }}>
                {day}
              </Text>
            ))}
          </View>

          {/* Calendar Grid */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 24 }}>
            {days.map((day) => (
              <TouchableOpacity
                key={day}
                onPress={() => setSelectedDate(day)}
                activeOpacity={0.7}
                style={{
                  width: "14.28%",
                  aspectRatio: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                  backgroundColor: selectedDate === day ? "#a8d5a8" : "transparent",
                  borderRadius: selectedDate === day ? 8 : 0
                }}
              >
                <Text style={{
                  fontSize: 14,
                  fontWeight: selectedDate === day ? "600" : "500",
                  color: selectedDate === day ? "white" : "#333"
                }}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Baby Name Input */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#333", marginBottom: 8 }}>Name of baby</Text>
            <TextInput
              placeholder="ex - amy"
              placeholderTextColor="#999"
              value={babyName}
              onChangeText={setBabyName}
              style={{ borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 12, padding: 12, fontSize: 14, color: "#000" }}
            />
          </View>

          {/* Next Button */}
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
            style={{ backgroundColor: "#1a0033", borderRadius: 12, paddingVertical: 14 }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600", textAlign: "center" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}
