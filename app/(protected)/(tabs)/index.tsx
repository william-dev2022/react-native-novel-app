import AppText from "@/components/AppText";
import BookGrid from "@/components/book/BookGrid";
import CategoryRow from "@/components/CategoryRow";
import { hp, wp } from "@/helpers/common";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground } from "expo-image";
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
      {/* Search 
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "#f0f0f0",
          backgroundColor: "#fff",
          paddingHorizontal: wp(2),
          paddingVertical: hp(0.4),
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.04,
          // shadowRadius: 3.84,
          // elevation: 0.5,
        }}
      >
        <TextInput
          placeholder="Search for books, authors, genres..."
          style={{
            height: hp(5),
            flex: 1,
            fontFamily: "Literata_400Regular",
            color: "black",
            outlineColor: "transparent",
            fontSize: 16,
          }}
        />

        <Pressable
          style={{
            paddingHorizontal: wp(0.7),
            paddingVertical: hp(0.7),
            backgroundColor: "#fff",
            borderRadius: 10,
            marginLeft: wp(1),
          }}
        >
          <Feather name="search" size={18} color="black" />
        </Pressable>
      </View> */}
      {/* Category Tab Row */}
      <CategoryRow />
      {/* Featured Book Card */}
      <ImageBackground
        source={require("../../../assets/images/book-cover/cover-1.jpg")}
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
        tintColor="#6C63FF"
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
              source={require("../../../assets/images/book-cover/cover-1.jpg")}
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
      {/* Trending Now */}
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
        <BookGrid />
      </View>
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
