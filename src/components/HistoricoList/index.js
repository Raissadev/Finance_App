import React from 'react';
import Icon from '@expo/vector-icons/Feather';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { Container, Tipo, IconView, TipoText, ValorText, IconContainer, BackIcon, ValorContainer } from './styles';

export default function HistoricoList({ data, deleteItem }) {
 return (
    <TouchableWithoutFeedback onLongPress={ () => deleteItem(data) }>
        <Container>

            <IconContainer>
                <BackIcon>
                    <Icon name={data.tipo === 'despesa' ? 'credit-card' : 'dollar-sign'} color="#FFF" size={21} />
                </BackIcon>
            </IconContainer>

            <ValorContainer>
                <ValorText>R$ {data.valor}</ValorText>
                <TipoText>{data.tipo}</TipoText>
            </ValorContainer>

            <Tipo>
                <IconView tipo={data.tipo}>
                    <Icon name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'} color="#FFF" size={16} />
                </IconView>
            </Tipo>

        </Container>
   </TouchableWithoutFeedback>
  );
}