import styled from 'styled-components';
import { StatusBar } from 'react-native';

const heightStatusBar = StatusBar.currentHeight;

export const Container = styled.View`

`;

export const Header = styled.View`
    margin-top: ${heightStatusBar}px;
    height: 64px;
    justify-content: center;
    padding-left: 24px;
`;

export const ActionBack = styled.TouchableOpacity``;

export const NameContainer = styled.View`
    height: 130px;
    margin-top: 252px;
    padding-left: 24px;
    justify-content: center;
`;

export const AlterEgo = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const HeroName = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 40px;
`;

export const DetailsContainer = styled.View`
    margin-top: 48px;
    flex-direction: row;
    padding: 0 24px;
    justify-content: space-between;
`;

export const Area = styled.View`
    justify-content: center;
    align-items: center;
`;

export const TextInfo = styled.Text`
    font-size: 12px;
    color: #fff;
    margin-top: 12px;
`;

export const BiografiContainer = styled.View`
    padding: 24px;
`;

export const TextBiografi = styled.Text`
    font-size: 14px;
    color: #fff;
`;

export const TextHabilities = styled.Text`
    color: #fff;
    margin-top: 32px;
    margin-left: 24px;
    font-size: 18px;
    font-weight: bold;
`; 

export const TextMovies = styled.Text`
    color: #fff;
    margin-top: 32px;
    margin-left: 24px;
    font-size: 18px;
    font-weight: bold;
`;

export const MoviesContainer = styled.View`
    flex-direction: row;
    padding-left: 24px;
    padding-top: 24px;
    padding-right: 24px;
    margin-bottom: 20px;
`;