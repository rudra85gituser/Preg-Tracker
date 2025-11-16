"use client";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { plansCardImage } from "@/constants/plans";

interface FeatureCard {
  id: string;
  title: string;
  imageUrl: any;
}

interface PlanData {
  name: string;
  price?: string;
  description: string;
  features: FeatureCard[];
  borderColor: string;
  isPremium: boolean;
}

const plansData: PlanData[] = [
  {
    name: "Basic Plan",
    price: "₹2400/mo",
    description: "Unlocking personalized care to enhance healthy pregnancy includes:",
    isPremium: false,
    borderColor: "#60d0d0ff",
    features: [
      { id: "basic-1", title: "Daily Garbhsanskar activities", imageUrl: plansCardImage.plan1_1 },
      { id: "basic-2", title: "Track baby’s growth - weekly insights", imageUrl: plansCardImage.plan1_2 },
      { id: "basic-3", title: "Soothing music & mantras for positivity", imageUrl: plansCardImage.plan1_3 },
      { id: "basic-4", title: "Affirmations & mood boosters", imageUrl: plansCardImage.plan1_4 },
      { id: "basic-5", title: "Kick counter & health alerts", imageUrl: plansCardImage.plan1_5 },
      { id: "basic-6", title: "Community access connect with moms to be", imageUrl: plansCardImage.plan1_6 },
    ],
  },
  {
    name: "Premium Plan",
    price: "₹3400/mo",
    description: "Unlock the complete range of your pregnancy. Everything in Basic plus:",
    isPremium: true,
    borderColor: "#c4b5fd",
    features: [
      { id: "premium-1", title: "Including all Basic Plan", imageUrl: plansCardImage.plan2_1 },
      { id: "premium-2", title: "Yoga teacher guidance for strength & flexibility", imageUrl: plansCardImage.plan2_2 },
      { id: "premium-3", title: "Doctor consultation & “Ask your Doctor Anytime” support", imageUrl: plansCardImage.plan2_3 },
      { id: "premium-4", title: "Tailored exercises for normal delivery & high-risk cases", imageUrl: plansCardImage.plan2_4 },
      { id: "premium-5", title: "Personalized diet plans for a healthy pregnancy", imageUrl: plansCardImage.plan2_5 },
      { id: "premium-6", title: "1-to-1 premium sessions with experts", imageUrl: plansCardImage.plan2_6 },
    ],
  },
];

const FeatureCardComponent = ({ feature }: { feature: FeatureCard }) => (
  <View
    style={{
      width: "47%", // two per row
      aspectRatio: 1,
      borderRadius: 16,
      overflow: "hidden",
      backgroundColor: "#f3f4f6",
      position: "relative",
      marginBottom: 14,
    }}
  >
    <Image source={feature.imageUrl} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        justifyContent: "flex-end",
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: "#fff",
          textAlign: "center",
          lineHeight: 18,
        }}
      >
        {feature.title}
      </Text>
    </View>
  </View>
);

const PlanCard = ({ plan }: { plan: PlanData }) => (
  <View
    style={{
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 24,
      marginBottom: 20,
      borderColor: plan.borderColor,
      borderWidth: 2,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 6,
      elevation: 4,
    }}
  >
    <View style={{ marginBottom: 18 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", color: "#1f2937", marginBottom: 6 }}>
        {plan.name}
      </Text>
      {plan.price && <Text style={{ fontSize: 18, fontWeight: "600", color: "#8b5cf6" }}>{plan.price}</Text>}
    </View>

    <Text style={{ fontSize: 15, color: "#6b7280", marginBottom: 20, lineHeight: 22 }}>
      {plan.description}
    </Text>

    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
      {plan.features.map((feature) => (
        <FeatureCardComponent key={feature.id} feature={feature} />
      ))}
    </View>
  </View>
);

export default function Plans() {
  const router = useRouter();

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#f0f4f8" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#e5e7eb",
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f3f4f6",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#374151" }}>{"<"}</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 18,
            paddingVertical: 10,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "#20094D",
          }}
          onPress={() => router.push("/")}
          
        >
          <Text style={{ fontSize: 15, fontWeight: "600", color: "#20094D" }}>Start Free Trial</Text>
        </Pressable>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 26 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              color: "#1f2937",
              textAlign: "center",
            }}
          >
            Unlock All <Text style={{ color: "#8b5cf6" }}>Premium</Text> Features
          </Text>
        </View>

        <View style={{ gap: 32, marginBottom: 36 }}>
          {plansData.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
