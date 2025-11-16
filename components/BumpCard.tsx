import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from "react-native-safe-area-context";

interface Feature {
  icon: string;
  text: string;
}

interface BumpCardProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

export default function BumpCard({
  title = 'Why BUMP TO BLISS',
  subtitle = 'Learn about awesome and personalized experience we are providing in this app',
  features = [
    { icon: 'star-outline', text: '24/7 ready for the call' },
    { icon: 'star-outline', text: 'Personalized Content' },
    { icon: 'star-outline', text: 'Personalized Content' },
    { icon: 'star-outline', text: 'Personalized Content' },
    { icon: 'star-outline', text: 'Personalized Content' },
    { icon: 'star-outline', text: 'Personalized Content' },
  ],
}: BumpCardProps) {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <View style={{ backgroundColor: '#F5EFFF', borderRadius: 16, padding: 24, marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1A1A1A', marginBottom: 8 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 13, color: '#666', marginBottom: 20, lineHeight: 18 }}>
            {subtitle}
          </Text>

          <View style={{ gap: 16 }}>
            {features.map((feature, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                <MaterialCommunityIcons
                  name={feature.icon}
                  size={20}
                  color="#7B68BB"
                />
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#1A1A1A', flex: 1 }}>
                  {feature.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}