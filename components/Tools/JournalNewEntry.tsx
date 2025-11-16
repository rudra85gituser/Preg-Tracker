"use client"

import { View, ScrollView, Text, TouchableOpacity, TextInput } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useState } from "react"
import { useRouter } from "expo-router"

export default function JournalNewEntry() {
  const router = useRouter()
  const [newEntry, setNewEntry] = useState({
    title: "",
    date: "",
    mood: "",
    notes: "",
    image: "",
  })

  const moodOptions = [
    { label: "Calm", emoji: "😌" },
    { label: "Happy", emoji: "😊" },
    { label: "Sad", emoji: "😢" },
    { label: "Anxious", emoji: "😰" },
    { label: "Angry", emoji: "😡" },
    { label: "Worried", emoji: "😟" },
    { label: "Meh", emoji: "😑" },
    { label: "Custom", emoji: "➕" },
  ]

  const handleSaveEntry = () => {
    if (!newEntry.title || !newEntry.date || !newEntry.mood) {
      alert("Please fill all required fields")
      return
    }
    router.back()
  }

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
          style={{ width: 24, height: 24, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#000" }}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>New Journal Entry</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Form */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 8 }}>Title</Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#e5e7eb",
              paddingHorizontal: 12,
              paddingVertical: 12,
              fontSize: 14,
            }}
            placeholder="Peaceful day with baby"
            value={newEntry.title}
            onChangeText={(text) => setNewEntry({ ...newEntry, title: text })}
          />
        </View>

        {/* Date */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 8 }}>Date</Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#e5e7eb",
              paddingHorizontal: 12,
              paddingVertical: 12,
              fontSize: 14,
            }}
            placeholder="2 November, 2025"
            value={newEntry.date}
            onChangeText={(text) => setNewEntry({ ...newEntry, date: text })}
          />
        </View>

        {/* Mood */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 8 }}>Mood</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
            {moodOptions.map((mood, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: "22%",
                  alignItems: "center",
                  paddingVertical: 12,
                  borderRadius: 8,
                  marginBottom: 12,
                  backgroundColor: newEntry.mood === mood.emoji ? "#D1E7DD" : "#F9FAFB",
                }}
                onPress={() => setNewEntry({ ...newEntry, mood: mood.emoji })}
              >
                <Text style={{ fontSize: 24, marginBottom: 4 }}>{mood.emoji}</Text>
                <Text style={{ fontSize: 11, color: "#6b7280", textAlign: "center" }}>{mood.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Notes */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 8 }}>Notes</Text>
          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#e5e7eb",
              paddingHorizontal: 12,
              paddingVertical: 12,
              fontSize: 14,
              minHeight: 100,
              textAlignVertical: "top",
            }}
            placeholder="Write something..."
            value={newEntry.notes}
            onChangeText={(text) => setNewEntry({ ...newEntry, notes: text })}
            multiline
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#2D1B4E",
            borderRadius: 12,
            paddingVertical: 16,
            alignItems: "center",
            marginBottom: 20,
          }}
          onPress={handleSaveEntry}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaProvider>
  )
}
