"use client"

import React, { useState } from "react"
import { View, Text, ScrollView, Pressable, Image, ImageSourcePropType } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import { profile } from "@/constants/profile"

export default function Profile() {
  const router = useRouter()

  const [babies] = useState([
    { id: "1", name: "Kiki", avatar: profile.kiki },
    { id: "2", name: "Ayu", avatar: profile.ayu },
  ])

  const quickActionsMenu = [
    { icon: profile.appointments, title: "Appointments", subtitle: "Upcoming Date 15.11.25" },
    { icon: profile.reports, title: "Reports", subtitle: "View latest updates" },
    { icon: profile.dietChart, title: "Diet Chart", subtitle: "Customized" },
  ]

  const settingsMenu = [
    { icon: profile.notifications, title: "Notifications" },
    { icon: profile.faq, title: "FAQ" },
    { icon: profile.termConditions, title: "Terms & Condition" },
    { icon: profile.privacyPolicy, title: "Privacy Policy" },
    { icon: profile.contactUs, title: "Contact Us" },
    { icon: profile.settings, title: "Settings" },
    { icon: profile.deleteAccount, title: "Delete Account" },
    { icon: profile.logOut, title: "Log out" },
  ]

  type MenuItem = {
    icon: ImageSourcePropType
    title: string
    subtitle?: string
  }

  type MenuItemRowProps = {
    item: MenuItem
    onPress?: () => void
  }

  const MenuItemRow: React.FC<MenuItemRowProps> = ({ item, onPress }) => (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
        paddingHorizontal: 16,
      }}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image source={item.icon} style={{ width: 24, height: 24, marginRight: 12 }} resizeMode="contain" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#1f2937" }}>{item.title}</Text>
          {item.subtitle && <Text style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>{item.subtitle}</Text>}
        </View>
      </View>
      <Text style={{ fontSize: 18, color: "#d1d5db", marginLeft: 8 }}>›</Text>
    </Pressable>
  )

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#f5f5f7" , paddingBottom:100 }} >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingVertical: 30,
            backgroundColor: "#ffffff",
          }}
        >
          <Pressable onPress={() => router.back()}>
            <Text style={{ fontSize: 24, color: "#1f2937", fontWeight: "600" }}>‹</Text>
          </Pressable>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#1f2937" }}>Profile</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* User Profile Card */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 16,
            marginTop: 16,
            padding: 16,
            backgroundColor: "#ffffff",
            borderRadius: 12,
            elevation: 2,
          }}
        >
          <Image source={profile.profileImage} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#1f2937", marginBottom: 4 }}>Soma Trivedi</Text>
            <Text style={{ fontSize: 12, color: "#6b7280" }}>soma34@gmail.com</Text>
          </View>
          <Pressable
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: "#a8d8e1",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={profile.edit} style={{ width: 18, height: 18 }} />
          </Pressable>
        </View>

        {/* Babies Section */}
        <View style={{ marginHorizontal: 16, marginTop: 16 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#1f2937", marginBottom: 12 }}>Babies</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            {babies.map((baby) => (
              <View key={baby.id} style={{ alignItems: "center" }}>
                <Image source={baby.avatar} style={{ width: 50, height: 50, borderRadius: 25, marginBottom: 8 }} />
                <Text style={{ fontSize: 12, color: "#374151", fontWeight: "500" }}>{baby.name}</Text>
              </View>
            ))}
            <Pressable
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 2,
                borderStyle: "dashed",
                borderColor: "#d1d5db",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "#9ca3af", fontWeight: "300" }}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Quick Actions Card */}
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 12,
            backgroundColor: "#ffffff",
            borderRadius: 12,
            overflow: "hidden",
            elevation: 2,
          }}
        >
          {quickActionsMenu.map((item, index) => (
            <View key={index}>
              <MenuItemRow item={item} onPress={() => console.log(`Pressed ${item.title}`)} />
              {index < quickActionsMenu.length - 1 && (
                <View style={{ height: 1, backgroundColor: "#f3f4f6" }} />
              )}
            </View>
          ))}
        </View>

        {/* Settings Card */}
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 12,
            backgroundColor: "#ffffff",
            borderRadius: 12,
            overflow: "hidden",
            elevation: 2,
          }}
        >
          {settingsMenu.map((item, index) => (
            <View key={index}>
              <MenuItemRow item={item} onPress={() => console.log(`Pressed ${item.title}`)} />
              {index < settingsMenu.length - 1 && (
                <View style={{ height: 1, backgroundColor: "#f3f4f6" }} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}
