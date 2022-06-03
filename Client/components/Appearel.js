import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextWithFont from "./TextWithFont";

const Appearel = () => {
  return (
    <View style={styles.container}>
      <TextWithFont style={styles.desc}>COMING SOON!</TextWithFont>
    </View>
  );
};

export default Appearel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  desc: {
    fontSize: 20,
    fontWeight: "900",
  },
});
