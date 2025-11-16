"use client";

import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { symptoms as symptomImages } from "@/constants/symptoms"; // ✅ Import all images

interface Symptom {
  id: string;
  name: string;
  image: any;
}

const symptoms: Symptom[] = [
  { id: "back-pain", name: "Back pain", image: symptomImages.backPain },
  { id: "bloating", name: "Bloating", image: symptomImages.bloating },
  { id: "contractions", name: "Contractions", image: symptomImages.contractions },
  { id: "sore-breasts", name: "Sore breasts", image: symptomImages.soreBreasts },
  { id: "constipation", name: "Constipation", image: symptomImages.constipation },
  { id: "cramping", name: "Cramping", image: symptomImages.cramping },
  { id: "diarrhea", name: "Diarrhea", image: symptomImages.diarrhea },
  { id: "dizziness", name: "Dizziness", image: symptomImages.dizziness },
  { id: "exhaustion", name: "Exhaustion", image: symptomImages.exhaustion },
  { id: "food-aversions", name: "Food aversions", image: symptomImages.foodAversions },
  { id: "food-cravings", name: "Food cravings", image: symptomImages.foodCravings },
  { id: "frequent-urination", name: "Frequent urination", image: symptomImages.frequentUrination },
  { id: "headaches", name: "Headaches", image: symptomImages.headaches },
  { id: "heartburn", name: "Heartburn", image: symptomImages.heartburn },
  { id: "itching", name: "Itching", image: symptomImages.itching },
  { id: "insomnia", name: "Insomnia", image: symptomImages.insomnia },
  { id: "morning-sickness", name: "Morning sickness", image: symptomImages.morningSickness },
  { id: "pelvic-pain", name: "Pelvic pain", image: symptomImages.pelvicPain },
  { id: "spotting", name: "Spotting", image: symptomImages.spotting },
  { id: "stuffy-nose", name: "Stuffy nose", image: symptomImages.stuffyNose },
  { id: "swelling", name: "Swelling", image: symptomImages.swelling },
  { id: "discharge", name: "Discharge", image: symptomImages.discharge },
  { id: "other", name: "Other", image: symptomImages.other },
];

interface AddSymptomsProps {
  onClose: () => void;
  onSave: (selectedSymptoms: string[], notes: string) => void;
}

export default function AddSymptoms({ onClose, onSave }: AddSymptomsProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleSave = () => {
    onSave(selectedSymptoms, notes);
    onClose();
  };

  return (
    <SafeAreaProvider>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
        }}
      >
        <TouchableOpacity
          onPress={onClose}
          style={{
            width: 24,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#000" }}>
            {"<"}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#000",
            flex: 1,
            textAlign: "center",
          }}
        >
          Add Symptoms
        </Text>

        <TouchableOpacity
          onPress={handleSave}
          style={{
            backgroundColor: "#4db5a6",
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 14, fontWeight: "600" }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Symptoms grid */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 12,
            justifyContent: "space-between",
          }}
        >
          {symptoms.map((symptom) => (
            <TouchableOpacity
              key={symptom.id}
              onPress={() => toggleSymptom(symptom.id)}
              style={{
                width: "48%",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 12,
                paddingHorizontal: 12,
                marginBottom: 8,
                borderRadius: 12,
                backgroundColor: selectedSymptoms.includes(symptom.id)
                  ? "#e8f5f3"
                  : "#f9f9f9",
                borderWidth: 1,
                borderColor: selectedSymptoms.includes(symptom.id)
                  ? "#4db5a6"
                  : "#f0f0f0",
              }}
            >
              <Image
                source={symptom.image}
                style={{ width: 32, height: 32, marginRight: 8 }}
              />
              <Text style={{ fontSize: 14, fontWeight: "500", color: "#333" }}>
                {symptom.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Notes */}
        <View style={{ paddingHorizontal: 16, paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#333",
              marginBottom: 8,
            }}
          >
            Add Notes
          </Text>

          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#e0e0e0",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 14,
              color: "#333",
              textAlignVertical: "top",
            }}
            placeholder="Write down what's going on for you"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={notes}
            onChangeText={setNotes}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
