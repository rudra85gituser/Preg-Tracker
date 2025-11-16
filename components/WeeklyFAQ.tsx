import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface WeeklyFAQProps {
  items?: FAQItem[];
}

export default function WeeklyFAQ({ 
  items = [
    {
      id: '1',
      question: 'Why does in the morning sickness, I feel dizziness...',
      answer: 'Morning sickness and dizziness during pregnancy are common symptoms caused by hormonal changes and increased blood volume. It\'s recommended to eat small, frequent meals and stay hydrated.',
    },
    {
      id: '2',
      question: 'Why does in the morning sickness, I feel dizziness...',
      answer: 'These symptoms typically subside after the first trimester. However, if they persist or worsen, consult your healthcare provider.',
    },
    {
      id: '3',
      question: 'What are safe exercises during pregnancy?',
      answer: 'Walking, swimming, prenatal yoga, and modified stretching are safe exercises. Always consult your doctor before starting any new exercise routine.',
    },
  ],
}: WeeklyFAQProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
  
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
        {/* Title */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#333333',
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          Weekly FAQ
        </Text>

        {/* FAQ Items */}
        <View style={{ gap: 12, marginBottom: 20 }}>
          {items.map((item) => (
            <View key={item.id}>
              {/* Question Header */}
              <TouchableOpacity
                onPress={() => toggleExpand(item.id)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#E8E8E8',
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 14,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 3,
                  elevation: 2,
                }}
              >
                {/* Question Text */}
                <Text
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: '500',
                    color: '#555555',
                    marginRight: 12,
                  }}
                  numberOfLines={2}
                >
                  {item.question}
                </Text>

                {/* Chevron Icon */}
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: '#E5F5F3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <MaterialCommunityIcons
                    name={expandedId === item.id ? 'chevron-up' : 'chevron-down'}
                    size={24}
                    color="#4A9B8E"
                  />
                </View>
              </TouchableOpacity>

              {/* Answer Content */}
              {expandedId === item.id && (
                <View
                  style={{
                    backgroundColor: '#F9FFFE',
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: '#E8E8E8',
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
                      color: '#666666',
                      lineHeight: 20,
                    }}
                  >
                    {item.answer}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
   
  );
}
