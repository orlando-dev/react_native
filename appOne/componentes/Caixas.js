import React from 'react';
import { View } from 'react-native';

export default function(props){
    return (
        <View style={{width:'100%',height:300,flexDirection:'column', justifyContent: 'center', alignItems: 'stretch'}}>
            <View style={{flexGrow:1, backgroundColor:'#00f'}} />
            <View style={{flexGrow:1, backgroundColor:'#00a'}} />
            <View style={{flexGrow:1, backgroundColor:'#005'}} />
            <View style={{flexGrow:1, backgroundColor:'#f00'}} />
            <View style={{flexGrow:1, backgroundColor:'#a00'}} />
            <View style={{flexGrow:1, backgroundColor:'#500'}} />
        </View>
    );
}