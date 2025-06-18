import { hp, wp } from "@/helpers/common";
import { Book } from "@/type";
import React from "react";
import { Pressable, View } from "react-native";
import AppText from "../AppText";
import BookGrid from "../book/BookGrid";

type Props = {
  title: string;
  viewMore: () => void;
  books: Book[];
};
export default function FeaturedGridSection({ title, viewMore, books }: Props) {
  return (
    <View
      style={{
        marginTop: hp(2),
        flex: 1,
        backgroundColor: "white",
        padding: wp(2.5),
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppText bold>{title}</AppText>
        <Pressable onPress={viewMore}>
          <AppText style={{ color: "#4E74F3" }}>See All</AppText>
        </Pressable>
      </View>

      {/* FlatList Row of Trending Books */}
      <BookGrid books={books} />
    </View>
  );
}
