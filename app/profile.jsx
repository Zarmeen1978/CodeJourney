import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Profile=()=> {
  return (
    <View style={styles.container}>
      <Text>Hi ! I am profile Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}
 export default Profile
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

