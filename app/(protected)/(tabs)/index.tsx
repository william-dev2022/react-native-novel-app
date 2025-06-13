import { hp, wp } from "@/helpers/common";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    backgroundColor: "#F9F9F9",

    paddingHorizontal: wp(4),
    paddingTop: hp(4),
  },
});
