import { hp } from "@/helpers/common";
import { books } from "@/helpers/data";
import React from "react";
import { Pressable, View } from "react-native";
import AppText from "./AppText";
import BookGrid from "./book/BookGrid";

export default function TrendingBooks() {
  return (
    <View style={{ marginTop: hp(2), flex: 1, marginBottom: hp(10) }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppText bold>Trending</AppText>
        <Pressable>
          <AppText style={{ color: "#4E74F3" }}>View All</AppText>
        </Pressable>
      </View>

      {/* FlatList Row of Trending Books */}
      <BookGrid books={books} />
    </View>
  );
}
