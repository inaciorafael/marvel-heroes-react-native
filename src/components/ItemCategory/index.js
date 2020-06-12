import React from "react";
import { Container, Action } from "./styles";

const ItemCategory = (props) => {
  return (
    <>
      <Action onPress={props.onPress}>
        <Container color={props.color}>{props.children}</Container>
      </Action>
    </>
  );
};

export default ItemCategory;
