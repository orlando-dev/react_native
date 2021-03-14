import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import C1 from './componentes/comp1';
import Estilos from './estilos/Estilos.js';

export default function AppOne() {
  return (
    <View style={Estilos.conteiner}>
      <C1 estudo="React Native" nota="10"/>
      <C1 estudo="JavaScrip" nota="10"/>
      <C1 estudo="Css" nota="10"/>
      <C1 estudo="Json" nota="10"/>
      <Text style={Estilos.textoPadrao}> Estudos React</Text>
      <Text style={Estilos.textoTitulo}> Estudos React</Text>
    </View>
  );
}



// export default class AppOne extends Component {
//   render() {
//     return (
//       <View>
//         <View>
//           <Text>Estudo React</Text>
//           <Text>Estudando React-Native</Text>
//         </View>
//         <View>
//           <Text>Inicio</Text>
//           <Text>Olá Mundo</Text>
//         </View>
//       </View>
//     );
//   }
// }

// export default function AppOne(){
//   return (
//     <View>
//       <View>
//         <Text>Estudo React</Text>
//         <Text>Estudando React-Native</Text>
//       </View>
//       <View>
//         <Text>Inicio</Text>
//         <Text>Olá Mundo</Text>
//       </View>
//     </View>
//   );
// }
