import { View, Text, StyleSheet } from "react-native";

export default function NotificationsScreen() {
  return (
	<View style={styles.container}>
	  <Text>Notifications</Text>
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