import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

// Define a type that extends the default TextProps with any additional custom props
interface CustomTextProps extends TextProps {
  bold?: boolean;
  fontSize?: number;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  regularText: {
    fontFamily: "Literata_400Regular",
  },
  boldText: {
    fontFamily: "Literata_600SemiBold",
  },
});

// Create the custom Text component
const AppText: React.FC<CustomTextProps> = ({
  style,
  bold,
  fontSize,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.text,
        fontSize ? { fontSize } : {},
        bold ? styles.boldText : styles.regularText,
        { color: "black" },
        style,
      ]}
      {...props}
    />
  );
};

export default AppText;
