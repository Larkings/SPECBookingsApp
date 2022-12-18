import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Alert, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  SafeAreaView, 
  Button } from 'react-native';
  import {
    useDimensions,
    useDeviceOrientation
  } from '@react-native-community/hooks'

export default function App() {
  console.log(useDimensions(), useDeviceOrientation());
  const orientation = useDeviceOrientation();

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
