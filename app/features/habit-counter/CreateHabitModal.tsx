import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addHabit } from "./habitCounterSlice";
import { Modal, Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";


export default function CreateHabitModal({ show, setShow }: { show: boolean, setShow: Function }) {
	const dispatch = useAppDispatch();
	const [name, setName] = useState("");
	const [emoji, setEmoji] = useState("🚀");
	const [isQuitting, setIsQuitting] = useState(false);

	const handleSubmit = () => {
		dispatch(addHabit({ name, emoji, isQuitting }));
		setShow(false);
	}

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={show}
			onRequestClose={() => {
				setShow(false);
			}
			}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Start A New Habit</Text>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Name</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => setName
							(text)}
						value={name}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Emoji</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => setEmoji
							(text)}
						value={emoji}
					/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Is Quitting?</Text>
					<Switch
						style={styles.input}
						onValueChange={(value) => setIsQuitting(value)}
						value={isQuitting}
					/>
				</View>
				<Pressable onPress={() => handleSubmit()}>
					<Text>Submit</Text>
				</Pressable>
				<Pressable onPress={() => setShow(false)}>
					<Text>Close</Text>
				</Pressable>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginBottom: 20,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#31AC8F",
		borderRadius: 8,
		boxShadow: "0px 0px 4px 4px rgba(49, 172, 143, 0.25)",
		width: "100%",
		height: "100%",
	},
	title: {
		fontSize: 20,
		fontWeight: "600",
		marginBottom: 30,
	},
	inputContainer: {
		marginBottom: 20,
	},
	label: {
		fontSize: 14,
		fontWeight: "600",
		marginBottom: 5,
	},
	input: {
		padding: 10,
		borderRadius: 8,
		backgroundColor: "#FFFFFF",
		boxShadow: "0px 0px 4px 4px rgba(49, 172, 143, 0.25)",
	},

});