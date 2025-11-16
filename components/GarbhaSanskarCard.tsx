import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CATEGORIES, SAMPLE_ACTIVITIES } from '../constants/garbhaSanskar';

interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: any;
  type: 'Video' | 'Article';
  duration: string;
  category: string;
}

interface GarbhaSanskarCardProps {
  backgroundColor?: string;
  title?: string;
  subtitle?: string;
  activities?: ActivityItem[];
  onActivityPress?: (activity: ActivityItem) => void;
}

export default function GarbhaSanskarCard({
  backgroundColor = '#F4EFF8',
  title = 'What is Garbha Sanskar?',
  subtitle = 'Learn all about garba sanskar in this section',
  activities = SAMPLE_ACTIVITIES,
  onActivityPress,
}: GarbhaSanskarCardProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredActivities =
    selectedCategory === 'All'
      ? activities
      : activities.filter((act) => act.category === selectedCategory);

  const getTagColor = (type: string) => (type === 'Video' ? '#F4A460' : '#B8A2D1');

  const renderActivityItem = ({ item }: { item: ActivityItem }) => (
    <TouchableOpacity onPress={() => onActivityPress?.(item)} style={{ marginBottom: 16 }}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Image source={item.thumbnail} style={{ width: 80, height: 80, borderRadius: 12 }} />

        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#1F1F1F', marginBottom: 4 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 12, color: '#666' }}>{item.subtitle}</Text>
          </View>

          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 12,
                backgroundColor: getTagColor(item.type),
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: '500', color: '#FFF' }}>{item.type}</Text>
            </View>
            <Text style={{ fontSize: 11, color: '#999' }}>{item.duration}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ScrollView >
        <View style={{ backgroundColor, margin: 16, borderRadius: 16, padding: 16 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1F1F1F', marginBottom: 4 }}>
              {title}
            </Text>
            <Text style={{ fontSize: 13, color: '#666' }}>{subtitle}</Text>
          </View>

          <Text style={{ fontSize: 16, fontWeight: '600', color: '#1F1F1F', marginBottom: 12 }}>
            Today's Activity
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              {CATEGORIES.map((category) => (
                <TouchableOpacity
                  key={category}
                  onPress={() => setSelectedCategory(category)}
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: selectedCategory === category ? '#9B7DB4' : '#FFF',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      color: selectedCategory === category ? '#FFF' : '#666',
                    }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <FlatList
            data={filteredActivities}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
