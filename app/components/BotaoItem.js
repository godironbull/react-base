import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// Este é o componente principal do arquivo
const BotaoItem = () => {
  return (
    <TouchableOpacity style={{ padding: 10, backgroundColor: 'pink' }}>
      <Text style={{ color: 'white' }}>sou rosa</Text>
    </TouchableOpacity>
  );
};

// Exportando como padrão
export default BotaoItem;
