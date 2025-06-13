import { hp, wp } from "@/helpers/common";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

const { height } = Dimensions.get("window");

interface GradientBackgroundProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function GradientBackground({
  children,
  style,
}: GradientBackgroundProps) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={["#eab308", "#FFFFFF"]} // Yellow to white
        //  colors={["#831843", "#FFFFFF"]} /
        style={styles.background}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.3]} // 30% yellow, 70% white
      />
      {children ? (
        <View style={{ flex: 1, width: wp(100), height: hp(100) }}>
          {children}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            width: wp(100),
            height: hp(100),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 18 }}>
            No Content Available
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: height,
  },
});
