import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from 'expo';

import {
  Container,
  Header,
  Action,
  WelcomeContainer,
  WelcomeTitle,
  Title,
  CategoryContainer,
  CardTitleContainer,
  CardTitle,
  FullOpen,
  TitleFullOpen,
} from "./styles";

//Components
import ItemCategory from "../../components/ItemCategory";
import HeroCard from "../../components/HeroCard";

//Navbar
import Menu from "../../components/svg/Menu";
import MarvelLogo from "../../components/svg/MarvelLogo";
import Search from "../../components/svg/Search";

//Category
import Hero from "../../components/svg/Hero";
import Villain from "../../components/svg/Villain";
import Anthihero from "../../components/svg/Anthihero";
import Alien from "../../components/svg/Alien";
import Human from "../../components/svg/Human";

import Data from '../../components/HeroCard/application.json';

const Home = () => {
  const [fontLoading, setFontLoading] = useState(true);
  const [heros, setHeros] = useState([])
  const [villains, setVillains] = useState([])
  const [anthiheros, setAnthiheros] = useState([])
  const [aliens, setAliens] = useState([])
  const [humans, setHumans] = useState([])

  useEffect(() => {
    async function setHerosData(){
      let response = await Data.heroes;
      setHeros(response)
    }
    async function setVillainsData(){
      let response = await Data.villains;
      setVillains(response)
    }
    async function setAnthiherisData(){
      let response = await Data.antiHeroes;
      setAnthiheros(response)
    }
    async function setAliensData(){
      let response = await Data.aliens;
      setAliens(response)
    }
    async function setHumansData(){
      let response = await Data.humans;
      setHumans(response)
    }
    setHerosData()
    setVillainsData()
    setAnthiherisData()
    setAliensData()
    setHumansData()
    
  },[])
  
  useEffect(() => {
    async function LoadFont() {
      await Font.loadAsync({
        "gilroy-bold": require("../../assets/fonts/gilroy-bold.otf"),
      });
      setFontLoading(false);
    }
    LoadFont()

  }, []);

  if (fontLoading) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <Header>
          <Action>
            <Menu />
          </Action>
          <MarvelLogo color="#F2264B" />
          <Action>
            <Search />
          </Action>
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WelcomeContainer>
            <WelcomeTitle>Bem Vindo ao Marvel Heroes</WelcomeTitle>
            <Title
              style={{ fontFamily: "gilroy-bold" }}
            >{`Escolha o seu \npersonagem`}</Title>
            <CategoryContainer>
              <ItemCategory color="#005BEA">
                <Hero onPress={() => alert("Hero")} />
              </ItemCategory>
              <ItemCategory color="#ED1D24">
                <Villain />
              </ItemCategory>
              <ItemCategory color="#B224EF">
                <Anthihero />
              </ItemCategory>
              <ItemCategory color="#0BA360">
                <Alien />
              </ItemCategory>
              <ItemCategory color="#FF7EB3">
                <Human />
              </ItemCategory>
            </CategoryContainer>
            <CardTitleContainer>
              <CardTitle>Heróis</CardTitle>
              <FullOpen onPress={() => alert("Ver tudo")}>
                <TitleFullOpen>Ver tudo</TitleFullOpen>
              </FullOpen>
            </CardTitleContainer>
            <HeroCard data={heros} />
            <CardTitleContainer>
              <CardTitle>Vilões</CardTitle>
              <FullOpen onPress={() => alert("Ver tudo")}>
                <TitleFullOpen>Ver tudo</TitleFullOpen>
              </FullOpen>
            </CardTitleContainer>
            <HeroCard data={villains} />
            <CardTitleContainer>
              <CardTitle>Anti-Heróis</CardTitle>
              <FullOpen onPress={() => alert("Ver tudo")}>
                <TitleFullOpen>Ver tudo</TitleFullOpen>
              </FullOpen>
            </CardTitleContainer>
            <HeroCard data={anthiheros}/>
            <CardTitleContainer>
              <CardTitle>Alienígenas</CardTitle>
              <FullOpen onPress={() => alert("Ver tudo")}>
                <TitleFullOpen>Ver tudo</TitleFullOpen>
              </FullOpen>
            </CardTitleContainer>
            <HeroCard data={aliens} />
            <CardTitleContainer>
              <CardTitle>Humanos</CardTitle>
              <FullOpen onPress={() => alert("Ver tudo")}>
                <TitleFullOpen>Ver tudo</TitleFullOpen>
              </FullOpen>
            </CardTitleContainer>
            <HeroCard data={humans}/>
          </WelcomeContainer>
        </ScrollView>
      </Container>
    );
  }
};

export default Home;
