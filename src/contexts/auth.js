import React, { useState ,createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(()=> {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');
            //se o storageUser acima devolver algo, vai ficar dentro da variável abaixo
            if(storageUser){
                setUser(JSON.parse(storageUser)); //como foi convertido para string, estou convertendo-o novamente para json
                setLoading(false);
            }
                setLoading(false);
        }

        loadStorage();
    }, []);

    //Logar Usuário
    async function signIn(email,password){
        setLoadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email,password).then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value').then((snapshot)=>{ //.then = se der certo
                let data = { uid: uid, nome: snapshot.val().nome, email: value.user.email };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        }).catch((error) => {
            alert('Ops! Ocorreu um erro.');
            setLoadingAuth(false);
        })
    }

    //Cadastrar Usuário
    async function signUp(email,password,nome){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email,password).then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo: 0,
                nome: nome
            }).then(()=>{ //conseguir criar
                let data = { uid: uid, nome: nome, email: value.user.email };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        }).catch((error) => {
            alert('Ops! Ocorreu um erro.');
            setLoadingAuth(false);
        })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user',JSON.stringify(data)); //precisamos passar uma string (não pode passar um objeto)
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear().then(() => {
            setUser(null);
        }).catch((error) => {
            alert('Ops... Algo de errado!');
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

