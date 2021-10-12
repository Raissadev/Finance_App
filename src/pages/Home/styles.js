import styled from "styled-components/native";

export const Background = styled.View`
    flex:1;
    background-color:#141418;
`;
export const Container = styled.View`
    align-items:center;
    justify-content:center;
    margin-bottom:5%;
`;
export const Nome = styled.Text`
    font-size:15;
    color:#fff;
`;
export const Saldo = styled.Text`
    margin-top:5px;
    font-size:30px;
    color:#fff;
    font-weight:bold;
`;
export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top:15px;
    margin:0 3%;
`;
export const Card = styled.View`
    align-items:center;
    justify-content:center;
    width:90%;
    margin:0 auto;
    position:relative;
    height:180px;
    background-color:#1f2025;
    border-radius:15px;
`;
export const TextCard = styled.Text`

`;
export const ContainerList = styled.View`
    padding-top:8%;
`;
export const Area = styled.View`
    align-items:baseline;
    padding:1% 3%;
`;
export const Title = styled.Text`
    color:#FFF;
    font-size:16px;
    font-weight:bold;
`;
export const AreaInfo = styled.View`
    flex-direction:row;
`;
export const TitleInfo = styled.Text`
    color:#A4A4A4;
    width:50%;
    margin-top:1.5%;
`;