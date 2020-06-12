import React from "react";
import { ImageBackground, StatusBar, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import {
  Container,
  Header,
  ActionBack,
  NameContainer,
  AlterEgo,
  HeroName,
  DetailsContainer,
  Area,
  TextInfo,
  BiografiContainer,
  TextBiografi,
  TextHabilities,
  TextMovies,
  MoviesContainer,
} from "./styles";

import MovieCard from "../../components/Movie";

//Icons
import AgeHero from "../../components/svg/Age";
import Weight from "../../components/svg/Weight";
import Height from "../../components/svg/Height";
import Universe from "../../components/svg/Universe";

import Back from "../../components/svg/Back";
import Spider from "../../assets/chars/spider-man.png";

import AbilitiesSpiderMan from "../../components/svg/AbilitiesSpiderMan";

//Movies
import spiderman1 from "../../assets/movies/spider-man-1.jpg";
import spiderman2 from "../../assets/movies/spider-man-2.jpg";
import spiderman3 from "../../assets/movies/spider-man-3.jpg";
import spidermanHome from "../../assets/movies/spider-man-far-from-home.jpg";
import spidermanComing from "../../assets/movies/spider-man-homecoming.jpg";
import avengers3 from "../../assets/movies/avengers-3.jpg";
import avengers4 from "../../assets/movies/avengers-4.jpg";
import capitainAmerica3 from "../../assets/movies/captain-america-3.jpg";

const Details = ({ route }) => {
  const { imagePath, alterEgo, Name, Bio, peso, altura, universo, idade } = route.params;
  const data = new Date()
  const characterAge = data.getFullYear() - idade

  const nav = useNavigation();

  StatusBar.setBarStyle("light-content");
  return (
    <Container>
      <ImageBackground
        source={{ uri: imagePath }}
        resizeMode="cover"
        style={{ width: 400, height: 800 }}
      >
        <Header>
          <ActionBack onPress={() => nav.goBack()}>
            <Back />
          </ActionBack>
        </Header>
        <ScrollView>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(0,0,0,0.6)",
              "rgba(0,0,0,0.9)",
              "rgba(0,0,0,0.9)",
              "#000",
            ]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              flex: 1,
              height: 1300,
            }}
          />
          <NameContainer>
            <AlterEgo>{alterEgo}</AlterEgo>
            <HeroName>{Name}</HeroName>
          </NameContainer>
          <DetailsContainer>
            <Area>
              <AgeHero />
              <TextInfo>{characterAge} anos</TextInfo>
            </Area>
            <Area>
              <Weight />
              <TextInfo>{peso}kg</TextInfo>
            </Area>
            <Area>
              <Height />
              <TextInfo>{altura}m</TextInfo>
            </Area>
            <Area>
              <Universe />
              <TextInfo>{universo}</TextInfo>
            </Area>
          </DetailsContainer>
          <BiografiContainer>
            <TextBiografi>{Bio}</TextBiografi>
          </BiografiContainer>
          <TextHabilities>Habilidades</TextHabilities>
          <AbilitiesSpiderMan style={{ marginLeft: 24, marginTop: 24 }} />
          <TextMovies>Filmes</TextMovies>
          <MoviesContainer>
            <ScrollView horizontal>
              <MovieCard image={spiderman1} />
              <MovieCard image={spiderman2} />
              <MovieCard image={spiderman3} />
              <MovieCard image={spidermanHome} />
              <MovieCard image={spidermanComing} />
              <MovieCard image={avengers3} />
              <MovieCard image={avengers4} />
              <MovieCard image={capitainAmerica3} />
            </ScrollView>
          </MoviesContainer>
        </ScrollView>
      </ImageBackground>
    </Container>
  );
};

export default Details;
