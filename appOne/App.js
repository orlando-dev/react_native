import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Caixas from './componentes/Caixas.js'
import Estilos from './estilos/Estilos.js';


export default function AppOne() {
  let exibir = false;
  return (
    <View style={Estilos.conteiner}>
      <Image 
          // source={{uri:'https://yt3.ggpht.com/ytc/AAUvwniI4y4LvxThGmlmu2xA4lM0-BG581_wtv52hBYq=s88-c-k-c0x00ffffff-no-rj'}} 
          source={require('./assets/logoOjCroft.png')} 
          style={Estilos.ImgLogo}
      />
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
