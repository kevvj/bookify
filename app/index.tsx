import { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Home() {

    const text = "Esto es un texto de prueba para separar en palabras"
    const separatedText = text.split(" ")
    const identifiedText = separatedText.map((word, index) => ({
        id: index,
        value: word
    }))

    const styles = StyleSheet.create({
        container: {
            display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1
        },
        title: {
            flexDirection: 'row', flexWrap: 'wrap', gap: 7
        },
        parrafo: {
            flexDirection: 'row', flexWrap: 'wrap', gap: 7
        },
    })

    return (
        <View style={styles.container}>
            <View style={styles.parrafo}>
                {identifiedText.map((word) => (
                    <Text key={word.id}>{word.value}</Text>
                ))}
            </View>

        </View>
    )
}
