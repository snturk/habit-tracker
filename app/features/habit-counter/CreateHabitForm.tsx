import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addHabit } from "./habitCounterSlice";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import Checkbox from 'expo-checkbox';

export default function CreateHabitForm() {
	const dispatch = useAppDispatch();
	const [name, setName] = useState("");
	const [isBad, setIsBad] = useState(false);

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Habit name"
				onChangeText={(text) => setName(text)}
				value={name}
			/>
			<View style={styles.checkboxContainer}>
				<Checkbox
					value={isBad}
					onValueChange={setIsBad}
					style={styles.checkbox}
				/>
				<Text style={styles.label}>Is bad?</Text>
			</View>
			<Button
				title="Create"
				onPress={() => {
					dispatch(addHabit({ name, isBad }))
					setName("");
					setIsBad(false);
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
	checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
	},
});
