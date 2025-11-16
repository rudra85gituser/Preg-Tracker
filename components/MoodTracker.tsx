"use client"

import { View, Text, Pressable, Image, Modal, TouchableOpacity, ScrollView } from "react-native"
import { useState } from "react"
import { AVAILABLE_EMOJIS } from "../constants/moods"
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface Mood {
  id: string
  name: string
  emoji: string
}

interface MoodTrackerProps {
  moods: Mood[]
  onMoodSelect?: (moodId: string) => void
  onCustomMoodAdd?: (name: string, emoji: string) => void
  plusIcon?: any
}

export default function MoodTracker({ moods, onMoodSelect, onCustomMoodAdd, plusIcon }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false)
  const [displayMoods, setDisplayMoods] = useState<Mood[]>(moods)

  const handleMoodSelect = (moodId: string) => {
    if (moodId === 'custom') {
      setEmojiPickerVisible(true)
      return
    }
    setSelectedMood(moodId)
    onMoodSelect?.(moodId)
  }

  const handleEmojiSelect = (emoji: string) => {
    setEmojiPickerVisible(false)

    // Auto-generate mood with selected emoji
    const newMood: Mood = {
      id: `custom-${Date.now()}`,
      name: 'Custom',
      emoji: emoji
    }

    const updatedMoods = [...displayMoods.slice(0, -1), newMood, displayMoods[displayMoods.length - 1]]
    setDisplayMoods(updatedMoods)
    setSelectedMood(newMood.id)

    onCustomMoodAdd?.('Custom', emoji)
  }

  const renderMoodIcon = (mood: Mood) => {
    if (mood.id === 'custom' && plusIcon) {
      return <Image source={plusIcon} style={{ width: 24, height: 24 }} />
    }
    return <Text style={{ fontSize: 32 }}>{mood.emoji}</Text>
  }

  return (
    <SafeAreaProvider>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
          Mood Tracker
        </Text>
        <View style={{ backgroundColor: "#F4EFF8", borderRadius: 16, padding: 16 }}>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
            {displayMoods.map((mood) => (
              <Pressable
                key={mood.id}
                style={{ width: "22%", alignItems: "center" }}
                onPress={() => handleMoodSelect(mood.id)}
              >
                <View style={{
                  width: 56,
                  height: 56,
                  backgroundColor: "#FFFFFF",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                  ...(selectedMood === mood.id && { borderWidth: 2, borderColor: "#4db5a6" })
                }}>
                  {renderMoodIcon(mood)}
                </View>
                <Text style={{ fontSize: 11, textAlign: "center" }}>{mood.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Emoji Picker Modal */}
        <Modal
          visible={emojiPickerVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setEmojiPickerVisible(false)}
        >
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              width: '90%',
              maxHeight: '70%'
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#eee'
              }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>
                  Select Your Mood
                </Text>
                <TouchableOpacity onPress={() => setEmojiPickerVisible(false)}>
                  <Text style={{ fontSize: 24, color: '#666', paddingHorizontal: 8 }}>
                    ✕
                  </Text>
                </TouchableOpacity>
              </View>

              <ScrollView style={{ maxHeight: 400 }}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 8 }}>
                  {AVAILABLE_EMOJIS.map((emoji, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        width: '12.5%',
                        aspectRatio: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 4
                      }}
                      onPress={() => handleEmojiSelect(emoji)}
                    >
                      <Text style={{ fontSize: 28 }}>{emoji}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaProvider>
  )
}