import styled from "styled-components/native";

export const Container = styled.View`
    margin-bottom:3%;
    padding:10px;
    box-shadow:0 0 2px rgba(0,0,0,0.70);
    background-color:#1f2025;
    align-items:center;
    border-radius:10px;
    flex-direction:row;
    height:70px;
`;
export const Tipo = styled.View`
    width:25%;
    align-items:flex-end;
    justify-content:center;
`;
export const IconContainer = styled.View`
    width:25%;
    align-items:center;
`;
export const BackIcon = styled.View`
    background-color:#1d1e23;
    height:50px;
    width:50px;
    align-items:center;
    justify-content:center;
    border-radius:25px;
    border-width: 1;
    border-color: #1d1e23;
    shadow-color: #000;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;
`;
export const ValorContainer = styled.View`
    width:50%;
`;
export const TipoText = styled.Text`
    color:#A4A4A4;
    font-size:14px;
    font-style:italic;
`;
export const ValorText = styled.Text`
    color:#fff;
    font-size:18px;
    font-weight:bold;
`;
export const IconView = styled.View`
    background-color:${props => props.tipo === 'despesa' ? '#7240FF' : '#30BE36'};
    border-radius:15px;
    width:30px;
    height:30px;
    align-items:center;
    justify-content:center
`;