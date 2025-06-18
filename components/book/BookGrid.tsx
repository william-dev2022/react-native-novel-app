import { hp, numberOfColumn } from "@/helpers/common";
import { Book } from "@/type";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import AppText from "../AppText";

type Props = {
  books: Book[];
};

export default function BookGrid({ books }: Props) {
  const columns = numberOfColumn();
  const router = useRouter();
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: hp(1.7),
      }}
    >
      {books.map((book) => {
        return (
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/(protected)/book/[id]",
                params: {
                  id: book.id,
                },
              })
            }
            key={book.id}
            style={{
              width: `${95 / columns}%`,
              marginBottom: hp(2),
              //   backgroundColor: "#fff",
              borderRadius: 10,
              //   shadowColor: "#000",
              //   shadowOffset: {
              //     width: 0,
              //     height: 2,
              //   },
              //   shadowOpacity: 0.04,
            }}
          >
            <Image
              source={book.image}
              style={{
                width: "100%",
                height: hp(18),
                borderRadius: 5,
                marginBottom: hp(1),
              }}
              contentFit="cover"
              contentPosition="center"
            />
            <AppText bold fontSize={14} numberOfLines={1}>
              {book.title}
            </AppText>
            {/* <AppText fontSize={14} style={{ color: "#666" }}>
              by Author Name
            </AppText> */}
          </Pressable>
        );
      })}
    </View>
  );
}

{
  /* <FlatList
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
    /> */
}
