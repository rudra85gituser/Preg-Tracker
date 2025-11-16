"use client"

import { View, Text, Image } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { upcomingAppointment } from "../constants/upcomingAppointment" // adjust path if needed

interface UpcomingAppointmentProps {
  date: string
  time: string
  doctor?: string
}

export default function UpcomingAppointment({ date, time, doctor }: UpcomingAppointmentProps) {
  return (
    <SafeAreaProvider> 
      <View style={{ marginHorizontal: 16, marginVertical: 12 }}>
        <LinearGradient
          colors={['#4CA2A3', '#A5E1AD']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderRadius: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize: 14,
              color: "#FFFFFF",
              marginBottom: 4,
              fontWeight: "500"
            }}>
              Upcoming Appointment
            </Text>
            <Text style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#FFFFFF",
              marginBottom: 4
            }}>
              {date} at {time}
            </Text>
            {doctor && (
              <Text style={{ fontSize: 13, color: "#FFFFFF", opacity: 0.9 }}>
                {doctor}
              </Text>
            )}
          </View>
          
          {/* Icon with white circle background */}
          <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 16
          }}>
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#FFFFFF',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image 
                source={upcomingAppointment.stethoscope} 
                style={{ width: 24, height: 24 }} 
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  )
}