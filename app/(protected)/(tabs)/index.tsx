import AppText from "@/components/AppText";
import CategoryRow from "@/components/CategoryRow";
import FeaturedBook from "@/components/FeaturedBook";
import TrendingBooks from "@/components/TrendingBooks";
import { hp, wp } from "@/helpers/common";
import { Feather } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: hp(2),
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <AppText bold fontSize={20}>
            BookVerse
          </AppText>
          <AppText fontSize={14}>Discover your next adventure</AppText>
        </View>

        <View style={{ flexDirection: "row", columnGap: 5 }}>
          <Pressable
            style={{
              position: "relative",
              alignItems: "center",
              // backgroundColor: "#f0f0f0",
              backgroundColor: "#fff",
              borderRadius: 50,
              padding: wp(1.5),
            }}
          >
            <Feather name="search" size={18} color="black" />
          </Pressable>
          <Pressable
            style={{
              position: "relative",
              alignItems: "center",
              // backgroundColor: "#f0f0f0",
              backgroundColor: "#fff",
              borderRadius: 50,
              padding: wp(1.5),
            }}
          >
            <Feather name="bell" size={18} color="black" />

            {/* Red dot showing if theres notification */}
            <View
              style={{
                position: "absolute",
                top: hp(-0.5),
                right: wp(0.5),
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "red",
              }}
            ></View>
          </Pressable>
        </View>
      </View>

      {/* Category Tab Row */}
      <CategoryRow />
      {/* Featured Book Card */}
      <FeaturedBook />
      {/* Trending Book */}
      <TrendingBooks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    width: wp(100),
    height: hp(100),
    paddingHorizontal: wp(3),
    paddingTop: hp(4),
    rowGap: hp(2),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // fills the entire background
    backgroundColor: "rgba(0, 0, 0, 0.5)", // black with 50% opacity
  },
});
