import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import UserProfileCard from './examples/UserProfileCard';

export default function App({ user }) {
  return (
    <View style={styles.container}>
      {user ? (
        <UserProfileCard user={user} />
      ) : (
        <Text style={styles.text}>กรุณาเข้าสู่ระบบ</Text>
      )}
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
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
});
