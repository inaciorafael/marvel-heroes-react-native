import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Container, Action, HeroName, HeroTitleName } from "./styles";

const HeroCard = (props) => {
  const [data, setData] = useState([]);

  const nav = useNavigation();

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
          data={data}
          keyExtractor={(item) => item.id}
          key={(item) => item.id}
          renderItem={({ item }) => {
              return(
            <Action key={item.id} onPress={() => nav.navigate('Details', {
              imagePath: `${item.imagePath}`,
              alterEgo: item.alterEgo,
              Name: item.name,
              Bio: item.biography,
              peso: item.weight,
              altura: item.height,
              universo: item.universe,
              idade: item.birth,
            })}>
              <ImageBackground
                source={{uri: `${item.imagePath}`}}
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
    paddingLeft: 12,
    paddingBottom: 12,
    justifyContent: "flex-end",
    resizeMode: "cover",
    flex: 1,
  },
});

export default HeroCard;
