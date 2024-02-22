import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import Icon from "react-native-vector-icons/FontAwesome5";



const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        // Verificar si el correo electrónico y la contraseña coinciden con los valores quemados
        if (email === 'admin' && password === 'admin') {
            navigation.navigate('MiAprendizaje');
        } else {
            // Si no coinciden, puedes mostrar un mensaje de error o realizar otra acción
            alert('Correo electrónico o contraseña incorrectos');
        }
    }


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
            {/* Fondo SVG */}
            {/*  <SvgFondo />  */}
            {/* Icono y texto de título */}
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" size={30} color="#FFF" style={styles.icon} />
                </TouchableOpacity>
                <Text></Text>
                <Text style={styles.titleText}>Inicia Sesión</Text>
            </View>
            {/* Texto "Email" y campo de entrada para correo electrónico */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ejemplo@email.com"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            {/* Texto "Contraseña" y campo de entrada para contraseña */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="**********"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            {/* Texto "o" */}
            <Text style={styles.orText}>o</Text>
            {/* Botón de "Continuar con Google" */}
            <TouchableOpacity style={[styles.button, { backgroundColor: '#DB4437' }]}>
                <Icon name="google" size={20} color="#FFF" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Continuar con Google</Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>

            {/* Botón de "Login" */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#7071AF' }]}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {/* Texto "¿No tienes cuenta? Regístrate" */}
            <Text style={styles.signupText}>¿No tienes cuenta? <Text style={styles.signupLink}>Regístrate</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    titleText: {
        color: '#0366c0',
        fontSize: 24,
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
        color: '#5a5b8c',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#FFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    orText: {
        color: '#0a0000',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 10,

    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    buttonIcon: {
        marginRight: 10,
    },
    signupText: {
        color: '#0a0000',
        fontSize: 16,
        textAlign: 'center',
    },
    signupLink: {
        fontWeight: 'bold',
    },
});

export default Login;






