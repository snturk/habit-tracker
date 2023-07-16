import { View, Pressable, StyleSheet, Text } from "react-native";


export default function CreateHabitButton({ action }: { action: Function }) {

	return (
		<Pressable onPress={() => action()}>
			<View style={styles.container}>
				<Text style={styles.buttonText}>Start a new Habit</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		marginBottom: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#31AC8F",
		borderRadius: 8,
		width: 190,
		height: 50,
		boxShadow: "0px 0px 4px 4px rgba(49, 172, 143, 0.25)"
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "600",
		width: "100%",
		textAlign: "center",
	},
});