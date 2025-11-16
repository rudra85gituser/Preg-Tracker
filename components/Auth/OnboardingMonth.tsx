"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

export default function OnboardingMonth() {
  const router = useRouter()
  const [selectedMonth, setSelectedMonth] = useState(6) // July (0-indexed)
  const [babyName, setBabyName] = useState("")

  const handleNext = () => {
    if (babyName) router.push("/auth/choose-year")
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
            Select the month of conceive
          </Text>

          {/* Month Grid */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {MONTHS.map((month, index) => (
              <TouchableOpacity
                key={month}
                onPress={() => setSelectedMonth(index)}
                activeOpacity={0.7}
                style={{
                  width: "23%",
                  paddingVertical: 12,
                  borderRadius: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: selectedMonth === index ? "#a8d5a8" : "#e0e0e0",
                  backgroundColor: selectedMonth === index ? "#a8d5a8" : "#f5f5f5",
                }}
              >
                <Text style={{ fontSize: 13, fontWeight: "600", color: selectedMonth === index ? "white" : "#333" }}>
                  {month}
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
