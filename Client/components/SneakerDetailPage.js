import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import { Button } from "react-native-elements";
import TextWithFont from "./TextWithFont";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SneakerDetailPage = ({ route }) => {
  const item = route.params.item;
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <>
      <View style={{ width: "100%" }}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          buttonStyle={styles.backButton}
          icon={<Ionicons name={"arrow-back"} size={30} color={"#000"} />}
        />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.wrapper}>
          <Image
            source={{ uri: item.image }}
            style={{ width: "70%", height: 250, resizeMode: "contain" }}
          />
          <TextWithFont style={{ fontSize: 20 }}>{item.text}</TextWithFont>
          <View style={styles.infoContainer}>
            <TextWithFont style={{ fontSize: 16 }}>{item.price}</TextWithFont>
            <View style={styles.condContainer}>
              <TextWithFont style={{ fontSize: 16 }}>
                {item.condition}
              </TextWithFont>
            </View>
            <View style={styles.sizeContainer}>
              <TextWithFont>{item.size}</TextWithFont>
            </View>
            <View style={styles.descContainer}>
              <TextWithFont>{item.desc}</TextWithFont>
            </View>
            <View style={styles.btnContainer}>
              <Button
                buttonStyle={styles.btnStyle}
                title="ADD TO CART"
                onPress={() => {
                  addToCart(item);
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SneakerDetailPage;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  infoContainer: {
    paddingTop: 16,
  },

  descContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },

  sizeContainer: {
    paddingTop: 16,
  },

  condContainer: {
    paddingTop: 16,
  },

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

  backButton: {
    backgroundColor: "transparent",
    alignSelf: "flex-start",
    paddingLeft: 10,
  },
});
