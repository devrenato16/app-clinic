import {View, Text, StyleSheet, Alert, Button} from "react-native"

export default function Index (){
    function handleMessage(){
        const name = "Renas"
        Alert.alert(`Olá, ${name}`)
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, Renato B!</Text>

            <Button title="Enviar" onPress={handleMessage} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center"
    },
    title: {
        color: "#453460",
        fontSize: 24,
        fontWeight: "bold"
    }
})