"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function OnboardingYear() {
  const router = useRouter()
  const [selectedYear, setSelectedYear] = useState(2025)
  const [babyName, setBabyName] = useState("")
  const [startYear, setStartYear] = useState(2020)

  const years = Array.from({ length: 12 }, (_, i) => startYear + i)

  const handlePrevious = () => {
    if (startYear > 2000) setStartYear(startYear - 12)
  }

  const handleNextYears = () => {
    setStartYear(startYear + 12)
  }

  const handleNext = () => {
    if (babyName) router.push("/")
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
          <Text style={{ fontSize: 14, color: "#666", textAlign: "center", marginBottom: 20 }}>
            Select the year of conceive
          </Text>

          {/* Navigation */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            <TouchableOpacity onPress={handlePrevious} activeOpacity={0.7}>
              <Text style={{ fontSize: 13, color: "#999", fontWeight: "600" }}>← Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextYears} activeOpacity={0.7}>
              <Text style={{ fontSize: 13, color: "#999", fontWeight: "600" }}>Next →</Text>
            </TouchableOpacity>
          </View>

          {/* Year Grid */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {years.map(year => (
              <TouchableOpacity
                key={year}
                onPress={() => setSelectedYear(year)}
                activeOpacity={0.7}
                style={{
                  width: "23%",
                  paddingVertical: 12,
                  borderRadius: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: selectedYear === year ? "#a8d5a8" : "#e0e0e0",
                  backgroundColor: selectedYear === year ? "#a8d5a8" : "#f5f5f5",
                }}
              >
                <Text style={{ fontSize: 13, fontWeight: "600", color: selectedYear === year ? "white" : "#333" }}>
                  {year}
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
