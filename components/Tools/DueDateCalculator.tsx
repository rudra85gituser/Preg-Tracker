"use client"

import { View, ScrollView, Text, TouchableOpacity, Platform } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import DateTimePicker from "@react-native-community/datetimepicker"
import { useState } from "react"

export default function DueDateCalculator() {
  const router = useRouter()
  const [method, setMethod] = useState("Last Period")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [cycleLength, setCycleLength] = useState("28")
  const [showMethodDropdown, setShowMethodDropdown] = useState(false)
  const [showCycleDropdown, setShowCycleDropdown] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const methods = ["Last Period", "Conception Date", "Ultrasound Date"]
  const cycleLengths = Array.from({ length: 15 }, (_, i) => (21 + i).toString())

  const handleCalculate = () => {
    if (!selectedDate) {
      alert("Please select a date")
      return
    }

    const baseDate = new Date(selectedDate)
    const dueDate = new Date(baseDate)

    // Calculate due date based on method
    if (method === "Last Period") {
      dueDate.setDate(dueDate.getDate() + 280 + (Number.parseInt(cycleLength) - 28))
    } else if (method === "Conception Date") {
      dueDate.setDate(dueDate.getDate() + 266)
    } else if (method === "Ultrasound Date") {
      dueDate.setDate(dueDate.getDate() + 280)
    }

    // Calculate gestational age (weeks pregnant)
    const now = new Date()
    const diffMs = now.getTime() - baseDate.getTime()
    const weeksPregnant = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000))

    const formattedDate = dueDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    router.push({
      pathname: "/tools/due-date-calculator/your-baby-due-date",
      params: {
        date: formattedDate,
        weeks: weeksPregnant.toString(),
      },
    })
  }

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#F6F7FB" }}>
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
          style={{ width: 24, height: 24, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#000" }}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>Due Date Calculator</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 20 }} showsVerticalScrollIndicator={false}>
        {/* Description */}
        <View style={{ backgroundColor: "#fff", borderRadius: 12, padding: 16, marginBottom: 24 }}>
          <Text style={{ fontSize: 14, color: "#6b7280", lineHeight: 20 }}>
            Choose from a variety of options for a prediction of your due date
          </Text>
        </View>

        {/* Method Selection */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#1f2937", marginBottom: 8 }}>Method</Text>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            }}
            onPress={() => setShowMethodDropdown(!showMethodDropdown)}
          >
            <Text style={{ fontSize: 14, color: "#6b7280" }}>{method}</Text>
            <Text style={{ fontSize: 12, color: "#9ca3af" }}>▼</Text>
          </TouchableOpacity>

          {showMethodDropdown && (
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 8,
                marginTop: 4,
                borderWidth: 1,
                borderColor: "#e5e7eb",
              }}
            >
              {methods.map((m) => (
                <TouchableOpacity
                  key={m}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#f3f4f6",
                  }}
                  onPress={() => {
                    setMethod(m)
                    setShowMethodDropdown(false)
                  }}
                >
                  <Text style={{ fontSize: 14, color: "#1f2937" }}>{m}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Date Picker */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#1f2937", marginBottom: 8 }}>
            {method === "Last Period"
              ? "First Date of Last Period"
              : method === "Conception Date"
              ? "Date of Conception"
              : "Ultrasound Date"}
          </Text>

          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            }}
          >
            <Text style={{ fontSize: 14, color: selectedDate ? "#111827" : "#6b7280" }}>
              {selectedDate ? selectedDate.toDateString() : "Choose Date"}
            </Text>
            <Text style={{ fontSize: 18 }}>📅</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "inline" : "default"}
              onChange={(event, date) => {
                setShowDatePicker(Platform.OS === "ios")
                if (date) setSelectedDate(date)
              }}
            />
          )}
        </View>

        {/* Cycle Length */}
        {method === "Last Period" && (
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#1f2937", marginBottom: 8 }}>Cycle length</Text>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 12,
                borderWidth: 1,
                borderColor: "#e5e7eb",
              }}
              onPress={() => setShowCycleDropdown(!showCycleDropdown)}
            >
              <Text style={{ fontSize: 14, color: "#6b7280" }}>{cycleLength} days</Text>
              <Text style={{ fontSize: 12, color: "#9ca3af" }}>▼</Text>
            </TouchableOpacity>

            {showCycleDropdown && (
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  marginTop: 4,
                  borderWidth: 1,
                  borderColor: "#e5e7eb",
                }}
              >
                {cycleLengths.map((length) => (
                  <TouchableOpacity
                    key={length}
                    style={{
                      paddingHorizontal: 12,
                      paddingVertical: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: "#f3f4f6",
                    }}
                    onPress={() => {
                      setCycleLength(length)
                      setShowCycleDropdown(false)
                    }}
                  >
                    <Text style={{ fontSize: 14, color: "#1f2937" }}>{length} days</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Calculate Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#20094D",
            borderRadius: 15,
            paddingVertical: 16,
            alignItems: "center",
            marginBottom: 20,
          }}
          onPress={handleCalculate}
        >
          <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600" }}>Calculate</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaProvider>
  )
}
