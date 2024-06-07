import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NoteListScreen from "./screens/NoteListScreen";
import CreateNoteScreen from './screens/CreateNoteScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Notes" component={NoteListScreen} />
        <Tab.Screen name="Add Notes" component={CreateNoteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


