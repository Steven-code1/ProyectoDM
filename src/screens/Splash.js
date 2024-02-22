import React, { useEffect } from "react";
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import * as Animatable from "react-native-animatable";
import { useFonts, Poppins_500Medium_Italic } from "@expo-google-fonts/poppins";

export default function Splash({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Ingreso');
        }, 5000); // Ajusta el tiempo de espera según lo necesario

        // Limpia el temporizador cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, [navigation]);

    // Carga la fuente
    let [fontLoaded] = useFonts({ Poppins_500Medium_Italic });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#7071AF' />
            <Animatable.Image
                animation="pulse"
                easing="ease-Out"
                iterationCount="infinite"
                style={styles.logo}
                source={require('../recursos/image/logo.png')}
            />
            <Text style={styles.bigText}>
                <Text style={styles.purpleText}>Más logros,</Text>{'\n'}
                <Text style={styles.grayText}>Menos obstáculos</Text>
            </Text>
            {/*<Text style={styles.smallText}>*/}
            {/*    Elige lo que deseas <Text style={styles.purpleText}>aprender</Text>, sigue una ruta,{'\n'}*/}
            {/*    <Text style={styles.purpleText}>registra</Text> tu progreso y <Text style={styles.purpleText}>evalúa</Text>.*/}
            {/*</Text>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Cambia al color de fondo deseado
        paddingHorizontal: 20, // Espaciado horizontal para los bordes izquierdo y derecho
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30, // Espacio inferior para separar del texto grande
    },
    bigText: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 20, // Espacio superior para separar del logo
        fontFamily: 'Poppins_500Medium_Italic',
    },
    smallText: {
        textAlign: 'left',
        fontSize: 14,
        marginTop: 20, // Espacio superior para separar del texto grande
    },
    purpleText: {
        color: '#7071AF', // Color de texto morado
    },
    grayText: {
        color: '#8c8c8c', // Color de texto plomo
    },
});

