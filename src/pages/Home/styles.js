import styled from 'styled-components';
import { StatusBar } from 'react-native';


const heightStatusBar = StatusBar.currentHeight

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    margin-top: ${heightStatusBar}px;
    height: 64px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Action = styled.TouchableOpacity``;

export const Menu = styled.Image``;

export const Logo = styled.Image``;

export const Search = styled.Image``;

export const WelcomeContainer = styled.View`
    margin: 24px;
`;

export const WelcomeTitle = styled.Text`
    color: #B7B7C8;
    font-size: 14px;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    color: #313140;
    font-size: 32px;
    font-weight: bold;
`;

export const CategoryContainer = styled.View`
    flex-direction: row;
    margin-top: 32px;
    justify-content: space-around;
    align-items: center;
`;

export const CardTitleContainer = styled.View`
    margin-top: 48px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const CardTitle = styled.Text`
    color: #F2264B;
    font-size: 18px;
    font-weight: bold;
`;

export const FullOpen = styled.TouchableOpacity``;

export const TitleFullOpen = styled.Text`
    color: #B7B7C8;
    font-size: 14px;
`;