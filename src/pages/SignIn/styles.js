import styled from 'styled-components/native';

 export const Background = styled.View`
 flex:1;
 background-color: #141418;
 `;
 export const Container = styled.KeyboardAvoidingView`
 flex:1;
 align-items: center;
 justify-content: center;
 `;
 export const Logo = styled.Image`
 margin-bottom: 5%;
 `;
 export const AreaInput = styled.View`
 flex-direction: row;
 `;
 export const Input = styled.TextInput.attrs({
     placeholderTextColor: 'rgba(255,255,255,0.20)'
 })`
 background: #1f2025;
 width: 90%;
 font-size: 17px;
 color: #FFF;
 margin-bottom: 15px;
 padding: 10px;
 border-radius: 7px;
 `;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 45px;
    border-radius: 8px;
    margin:3% 0;
    background-color: #7240FF;
`;

export const SubmitText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const Link = styled.TouchableOpacity`
    margin:0 8%;
`;

export const LinkText = styled.Text`
    color: #FFF;
`;