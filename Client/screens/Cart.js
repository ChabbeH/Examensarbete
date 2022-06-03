import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "../components/CartItem";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import TextWithFont from "../components/TextWithFont";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <FontAwesome5
        light
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      {cartItems.length === 0 ? (
        <TextWithFont>Cart is Empty</TextWithFont>
      ) : (
        <View style={styles.wrapper}>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} index={index} />
          ))}

          <TextWithFont>Cart Total</TextWithFont>
          <TextWithFont>
            {cartItems.reduce(
              (amount, item) => parseInt(item.price) + amount,
              0
            ) + " SEK"}
          </TextWithFont>
        </View>
      )}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 16,
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
});
