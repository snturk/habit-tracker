import { View, Pressable, StyleSheet, Text } from "react-native";


export default function CreateHabitButton({ setShowForm }: { setShowForm: Function }) {

	return (
		<View style={styles.container}>
			<Pressable style={styles.button} onPress={() => setShowForm(true)}>
				<Text style={styles.buttonText}>Start a new Habit</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		marginBottom: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#31AC8F",
		borderRadius: 8,
		boxShadow: "0px 0px 4px 4px rgba(49, 172, 143, 0.25)"

	},
	button: {},
	buttonText: {
		fontSize: 16,
		fontWeight: "600",
		width: "100%",
		textAlign: "center",
	},
});