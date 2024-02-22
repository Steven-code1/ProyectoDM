import {SafeAreaView, StyleSheet} from 'react-native';
import Navegacion from './src/Navegacion';

export default function App() {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <Navegacion />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
