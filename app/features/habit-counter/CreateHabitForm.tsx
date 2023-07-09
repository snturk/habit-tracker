import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addHabit } from "./habitCounterSlice";
import { View } from "react-native";


export default function CreateHabitForm({ setShowForm }: { setShowForm: Function }) {
	const dispatch = useAppDispatch();
	const [name, setName] = useState("");
	const [emoji, setEmoji] = useState("🚀");
	const [isQuitting, setIsQuitting] = useState(false);

	const handleSubmit = () => {
		dispatch(addHabit({ name, emoji, isQuitting }));
		setShowForm(false);
	}

	return (
		<View>
			
		</View>
	)
}