import { View, Text, StyleSheet } from "react-native";
import HabitCounter from "../../features/counter/HabitCounter";

export default function HabitsScreen() {
  return (
	<View style={styles.container}>
	  <HabitCounter emoji="💧" name="Drink water"/>
	</View>
  );
}

const styles = StyleSheet.create({
	  container: {
			marginTop: 50,
			alignItems: 'center',
			justifyContent: 'center',
		},
});