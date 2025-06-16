import { hp, wp } from "@/helpers/common";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import AppText from "./AppText";

export default function CategoryRow() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: hp(1),
        marginTop: hp(1.7),
      }}
    >
      <FlatList
        data={["All", "Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Fantasy"]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Pressable
            style={{
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 20,
              backgroundColor: `${index === 0 ? "#4E74F3" : "#fff"}`,
              marginRight: wp(1.5),
            }}
          >
            <AppText
              fontSize={14}
              style={{ color: `${index === 0 ? "white" : "black"}` }}
            >
              {item}
            </AppText>
          </Pressable>
        )}
      />
    </View>
  );
}
