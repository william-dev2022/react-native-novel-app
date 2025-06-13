import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather, Ionicons } from "@expo/vector-icons"; // Importing vector icons for compatibility
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        //  tabBarStyle: {
        //     backgroundColor: colorScheme.background,
        //     borderColor: colorScheme.secondary,
        //     elevation: 1,
        //     borderTopWidth: 0.3,
        //     shadowColor: "transparent",
        //     marginBottom: 10,
        //   },

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          android: {
            // Use a solid background on Android
            backgroundColor: "white",
            borderColor: "transparent",
            borderTopWidth: 0,
            elevation: 1,
            shadowColor: "transparent",
            marginBottom: 10,
          },
          default: {
            borderColor: "transparent",
            backgroundColor: "white",
            borderTopWidth: 0,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={18} name="home-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <Ionicons size={18} name="book-outline" color={color} />
          ),
        }}
      />

      {/* <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons size={18} name="book-outline" color={color} />
          ),
        }}
      /> */}

      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color }) => (
            <Feather size={18} name="bookmark" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather size={18} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
