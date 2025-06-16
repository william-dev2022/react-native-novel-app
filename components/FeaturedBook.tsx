import { hp, wp } from "@/helpers/common";
import { Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground } from "expo-image";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function FeaturedBook() {
  return (
    <ImageBackground
      source={require("../assets/images/book-cover/cover-1.jpg")}
      style={{
        width: wp(94),
        // height: hp(25),
        marginTop: hp(1.7),
        borderRadius: 20,
        overflow: "hidden",
        paddingVertical: hp(2),
        paddingHorizontal: wp(2.5),
        justifyContent: "space-between",
      }}
      // tintColor="#6C63FF"
      contentFit="cover"
      contentPosition="left bottom"
      imageStyle={{
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      {/* Overlay */}
      <View style={styles.overlay} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 1 }}>
          {/* Tags */}
          <View style={{ flexDirection: "row", gap: wp(0.5) }}>
            <AppText
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                paddingHorizontal: wp(2),
                paddingVertical: hp(0.5),
                borderRadius: 10,
                fontSize: 12,
              }}
            >
              Featured
            </AppText>

            <AppText
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                paddingHorizontal: wp(2),
                paddingVertical: hp(0.5),
                borderRadius: 10,
                fontSize: 12,
              }}
            >
              New Release
            </AppText>
          </View>

          <View>
            {/* Book Title */}
            <AppText
              bold
              fontSize={20}
              style={{ color: "white", marginTop: hp(1.7) }}
            >
              Hide and Seek
            </AppText>
            {/* Author Name */}
            {/* <AppText style={{ color: "white" }}>by John Doe</AppText> */}
          </View>

          {/* Rating */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: hp(0.5),
            }}
          >
            <Ionicons name="star-sharp" size={16} color="#FFD700" />
            <AppText
              fontSize={14}
              style={{
                color: "white",
                marginLeft: wp(0.2),
                fontWeight: "500",
              }}
            >
              4.5
            </AppText>

            <AppText
              fontSize={14}
              style={{ color: "white", marginLeft: wp(1), opacity: 0.8 }}
            >
              (1.2K reviews)
            </AppText>
          </View>

          {/* Read Now Button */}
          <Pressable
            style={{
              marginTop: hp(2),
              backgroundColor: "#FFF",
              paddingVertical: hp(1),
              paddingHorizontal: wp(4),
              borderRadius: 20,
              alignSelf: "flex-start",
            }}
            onPress={() => {
              // Handle read now action
            }}
          >
            <AppText style={{ color: "#4E74F3", fontSize: 16 }}>
              Read Now
            </AppText>
          </Pressable>
        </View>

        <View style={{ alignItems: "center", flex: 0.3, marginLeft: wp(2) }}>
          <Image
            source={require("../assets/images/book-cover/cover-1.jpg")}
            style={{
              width: 100,
              minHeight: 120,
              borderRadius: 10,
              marginLeft: wp(2),
            }}
            contentFit="cover"
            contentPosition="center"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // fills the entire background
    backgroundColor: "rgba(0, 0, 0, 0.5)", // black with 50% opacity
  },
});
