import { StyleSheet, View } from "react-native";

export const Divider = ({ style }) => {
  return <View style={[styles.divider, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 0.4,
    backgroundColor: "gray",
  },
});
