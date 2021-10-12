import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignIn() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp, loadingAuth } = useContext(AuthContext); //pegando a função signUp passada no auth

    function handleSignUp(){
        signUp(email, password, nome); //chamando a função do contexto
    }

    return (
    <Background>
        <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

            <AreaInput>
                <Input placeholder="Nome" autoCorrect={false} autoCapitalize="none" value={nome} onChangeText={ (text) => setNome(text) } />
            </AreaInput>

            <AreaInput>
                <Input placeholder="Senha" autoCorrect={false} autoCapitalize="none" value={email} onChangeText={ (text) => setEmail(text) } />
            </AreaInput>

            <AreaInput>
                <Input placeholder="Senha" autoCorrect={false} autoCapitalize="none" value={password} onChangeText={ (text) => setPassword(text) } secureTextEntry={true} />
            </AreaInput>

            <SubmitButton onPress={ handleSignUp }>
                { loadingAuth ? ( <ActivityIndicator size={20} color="#fff" /> ) :
                ( <SubmitText>Cadastrar</SubmitText> ) }
            </SubmitButton>

        </Container>
    </Background>
    );
    }