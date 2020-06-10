import styled from 'styled-components';

export const Container = styled.View`
    background: ${props => props.color};
    height: 65px;
    width: 65px;
    border-radius: 40px;
    margin: 5px;
    align-items: center;
    justify-content: center;
`;

export const Action = styled.TouchableOpacity``;