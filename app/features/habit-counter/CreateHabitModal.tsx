import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addHabit } from "./habitCounterSlice";
import { FontAwesome5 } from "@expo/vector-icons";
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import CreateHabitButton from "./CreateHabitButton";


export default function CreateHabitModal({ show, setShow }: { show: boolean, setShow: Function }) {
	const dispatch = useAppDispatch();
	const [name, setName] = useState("");
	const [emoji, setEmoji] = useState("");
	const [isQuitting, setIsQuitting] = useState(false);

	const handleSubmit = () => {
		dispatch(addHabit({ name, emoji, isQuitting }));
		setShow(false);
	}

	return (
		<SafeAreaView>
			<Modal
				animationType="slide"
				transparent={true}
				visible={show}
				onRequestClose={() => {setShow(false)}
			}>
				<View style={styles.container}>
				<Pressable style={styles.closeButton} onPress={() => setShow(false)}>
					<FontAwesome5 name="times" size={24} color="#FFFFFF" />
				</Pressable>
					<View style={styles.innerContainer}>
						<View style={styles.inputContainer}>
							<TextInput
								placeholder="Habit name"
								style={styles.input}
								onChangeText={(text) => setName(text)}
								value={name}
							/>
						</View>
						<View style={styles.inputContainer}>
							<TextInput
								placeholder="Icon"
								style={styles.input}
								onChangeText={(text) => setEmoji(text)}
								value={emoji}
							/>
						</View>
						<Pressable style={[styles.quittingContainer, isQuitting && {backgroundColor: "#C31712"}]} onPress={() => setIsQuitting(!isQuitting)}>
							<Text>Quitting?</Text>
						</Pressable>
						<CreateHabitButton action={handleSubmit} />
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		marginBottom: 20,
		flexDirection: "column",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#3A3A3E",
		borderRadius: 12,
		width: "100%",
		height: "100%",
	},
	closeButton: {
		position: "absolute",
		top: 20,
		right: 20,
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	closeButtonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "600",
	},
	innerContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		borderRadius: 12,
		marginTop: 60,
		width: "80%",
		height: "70%",
	},
	inputContainer: {
		marginBottom: 20,
	},
	input: {
		padding: 10,
		borderRadius: 8,
		width: 300,
		textAlign: "center",
		backgroundColor: "#D9D9D9",
	},
	quittingContainer: {
		padding: 10,
		paddingHorizontal: 20,
		borderRadius: 12,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
		userSelect: "none",
		backgroundColor: "#818181",
	},
	quittingLabel: {
		color: "#121242"
	},

});