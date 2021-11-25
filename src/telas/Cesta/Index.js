import React from 'react'; 
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import Texto from '../componentes/Texto';

import topo from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>Detalhes da cesta</Text>
    

    <View style={estilos.cesta} >
        <Texto style={estilos.nome} >Cesta de Verduras</Texto>
        <View style={estilos.fazenda} >
            <Image source={logo} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda} >Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao} >Uma cesta de produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
        <Texto style={estilos.preco} >R$ 40,00</Texto>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});