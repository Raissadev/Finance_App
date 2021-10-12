import styled from 'styled-components/native';

export const Background = styled.View`
    flex:1;
    background-color: #141418;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
    background: #1f2025;
    width: 90%;
    font-size: 17px;
    color: #FFF;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 7px;
    height:50px;
`;
export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 45px;
    border-radius: 8px;
    margin:8% 0;
    background-color: #7240FF;
`;
export const SubmitText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

