import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button, Alert} from 'react-native';
import Caixas from './componentes/Caixas.js'
import Estilos from './estilos/Estilos.js';


const  dobro=(n) => {
  return n*2
}
const soma=(n1, n2)=>n1+n2

const msg=()=>{
  Alert.alert('Inscreva-se no canal', 'OjCroft')
}

export default function AppOne() {
  let exibir = false;
  return (
    <View style={Estilos.conteiner}>
      <Button
          title="Mostrar Ojcroft"
          onPress={msg}
      />
      <Image 
          // source={{uri:'https://yt3.ggpht.com/ytc/AAUvwniI4y4LvxThGmlmu2xA4lM0-BG581_wtv52hBYq=s88-c-k-c0x00ffffff-no-rj'}} 
          source={require('./assets/logoOjCroft.png')} 
          style={Estilos.ImgLogo}
      />
      {/* Aqui a baixo fica as caixas que antes eram exibidas */}
      {/* <Caixas exibirSe={exibir}/> */} 
      <Text style={Estilos.textoPadrao}> Estudos React</Text>
      <Text style={Estilos.textoTitulo}> Estudos React</Text>
      <Text>{dobro(3)} {soma(1,6)} </Text>

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
