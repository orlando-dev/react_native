import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Estilos from '../estilos/Estilos.js';
let nt;


export default function (props) {
    nt = props.nota;
   
  return (
    <Text style={Estilos.textoEstudos}>
      Estudos {props.estudo}: Nota={nt}
    </Text>
  );
}


