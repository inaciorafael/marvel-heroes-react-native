import React from "react";
import { View } from "react-native";
import { Container, Action } from "./styles";

const ItemCategory = (props) => {
  return (
    <View>
      <Action onPress={props.onPress}>
        <Container color={props.color}>{props.children}</Container>
      </Action>
    </View>
  );
};

export default ItemCategory;
