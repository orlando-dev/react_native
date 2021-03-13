import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import C1 from './componentes/comp1';

export default function AppOne() {
  return (
    <View style={estilos.conteiner}>
      <C1 estudo="React Native" nota="10" cor="#ff0"/>
      <C1 estudo="JavaScrip" nota="10" cor="#f0f"/>
      <C1 estudo="Css" nota="10" cor="#0ff"/>
      <C1 estudo="Json" nota="10" cor="#000"/>
      <Text style={estilos.txt0}> Estudos React</Text>
      <Text style={{color: '#f00', fontSize:48}}> Estudos React</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt0: {
    color: '#080',
    fontSize: 30,
  },
});

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
