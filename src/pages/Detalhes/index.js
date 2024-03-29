import { Text, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

export default function Detalhes() {

    const route = useRoute()

    return (
        <SafeAreaView style={[styles.container]}>
            <Text style={[styles.title]}>{route.params?.nomeCurso}</Text>
            <Image source={route.params?.image} style={styles.image} />
            <Text>{route.params?.descricao}</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }, 
    title: {
        fontWeight: 'bold',
        padding: 5,
    },
    image: {
        width: 350,
        height: 350,
        marginBottom: 30,
    }
})