import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList, RefreshControl } from "react-native";
import constantStyles from "../constants/constantStyles";
import NoteList from "./components/NoteList";
import NoteItem from "./components/NoteList";

export default function NoteListScreen({ navigation }) {
    const [notes, setNotes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefresh] = useState(false)

    const onRefresh = useCallback(() => {
        getNotes();
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 2000)
    })



    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            const response = await fetch("http://localhost:3000/notes");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setNotes(json);
        } catch (error) {
            console.error(`🚨 Error fetching notes: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={constantStyles.safeArea}>
            <View style={styles.view}>
                {notes.length <= 0 ?
                    <Text> Create Note ➕ </Text> :
                    <FlatList
                        data={notes}
                        key={item => item._id}
                        renderItem={({ item }) => <NoteItem note={item.note}></NoteItem>}
                        keyExtractor={item => item.id}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    />
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 16,
    },
    text: {
        fontSize: 20,
    }
});


