import { View, Text, StyleSheet } from "react-native";


export default function NoteItem({ note }) {
    return (
        <View style={styles.bg}>
            <Text style={styles.noteText} >
                {note}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'black',
        marginTop: 10,
        borderRadius: 16,
    },
    noteText: {
        color: 'white',
        padding: 10,
    }
});