import { StyleSheet, View } from "react-native";
import React from "react";
import SneakerDetailPage from "../components/SneakerDetailPage";

const SneakerDetailView = ({ route }) => {
  return (
    <View style={styles.wrapper}>
      <SneakerDetailPage route={route} />
    </View>
  );
};

export default SneakerDetailView;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
});
