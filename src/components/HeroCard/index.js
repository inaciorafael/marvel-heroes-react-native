import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  FlatList,
  Image
} from "react-native";

import { Container, Action, HeroName, HeroTitleName } from "./styles";

import Panther from './chars/black-panther.png'

const HeroCard = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await props.data;;
      setData(response);
    }
    loadData();
  }, []);

  return (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          horizontal
          data={props.data}
          keyExtractor={(item) => item.id}
          key={(item) => item.id}
          renderItem={({ item }) => {
              return(
            <Action key={item.id}>
              <ImageBackground
                source={require("./chars/deadpool.png")}
                style={styles.imgBackground}
                imageStyle={{ borderRadius: 16 }}
              >
                <HeroName>{item.alterEgo}</HeroName>
                <HeroTitleName>{item.name}</HeroTitleName>
              </ImageBackground>
            </Action>
          )}}
        />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    borderRadius: 16,
    paddingLeft: 12,
    paddingBottom: 12,
    justifyContent: "flex-end",
    resizeMode: "cover",
    flex: 1,
  },
});

export default HeroCard;
