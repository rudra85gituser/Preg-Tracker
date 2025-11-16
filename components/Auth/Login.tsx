"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email && password) router.push("/")
  }

  return (
    <SafeAreaProvider>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 20, paddingVertical: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          backgroundColor: "white",
          borderRadius: 20,
          padding: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 3
        }}>
          {/* Logo */}
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <View style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "#f0f0f0",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{ fontSize: 18, fontWeight: "600", color: "#333" }}>LOGO</Text>
            </View>
          </View>

          {/* Header */}
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 8, textAlign: "center" }}>
            Log In
          </Text>
          <Text style={{ fontSize: 14, color: "#666", textAlign: "center", marginBottom: 24 }}>
            Welcome back to your personalized tracking
          </Text>

          {/* Email Input */}
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#333", marginBottom: 8 }}>Email</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 12, padding: 12, fontSize: 14, color: "#000" }}
              placeholder="ex - abc@gmail.com"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          {/* Password Input */}
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#333", marginBottom: 8 }}>Password</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 12, padding: 12, fontSize: 14, color: "#000" }}
              placeholder="••••••••••"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Log In Button */}
          <TouchableOpacity
            onPress={handleLogin}
            activeOpacity={0.8}
            style={{ backgroundColor: "#1a0033", borderRadius: 12, paddingVertical: 14, marginTop: 20, marginBottom: 20 }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "600", textAlign: "center" }}>Log In</Text>
          </TouchableOpacity>

          {/* Signup Link */}
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 13, color: "#666" }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/auth/signup")}>
              <Text style={{ fontSize: 13, color: "#1a0033", fontWeight: "600" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}
