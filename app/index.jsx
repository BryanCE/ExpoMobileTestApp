//HOME PAGE OF APP, SAME AS / ROUTE

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bryan's First Mobile</Text>
      <StatusBar style="auto" />
      <Link 
      href="/profile"
      style={{color: 'blue', marginTop: 20}}
      >
        Example
      </Link>
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
