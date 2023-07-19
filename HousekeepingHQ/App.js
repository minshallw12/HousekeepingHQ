import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './components/CustomComponent';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>My name is Will!</Text>
      <CustomComponent></CustomComponent>
      <Text>myfirst</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
