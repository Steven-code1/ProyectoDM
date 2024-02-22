import React from "react";
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const { width, height } = Dimensions.get('window');

export default function Ingreso() {
    const navigation = useNavigation(); // Obtener el objeto de navegación

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    function SvgFondo() {
        return (
            <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFillObject}>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="#063855" stopOpacity="1" />
                        <Stop offset="100%" stopColor="#81b29a" stopOpacity="1" />
                    </LinearGradient>
                </Defs>
                <Path fill="url(#grad)" fillRule="evenodd" d={`M0 0h${width}v${height}H0z`} />
            </Svg>
        );
    }

    return (
        <View style={styles.container}>
            {/* SvgFondo como fondo */}
            {/*  <SvgFondo />  */}
            <StatusBar backgroundColor='#7071AF'/>
            <View style={styles.contentContainer}>
                <View style={styles.logoEsquinaContainer}>
                    <Image
                        style={styles.logoEsquina}
                        source={require('../recursos/image/logo_esquina.png')}
                    />
                </View>
                <View style={styles.logoLoginContainer}>
                    <Image
                        style={styles.logoLogin}
                        source={require('../recursos/image/logo_login.png')}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.smallText}>
                            Elige lo que deseas <Text style={styles.purpleText}>aprender</Text>, sigue una ruta,{'\n'}
                            <Text style={styles.purpleText}>registra</Text> tu progreso y <Text
                            style={styles.purpleText}>evalúa</Text>.
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1', // Color de fondo de la aplicación
        paddingHorizontal: 10, // Espaciado horizontal para los bordes izquierdo y derecho
        color: '#8c8c8c', // Color de texto plomo

    },
    contentContainer: {
        position: 'relative', // Para que los elementos internos se posicionen relativamente a este contenedor
    },
    logoEsquinaContainer: {
        alignSelf: 'flex-start', // Alinear al inicio del eje principal (horizontalmente)
    },
    logoEsquina: {
        width: 100,
        height: 25,
        marginBottom: 10,
    },
    logoLoginContainer: {
        justifyContent: 'center', // Alinear al centro verticalmente
        alignItems: 'center', // Alinear al centro horizontalmente
        marginTop: 60,
    },
    logoLogin: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    textContainer: {
        alignItems: 'center', // Centrar contenido horizontalmente
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#7071AF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
        marginBottom: 10,
        marginTop: 20,
        width: 200, // Ancho fijo para ambos botones
        alignItems: 'center', // Alinear al centro horizontalmente
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    smallText: {
        textAlign: 'left',
        fontSize: 18,
        marginTop: 20, // Espacio superior para separar del texto grande
    },
    purpleText: {
        color: '#0366c0', // Color de texto morado
    },
    grayText: {
        color: '#8c8c8c', // Color de texto plomo
    },
});







