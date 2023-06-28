import { View, Text, StatusBar, StyleSheet } from "react-native";


export default function Home() {
	  return (
	<View style={styles.container}>
	  <Text>Habit Tracker AppS</Text>
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