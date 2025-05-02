import {View, Text, StyleSheet} from "react-native"

export default function Index (){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, Renato!</Text>
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