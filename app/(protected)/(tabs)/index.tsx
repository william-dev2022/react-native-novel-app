import AppText from "@/components/AppText";
import { hp, wp } from "@/helpers/common";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: wp(2),
          paddingVertical: hp(2),
          backgroundColor: "white",
          // borderRadius: 10,
          // shadowColor: "#000",
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,
          // elevation: 5,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <AppText bold fontSize={20}>
            BookVerse
          </AppText>
          <AppText fontSize={14}>Discover your next adventure</AppText>
        </View>

        <Pressable
          style={{
            position: "relative",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
            borderRadius: 50,
            padding: wp(2),
          }}
        >
          <Feather name="bell" size={24} color="black" />

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: wp(100),
    height: hp(100),
    // backgroundColor: "red",
    paddingHorizontal: wp(1),
    paddingTop: hp(4),
  },
});
