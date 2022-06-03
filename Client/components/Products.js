import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { React, useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      {products.map((item, index) => (
        <Product item={item} key={index} />
      ))}
    </View>
  );
};
export default Products;
