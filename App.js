import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
      color="blue"
      title="Click me" 
      onPress={() => Alert.alert("My title", "My message", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "no", onPress: () => console.log("No")}
      ])}/>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
