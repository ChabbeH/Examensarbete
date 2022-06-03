import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import { Button } from "react-native-elements";
import TextWithFont from "./TextWithFont";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <Image
        source={{ uri: item.image }}
        style={{ width: "60%", height: 250, resizeMode: "contain" }}
      />
      <TextWithFont>{item.text}</TextWithFont>
      <TextWithFont>{item.price}</TextWithFont>
      <View style={styles.btnContainer}>
        <Button
          buttonStyle={styles.btnStyle}
          title="Remove product"
          onPress={() => removeItem(item._id)}
        />
      </View>
    </>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  btnContainer: {
    paddingTop: 16,
    alignItems: "center",
    elevation: 2,
    paddingBottom: 16,
  },

  btnStyle: {
    width: 130,
    height: 40,
    borderRadius: 10,
    backgroundColor: "gold",
  },
});
