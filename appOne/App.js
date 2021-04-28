import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Caixas from './componentes/Caixas.js'
import Estilos from './estilos/Estilos.js';


export default function AppOne() {
  let exibir = false;
  return (
    <View style={Estilos.conteiner}>
      <Caixas exibirSe={exibir}/>
      <Text style={Estilos.textoPadrao}> Estudos React</Text>
      <Text style={Estilos.textoTitulo}> Estudos React</Text>

      {exibir?<Text>Estudos React Native</Text>: <Text> - - - </Text>}
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
