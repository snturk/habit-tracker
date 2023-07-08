import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addHabit } from "./habitCounterSlice";
import { Button, Text, TextInput, View, StyleSheet, Pressable } from "react-native";

export default function CreateHabitForm() {
	const dispatch = useAppDispatch();
	const [name, setName] = useState("");
	const [isQuitting, setIsQuitting] = useState(false);
	const [emoji, setEmoji] = useState("🌱");

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Habit name"
				onChangeText={(text) => setName(text)}
				value={name}
			/>
			{/* Emoji picker */}
			<Pressable style={[styles.quittingContainer, isQuitting ? styles.quitting : null]} onPress={() => setIsQuitting(!isQuitting)}>
				<Text style={styles.label}>I'm Quitting</Text>
			</Pressable>
			<Button
				title="Create"
				onPress={() => {
					dispatch(addHabit({ name, isQuitting, emoji }))
					setName("");
					setIsQuitting(false);
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
	},
	input: {
		height: 40,
		width: 200,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	quittingContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	quitting: {
		backgroundColor: "#F0F0F0",
	},
	label: {
		margin: 8,
		userSelect: "none",
	},
});
