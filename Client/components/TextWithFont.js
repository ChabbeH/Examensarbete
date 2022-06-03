import { Text } from "react-native";
import React from "react";

const TextWithFont = (props) => {
  return (
    <Text style={[{ fontFamily: "Neuro", lineHeight: 24 }, { ...props.style }]}>
      {props.children}
    </Text>
  );
};

export default TextWithFont;
