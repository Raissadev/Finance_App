import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

import { Container, Welcome, Nome } from './styles';

export default function CustomDrawer(props) {

    const { user, signOut } = useContext(AuthContext);

    return (
    <DrawerContentScrollView {...props}>

        <Container>
            <Image source={require('../../assets/Logo.png')} style={{width:85, height:85}} resizeMode="contain" />
            <Welcome>Bem vindo!</Welcome>
            <Nome>{user && user.nome}</Nome>
        </Container>

        <DrawerItemList {...props} />

        <DrawerItem {...props} label="Sair" onPress={ () => signOut() } />

    </DrawerContentScrollView>
    );
}