"use client"

import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import { useState } from "react"
import { journal } from "@/constants/journal"

type JournalEntry = {
  id: string
  date: string
  title: string
  mood: string
  image?: any
  notes: string
}

export default function Journal() {
  const router = useRouter()
  const [entries] = useState<JournalEntry[]>([
    {
      id: "1",
      date: "Monday, 2 Nov, 2025",
      title: "Peaceful day with baby",
      mood: "😊",
      image: journal.journalImage,
      notes:
        "As an AI, I don't have real-time access to IMDb's rankings, and my training only goes up until September 2021. However, I can provide:",
    },
  ])

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

        <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>Journal</Text>

        <TouchableOpacity
          onPress={() => router.push("/tools/journal/new-entry")}
          style={{
            backgroundColor: "#4CA2A3",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>New Entry</Text>
        </TouchableOpacity>
      </View>

      {/* Journal Entries */}
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {entries.map((entry) => (
          <View
            key={entry.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 16,
              padding: 16,
              marginBottom: 16,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
            }}
          >
            {/* Date and Edit Icon */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  backgroundColor: "#F5F7F8",
                  color: "#1B1B1B",
                  paddingHorizontal: 16,
                  paddingVertical: 6,
                  borderRadius: 20,
                }}
              >
                {entry.date}
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 18 }}>✏️</Text>
              </TouchableOpacity>
            </View>

            {/* Image */}
            {entry.image && (
              <Image
                source={entry.image}
                style={{
                  width: "100%",
                  height: 160,
                  borderRadius: 12,
                  marginBottom: 12,
                }}
              />
            )}

            {/* Title and Notes */}
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#1f2937",
                  marginBottom: 6,
                }}
              >
                {entry.title}
              </Text>
              <Text style={{ fontSize: 13, color: "#6b7280", lineHeight: 18 }}>{entry.notes}</Text>
            </View>

            {/* Mood */}
            <View
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                backgroundColor: "#F5F7F8",
                borderRadius: 20,
                padding: 6,
              }}
            >
              <Text style={{ fontSize: 20 }}>{entry.mood}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaProvider>
  )
}
