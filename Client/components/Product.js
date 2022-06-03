import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import TextWithFont from "./TextWithFont";

export const Product = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate("SneakerDetailView", { item: item });
      }}
    >
      <View style={styles.wrapper}>
        <Image
          source={{ uri: item.image }}
          style={{ width: "60%", height: 250, resizeMode: "contain" }}
        />

        <TextWithFont style={styles.productTitle}>{item.text}</TextWithFont>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },

  productTitle: {
    alignSelf: "center",
  },
});
