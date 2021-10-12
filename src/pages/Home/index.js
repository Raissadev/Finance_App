import React, { useContext, useState, useEffect } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import firebase from '../../services/firebaseConnection';
import { format, isBefore } from 'date-fns';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList'; 
import Icon from '@expo/vector-icons/Feather';
import DatePicker from '../../components/DatePicker';

import { Background, Container, Nome, Saldo, Title, List, Area, Card, TextCard, ContainerList, AreaInfo, TitleInfo } from './styles';

export default function Home() {

  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico').child(uid).orderByChild('date').equalTo(format(new Date, 'dd/MM/yyyy'))
      .limitToLast(10).on('value',(snapshot)=>{
        setHistorico([]);
        snapshot.forEach((childItem)=>{
          let list = { key: childItem.key, tipo: childItem.val().tipo, valor: childItem.val().valor, date: childItem.val().date, };

          setHistorico(oldArray => [...oldArray, list].reverse()); //.reverse = de trás pra frente
        })
      })
    }
    loadList();
  }, [newDate]); //toda vez que a date sofrer alguma alteração ele vai retornar de acordo com os dados colocados na data

  function handleDelete(data){
    //Pegando data do item:
    const [diaItem, mesItem, anoItem] = data.date.split('/');
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`); //formato americano
    //Pegando data de hoje
    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`); //formato americano

    if( isBefore(dateItem, dateHoje) ){ //isBefore vai comparar se o dateItem é anterior ao dia de hoje
      //Se a data do registro já passou
      alert('Você não pode excluir um registro antigo!');
      return;
    }
    Alert.alert( 'Cuidado Atenção!', `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
    [{ text: 'Cancelar', style: 'cancel' }, { text: 'Continuar', onPress: () => handleDeleteSuccess(data)  }] )
  }

  async function handleDeleteSuccess(data){
    await firebase.database().ref('historico').child(uid).child(data.key).remove().then(async () => {
      let saldoAtual = saldo;
      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);
      
      await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual);
    }).catch((error)=>{
      alert('Ops... ocorreu um erro!');
    })
  }

  function handleShowPicker(){
    setShow(true);
  }

  function handleClose(){
    setShow(false);
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
  }
  return (
    <Background>

      <Header />

      <Container>
          <Nome>Bem vindo! {user && user.nome}</Nome>
      </Container>
        
        <Card style={{ alignItems:'center',justifyContent:'center', borderWidth:1, elevation:3, borderColor:'rgba(0,0,0,0.2)'}}>
            <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
        </Card>

      <ContainerList>
        <Area>
          <TouchableOpacity onPress={handleShowPicker}>
            <Title>Últimas Movimentações</Title>
          </TouchableOpacity>
          <AreaInfo>
            <TitleInfo>Hoje</TitleInfo>
            <TitleInfo style={{textAlign:'right'}}>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</TitleInfo>
          </AreaInfo>
        </Area>

        <List showsVerticalScrollIndicator={false} data={historico} keyExtractor={item => item.key} 
        renderItem={ ({ item }) => ( <HistoricoList data={item} deleteItem={handleDelete} /> ) } />

        {show && (
          <DatePicker onClose={handleClose} date={newDate} onChange={onChange} />
        )}
      </ContainerList>

    </Background>
  );
}