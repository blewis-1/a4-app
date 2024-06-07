import { Text, TextInput, View, StyleSheet, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import constantStyles from "../constants/constantStyles";
import { useState } from "react";

export default function CreateNoteScreen() {

    const [note, setNote] = useState("");
    const [isPosting, setIsPosting] = useState(false);

    const onHandlePress = async () => {
        setIsPosting(true);
        try {
            const response = await fetch('http://localhost:3000/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ note }),
            });

            if (response.ok) {
                setIsPosting(false)
                const responseData = await response.json();
                console.log('Note saved successfully:', responseData);

            } else {
                console.error('Failed to save note:', response.statusText);
            }
        } catch (error) {
            setIsPosting(false);
            console.error('Error saving note:', error);
        }
    };

    return (
        <SafeAreaView style={constantStyles.safeArea}>
            {isPosting
                ?
                <View style={{ flex: 1, justifyContent: "center", }}>
                    <View style={styles.disableView} ></View>
                </View>

                : <KeyboardAvoidingView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={4}
                            onChangeText={text => setNote(text)}
                            style={styles.input}>
                        </TextInput>
                        <TouchableOpacity style={styles.btn} onPress={onHandlePress}>
                            <Text style={styles.btnText}> Save Notes </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            }
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    input: {
        height: "80%",
        width: '90%',
        margin: 16,
        padding: 16,
        backgroundColor: '#dee2e6',
        alignSelf: 'flex-start',
        borderRadius: 16,
    },
    btn: {
        alignSelf: 'center',
        alignItems: "center",
        width: 360,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#dee2e6",
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    disableView: {
        alignSelf: "center",
        justifyContent: "center",
        zIndex: 1,
        width: 50,
        height: 50,
        backgroundColor: "gray"
    }
});
