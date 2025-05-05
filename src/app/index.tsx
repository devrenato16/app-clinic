import { useState } from "react"
import {View, Text, StyleSheet} from "react-native"
import { router } from "expo-router"

import { Button } from "@/components/button"
import { Input } from "@/components/input"

export default function Index (){
    const [name, setName] =useState("")

    function handleNext(){
        router.navigate("/home")
        
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name} </Text>
            <Input onChangeText={setName} />

           <Button title="Entrar" onPress={handleNext} activeOpacity={0.5}/>
          
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        gap: 16,
    },
    title: {
        color: "#453460",
        fontSize: 24,
        fontWeight: "bold"
    }
})