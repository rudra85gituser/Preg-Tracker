import { useRouter } from "expo-router";
import { symptoms } from "@/constants/symptoms";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
export default function HomeScreen() {
  const router = useRouter();

  const previewSymptoms = [
    { id: "back-pain", name: "Back pain", image: symptoms.backPain },
    { id: "bloating", name: "Bloating", image: symptoms.bloating },
    { id: "contractions", name: "Contractions", image: symptoms.contractions },
    { id: "sore-breasts", name: "Sore breasts", image: symptoms.soreBreasts },
    { id: "exhaustion", name: "Exhaustion", image: symptoms.exhaustion },
    { id: "food-aversions", name: "Food aversions", image: symptoms.foodAversions },
  ];

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <ScrollView >

        <View
          style={{
            padding: 16,
            backgroundColor: "#F5EFFF",
            borderRadius: 16,
            marginHorizontal: 16,
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Symptoms Tracker
            </Text>

            <TouchableOpacity onPress={() => router.push("/symptoms")}>
              <Text style={{ color: "#4db5a6", fontWeight: "600" }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          {/* Small 2x2 Grid */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {previewSymptoms.map((item) => (
              <View
                key={item.id}
                style={{
                  width: "48%",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  padding: 12,
                  borderRadius: 12,
                  marginBottom: 10,
                  borderWidth: 1,
                  borderColor: "#e8f5f3",
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 34, height: 34, marginRight: 8 }}
                />

                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaProvider>
  );
}
