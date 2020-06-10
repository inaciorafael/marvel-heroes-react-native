import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  height: 230px;
  width: 400px;
  flex-direction: row;
  margin-top: 16px;
  padding-right: 24px;
`;

export const Action = styled.TouchableOpacity`
  height: 230px;
  background: gray;
  background: green;
  width: 140px;
  border-radius: 16px;
  margin-right: 16px;
`;

export const Card = styled.View`
`;

export const HeroName = styled.Text`
  font-size: 10px;
  color: #fff;
`;

export const HeroTitleName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
