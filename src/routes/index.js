import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){

    const { signed, loading } = useContext(AuthContext)

    if(loading){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator size="large" color="#131313" />
            </View>
        );
    }

    return(
       signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;

//signed ? <AppRoutes/> : <AuthRoutes/> = tem usuario? tem, então manda para a appRoutes. Se não manda para a tela de login