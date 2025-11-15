"use client";

import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

// Importing all components (must be default exports)
import BabySizeCard from "@/app/babySizeCard";
import { UpcomingAppointment } from "@/app/upcomingAppointment";
import PlansCardHomeScreen from "@/app/plansCardHomeScreen";
import GarbhaSanskarCard from "@/app/garbhaSanskarCard";
import {HelpfulTipsCard} from "@/app/helpfulTipsCard";
import MoodTracker from "@/app/moodTracker";
import PregnancyTipCard from "@/app/pregnancyTipCard";
import HomeScreenSymptom from "@/app/homeScreenSymptom";
import WeeklyFAQ from "@/app/weeklyFAQ";
import BumpCard from "@/app/bumpCard";
import VideoCard from "@/app/videoCard";
import Testimonials from "@/app/testimonials";
import ShopLinks from "@/app/shopLinks";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ebf7f7ff" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 5,
          paddingBottom: 100, // space for bottom buttons + tab menu
        }}
        showsVerticalScrollIndicator={false}
      >


        {/* Header */}
        <View
          style={{
            alignItems: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: 8,
            }}
          >
            Pregnancy Tracker
          </Text>
          <Text style={{ fontSize: 16, color: "#20094D" }}>
            Track your pregnancy journey
          </Text>
        </View>

        {/* ACTION BUTTONS */}
        <View style={{ width: "100%", gap: 16, marginTop: 30 }}>
          {/* Sign Up */}
          <TouchableOpacity
            style={{
              backgroundColor: "#20094D",
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: "center",
            }}
            onPress={() => router.push("/auth/signup")}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Plans Card */}
          <TouchableOpacity
            style={{
              backgroundColor: "#20094D",
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: "center",
            }}
            onPress={() => router.push("/plansCard")}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Plans Card
            </Text>
          </TouchableOpacity>

          {/* AI Chat Assistant */}
          <TouchableOpacity
            style={{
              backgroundColor: "#20094D",
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: "center",
            }}
            onPress={() => router.push("/aiChatAssistant")}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              AI Chat Assistant
            </Text>
          </TouchableOpacity>

          {/* Symptoms Tracker */}
          <TouchableOpacity
            style={{
              backgroundColor: "#20094D",
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: "center",
            }}
            onPress={() => router.push("/symptoms")}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              Symptoms Tracker
            </Text>
          </TouchableOpacity>
        </View>


        {/* COMPONENTS SHOWN DIRECTLY */}
        <BabySizeCard />
        <UpcomingAppointment />
        <PlansCardHomeScreen />
        <GarbhaSanskarCard />
        <HelpfulTipsCard />
        <MoodTracker />
        <PregnancyTipCard />
        <HelpfulTipsCard />
        <HomeScreenSymptom />
        <WeeklyFAQ />
        <BumpCard />
        <VideoCard />
        <Testimonials />
        <ShopLinks />

       
      </ScrollView>
    </SafeAreaView>
  );
}
