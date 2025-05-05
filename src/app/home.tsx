import { Text, View, StyleSheet} from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";

export default function Home() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-Vindo</Text>
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 32,
        gap: 16
    },
    title: {
        fontSize: 18,
        fontWeight: "medium"
    }
})