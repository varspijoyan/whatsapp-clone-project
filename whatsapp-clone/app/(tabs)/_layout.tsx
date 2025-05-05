import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3CB371",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: { backgroundColor: "#DCDCDC", height: 70 },
      }}
    >
      <Tabs.Screen
        name="highlights"
        options={{
          title: "Highlights",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="adjust" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: "Calls",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="phone" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="comments" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
