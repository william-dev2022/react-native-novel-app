import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

// Define a type that extends the default TextProps with any additional custom props
interface CustomTextProps extends TextProps {
  bold?: boolean;
  size?: number;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  regularText: {
    fontFamily: "Krub_400Regular",
    // fontFamily: "Poppins_400Regular",
  },
  boldText: {
    fontFamily: "Krub_600SemiBold",
  },
});

// Create the custom Text component
const AppText: React.FC<CustomTextProps> = ({ style, bold, ...props }) => {
  return (
    <Text
      style={[
        styles.text,
        bold ? styles.boldText : styles.regularText,
        { color: "black" },
        style,
      ]}
      {...props}
    />
  );
};

export default AppText;
