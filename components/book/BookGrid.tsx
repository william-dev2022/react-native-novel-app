import { hp, numberOfColumn } from "@/helpers/common";
import { books } from "@/helpers/data";
import { Image } from "expo-image";
import React from "react";
import { FlatList, Pressable } from "react-native";
import AppText from "../AppText";

export default function BookGrid() {
  const columns = numberOfColumn();
  return (
    <FlatList
      // horizontal
      style={{ marginTop: hp(1.7) }}
      data={books}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      columnWrapperStyle={{
        justifyContent: "space-between",
      }}
      numColumns={columns} // Display in two columns
      renderItem={({ item }) => (
        <Pressable
          style={{
            width: `${95 / columns}%`,
            marginBottom: hp(2),
            backgroundColor: "#fff",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.04,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: hp(20),
              borderRadius: 5,
              marginBottom: hp(1),
            }}
            contentFit="cover"
            contentPosition="center"
          />
          <AppText bold fontSize={16} numberOfLines={1}>
            {item.title}
          </AppText>
          <AppText fontSize={14} style={{ color: "#666" }}>
            by Author Name
          </AppText>
        </Pressable>
      )}
    />
  );
}
