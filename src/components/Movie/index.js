import React from "react";
import { StyleSheet, ImageBackground } from 'react-native';

import {  Action } from "./styles";

const Movie = (props) => {
  return (
      <Action>
        <ImageBackground
          source={props.image}
          style={styles.imgBackground}
          imageStyle={{ borderRadius: 16 }}
        >
        </ImageBackground>
      </Action>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    paddingLeft: 12,
    paddingBottom: 12,
    justifyContent: "flex-end",
    resizeMode: "cover",
    flex: 1,
  },
});

export default Movie;
